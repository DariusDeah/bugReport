<template>
  <main class="bg-light">
    <div class="container">
      <div class="card p-3 pt-0 rounded " style="height:80vh">
        <div class="row">
          <div class="col-11 ">
            <div class="row pt-3 p-4">
              <div class="col-3 ">
                <h6>Discovered by</h6>
                <div v-if="bug.creator">
                  <img :src="bug.creator.picture" alt="" class="rounded-circle mb-2" style="height:3rem">
                </div>
                <h6>Priortiy Level</h6>
                <div class="rounding-ex   text-light fs-1 text-center" :class="{'bg-danger':bug.priority===5,'bg-warning':bug.priority < 5 && bug.priority >1, 'green':bug.priority === 1}" style="width:4rem">
                  {{ bug.priority }}
                </div>
              </div>
              <div class="col-6 text-center">
                <h1>{{ bug.title }}</h1>
              </div>
              <ul class="message-li">
                <li class="mdi mdi-chat-plus fs-3 text-purple" @click="toggleCommentForm()"></li>
                <li class="mdi mdi-chat-remove fs-3 text-purple"></li>
              </ul>
            </div>
            <!--  -->
            <i class="mdi mdi-star-circle selectable fs-4" @click="trackBug()"></i>
            <div class="row justify-content-center close-buttons" v-if="account.id === bug.creatorId">
              <div class="col-lg-2 d-flex">
                <button class="btn border border-success " @click="closeBug()" :class="{'btn-success disabled':bug.closed===false}">
                  open
                </button>
                <button class="btn border border-secondary selectable" :class="{'btn-secondary':bug.closed===true}" @click="closeBug()">
                  close
                </button>
                <button class="btn border border-secondary  " @click="softDelete()">
                  delete
                </button>
                <button class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#bug-modal-edit">
                  edit
                </button>
              </div>
            </div>
            <!--  -->
            <Modal id="bug-modal-edit">
              <template #modal-title>
                <h4>Edit Bug</h4>
              </template>
              <template #modal-body>
                <EditBugForm />
              </template>
            </Modal>
            <div class="row text-center  ">
              <h6>{{ bug.description }}</h6>
            </div>
          </div>
          <div class="col-1 bg-purple text-center pt-4 p-1  overflow-y-auto tracker-section" style="height:80vh">
            <div class="row text-light">
              <h5>Trackers</h5>
            </div>
            <Trackers v-for="t in tracked" :key="t.id" :tracked-bug="t" />
          </div>
        </div>
      </div>
    </div>
    <section class="container">
      <form @submit.prevent="createNote()">
        <div class="card">
          <div class="row visually-hidden justify-content-center" id="CommentForm">
            <div class="form-floating">
              <input class="form-control"
                     placeholder="Leave a comment here"
                     id="floatingTextarea"
                     v-model="editable.body"
              />
              <label for="floatingTextarea">Notes</label>
            </div>
          </div>
        </div>
        <div class="col-2">
        </div>
      </form>
    </section>
    <section class="container ">
      <div class="row px-2 mt-2">
        <Notes v-for="n in notes " :key="n.id" :note="n " />
      </div>
    </section>
  </main>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
import { notesService } from '../services/NotesService'
import Pop from '../utils/Pop'
import { BugModel } from '../Models/BugModel'
import { router } from '../router'
import { accountService } from '../services/AccountService'
export default {
  props: {
    trackedBug: {
      type: Object, required: true
    }
  },
  setup(props) {
    const editable = ref({})
    const route = useRoute()
    onMounted(async() => {
      await bugsService.getBugById(route.params.bugId)
      await notesService.getNotesByBugId(route.params.bugId)
      await bugsService.getTrackedBugs(route.params.bugId)
    })

    return {
      editable,
      bug: computed(() => AppState.activeBug),
      notes: computed(() => AppState.notes),
      account: computed(() => AppState.account),
      tracked: computed(() => AppState.trackedBugs),
      toggleCommentForm() {
        document.getElementById('CommentForm').classList.toggle('visually-hidden')
      },
      async createNote() {
        try {
          await notesService.createNote(editable.value, editable.value.bugId = AppState.activeBug.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },

      async closeBug(bugData) {
        try {
          await bugsService.closedBug(AppState.activeBug.id)
          Pop.toast('bug closed', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async softDelete() {
        try {
          if (Pop.confirm) {
            await bugsService.softDelete(AppState.activeBug.id)
            Pop.toast('bug deleted', 'success')
            router.push('/')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async trackBug() {
        try {
          await accountService.trackBug()
          Pop.toast('bug tracked', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
.bg-purple{
background-color: #605cff !important;
}
.text-purple{
color: #605cff;
}

.round-border{
  border-radius: 3rem;
}
.message-li{
  position: absolute;
  bottom: 0%;
  list-style: none;
  width: 4rem;
}
li{
  cursor: pointer;
}
</style>
