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
            </div>

            <div class="row text-center  ">
              <h6>{{ bug.description }}</h6>
            </div>
          </div>
          <div class="col-1 bg-purple text-center pt-4 p-3  overflow-auto tracker-section" style="height:80vh">
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
  </main>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { BugModel } from '../Models/BugModel'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
export default {
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await bugsService.getBugById(route.params.bugId)
    })

    return {
      bug: computed(() => AppState.activeBug)
    }
  }
}
</script>

<style scoped>
.bg-purple{
background-color: #875cff;
}
.tracker-section{
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
}
.round-border{
  border-radius: 3rem;
}
</style>
