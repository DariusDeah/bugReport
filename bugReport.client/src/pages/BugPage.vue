<template>
  <div class="container">
    <div class="card">
      <img class="card-img-top" src="holder.js/100x180/" alt="">
      <div class="card-body">
        <h4 class="card-title">
          {{ buggy.title }}
        </h4>
        <p class="card-text">
          Text
        </p>
      </div>
    </div>
  </div>
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
      buggy: computed(() => AppState.activeBug)
    }
  }
}
</script>

<style>

</style>
