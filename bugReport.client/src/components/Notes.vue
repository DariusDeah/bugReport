<template>
  <div class="card round-border">
    <div class="card-body">
      <h5 class="card-title">
      </h5>
      <i class="mdi mdi-delete text-danger selectable fs-3" @click="removeNote()"></i>
      <h4 class="card-text " style="font-size:15px">
        <!-- {{ notes.body }} -->
      </h4>
      <!-- <p>{{ notes.createdAt }}</p> -->
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { NoteModel } from '../Models/NoteModel'
import { notesService } from '../services/NotesService'
import Pop from '../utils/Pop'
export default {
  props: {
    note: { type: NoteModel, required: true }
  },
  setup(props) {
    return {
      notes: computed(() => AppState.notes),
      async removeNote() {
        try {
          if (Pop.confirm) {
            await notesService.removeNote(props.note.id)
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style>

</style>
