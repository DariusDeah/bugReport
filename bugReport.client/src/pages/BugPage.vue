<template>
  <main class="bg-light">
    <div class="container">
      <div class="card p-3 pt-0 round-border " style="height:80vh">
        <div class="row">
          <div class="col-11 ">
            <div class="row pt-3 p-4">
              <div class="col-3">
                <h6>Priortiy Level</h6>
                <div class="rounding-ex   text-light fs-1 text-center" :class="{'bg-danger':bug.priority===5,'bg-warning':bug.priority < 5 && bug.priority >1, 'green':bug.priority === 1}" style="width:4rem">
                  {{ bug.priority }}
                </div>
              </div>
              <div class="col-9 text-center">
                <h1>{{ bug.title }}</h1>
              </div>
              <ul class="message-li">
                <li class="mdi mdi-chat-plus fs-3 text-purple" @click="toggleCommentForm()"></li>
                <li class="mdi mdi-chat-remove fs-3 text-purple"></li>
              </ul>
            </div>

            <div class="row text-center  ">
              <h6>{{ bug.description }}</h6>
            </div>
          </div>
          <div class="col-1 bg-purple text-center pt-4 p-1  overflow-auto tracker-section" style="height:80vh">
            <div class="row text-light">
              <h5>Trackers</h5>
            </div>
            <!-- <img :src="bug.creator.picture" alt="" class="rounded-circle mb-2" style="width: 3rem">
            <img :src="bug.creator.picture" alt="" class="rounded-circle mb-2" style="width: 3rem">
            <img :src="bug.creator.picture" alt="" class="rounded-circle mb-2" style="width: 3rem">
            <img :src="bug.creator.picture" alt="" class="rounded-circle mb-2" style="width: 3rem">
            <img :src="bug.creator.picture" alt="" class="rounded-circle mb-2" style="width: 3rem">
            <img :src="bug.creator.picture" alt="" class="rounded-circle mb-2" style="width: 3rem"> -->
          </div>
        </div>
      </div>
    </div>
    <section class="container">
      <div class="card">
        <div class="row visually-hidden justify-content-center" id="CommentForm">
          <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Notes</label>
          </div>
        </div>
      </div>
    </section>
    <section class="container ">
      <div class="row px-2 mt-2">
        <Notes v-for="n in notes " :key="n.id" :notes="n " />
      </div>
    </section>
  </main>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
import { notesService } from '../services/NotesService'
export default {
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await bugsService.getBugById(route.params.bugId)
      await notesService.getNotesByBugId(route.params.bugId)
    })

    return {
      bug: computed(() => AppState.activeBug),
      notes: computed(() => AppState.notes),
      toggleCommentForm() {
        document.getElementById('CommentForm').classList.toggle('visually-hidden')
      }
    }
  }
}
</script>

<style scoped>
.bg-purple{
background-color: #875cff;
}
.text-purple{
color: #875cff;
}
.tracker-section{
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
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
