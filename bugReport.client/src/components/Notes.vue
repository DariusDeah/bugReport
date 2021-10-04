<template>
  <div class="card round-border">
    <img :src="note.creator.picture" alt="" class="rounded-circle mb-2" style="width: 3rem">
    <div class="card-body">
      <h5 class="card-title">
        {{ note.creator.name }}
      </h5>
      <p class="card-text " style="font-size:15px">
        {{ note.body }}
      </p>
      <p>{{ note.createdAt }}</p>
    </div>
  </div>
</template>

<script>
import { NoteModel } from '../Models/NoteModel'
export default {
  props: {
    note: { type: NoteModel, required: true }
  }
}
</script>

<style>

</style>
