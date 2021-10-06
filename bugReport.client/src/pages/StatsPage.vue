<template>
  <div class="container-fluid">
    <div class="row p-0 my-4 ">
      <!-- <div class="col-lg-6">
        <div class="card glass">
          <div class="card-body">
            <blockquote class="blockquote mb-0 text-center">
              <p>Productivity</p>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card glass">
          <div class="card-body">
            <blockquote class="blockquote mb-0 text-center">
              <p>All-time Stats</p>
              <footer class="blockquote-footer">
                Footer<cite title="Source title">Source title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card glass">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Quote</p>
              <footer class="blockquote-footer">
                Footer<cite title="Source title">Source title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card glass">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Quote</p>
              <footer class="blockquote-footer">
                Footer<cite title="Source title">Source title</cite>
              </footer>
            </blockquote>
          </div> -->
    </div>
  </div>
  <div v-if="userBugs.length === 1">
    <Bugs v-for="b in userBugs " :key="b.id" :bugs="b" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
export default {
  setup() {
    onMounted(async() => await bugsService.getUserBugs())
    return {
      userBugs: computed(() => AppState.userBugs)
    }
  }

}
</script>

<style scoped>
.glass{
  background-color: rgba(233, 233, 233, 0.425) !important;
  backdrop-filter: blur(.5rem);
  z-index: 4;
  height: 10rem;
}
.pie{
  height: 15rem;
  z-index: 0;
  position: absolute;
  right: -20rem;
  bottom: 2px;
}

</style>
