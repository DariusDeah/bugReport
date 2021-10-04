<template>
  <form class="mb-3" @submit.prevent="createBug()">
    <label for="" class="form-label"></label>
    <div class="mb-3">
      <label for="" class="form-label">Priority Level</label>
      <select class="form-control" name="" id="" v-model="bug.priority">
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
           id=""
           aria-describedby="helpId"
           placeholder=""
           v-model="bug.title"
    >
    <label for="bug-description" class="form-label">Description</label>
    <textarea type="text"
              class="form-control text-area"
              name="bug-description"
              id=""
              aria-describedby="helpId"
              placeholder=""
              v-model="bug.description"
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
export default {

  setup() {
    const editable = ref({})

    return {
      editable,
      bug: computed(() => AppState.bugs),
      async createBug() {
        await bugsService.createBug(editable.value)
      }
    }
  }
}
</script>

<style>

</style>
