<template>
  <router-link :to="{name:'Bug', params:{bugId:bugs.id}}">
    <div class="card p-4 m-2  rounding" :class="{'border border-danger':bugs.priority===5,'selectable':bugs.closed===false,'disabled':bugs.closed === true} ">
      <div class="row">
        <div class="col-lg-2">
          <span class="">
            <h6>Priortiy Level</h6>
            <div class="rounding-ex   text-light fs-1 text-center" :class="{'bg-danger':bugs.priority===5,'bg-warning':bugs.priority < 5 && bugs.priority >1, 'green':bugs.priority === 1}" style="width:4rem">
              {{ bugs.priority }}
            </div>
          </span>
        </div>
        <div class="col-lg-3">
          <h2>{{ bugs.title }}</h2>
        </div>
        <div class="col-4">
          <p>{{ bugs.description }}</p>
        </div>
        <div class="col-3 ">
          <div class="row">
            <h4>Discovered by:</h4>
          </div>
          <div class="row ">
            <img :src="bugs.creator.picture" alt="" style="width:5rem" class="rounded-circle">
            {{ bugs.creator.name }}
          </div>
          <div class="row mt-3">
            <h4>Trackers:</h4>
          </div>
          <div class="row ">
            <!-- show each trackers profile -->
            <img :src="bugs.creator.picture" alt="" style="width:4rem" class="rounded-circle mb-2">
            <img :src="bugs.creator.picture" alt="" style="width:4rem" class="rounded-circle mb-2">
            <img :src="bugs.creator.picture" alt="" style="width:4rem" class="rounded-circle mb-2">
            <img :src="bugs.creator.picture" alt="" style="width:4rem" class="rounded-circle mb-2">
            <img :src="bugs.creator.picture" alt="" style="width:4rem" class="rounded-circle mb-2">
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
import { BugModel } from '../Models/BugModel'
export default {
  props: {
    bugs: {
      type: BugModel, required: true
    }
  },
  setup() {
    return {
    }
  }

}
</script>
<style>
.rounding-ex{
  border-radius: 50%;
}
.green{
  background-color: rgb(5, 161, 5);
}
</style>
