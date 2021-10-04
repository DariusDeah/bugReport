<template>
  <div class="container">
    <div class="card p-3" style="height:85vh">
      <div class="row">
        <div class="col-6">
          <div class="about text-left">
            <img class="rounded" :src="account.picture" alt="" />
            <p>{{ account.email }}</p>
          </div>
        </div>

        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Settings</a>
          </li>
          <li class="nav-item selectable">
            <div class="nav-link text-dark" @click="accountStats()">
              Stats
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Link</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { router } from '../router'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account),
      async accountStats() {
        router.push({ name: 'Account.Stats' })
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
