<template>
  <div v-if="trackedBug">
    <img :src="trackedBug.picture" alt="" class="rounded-circle mb-2" style="width: 3rem">
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { TrackersModel } from '../Models/TrackersModel'
import { AppState } from '../AppState'

export default {
  props: {
    trackedBug: { type: TrackersModel, required: true }
  },
  setup(props) {
    return {
      props,
      Account: computed(() => AppState.account)
    }
  }

}
</script>

<style>

</style>
