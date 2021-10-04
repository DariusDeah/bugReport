<template>
  <form class="mb-3" @submit.prevent="createBug()">
    <label for="" class="form-label"></label>
    <div class="mb-3">
      <label for="" class="form-label">Priority Level</label>
      <select class="form-control" name="" id="" v-model="editable.priority">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <label for="bug-title" class="form-label">Title</label>
    <input type="text"
           class="form-control"
           name="bug-title"

           aria-describedby="helpId"
           placeholder=""
           v-model="editable.title"
    >
    <label for="bug-description" class="form-label">Description</label>
    <textarea type="text"
              class="form-control text-area"
              name="bug-description"

              aria-describedby="helpId"
              placeholder=""
              v-model="editable.description"
    >
    </textarea>
    <button type="submit">
      send
    </button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { bugsService } from '../services/BugsService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { router } from "../router"
export default {

  setup() {
    const editable = ref({})

    return {
      editable,
      bug: computed(() => AppState.bugs),
      async createBug() {
        try {
          await bugsService.createBug(editable.value)
          router.push{name:'Bug'}
        } catch (error) {
          logger.log(error)
        }
      }
    }
  }
}
</script>

<style>

</style>
