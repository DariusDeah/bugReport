<template>
  <div class="container graid ">
    <div class="card p-3  glass rounding" style="height:85vh">
      <div class="row">
        <div class="col-6">
          <div class="about text-left">
            <img class="rounded" :src="account.picture" alt="" />
            <p>{{ account.email }}</p>
          </div>
        </div>

        <ul class="nav nav-tabs">
          <li class="nav-item selectable">
            <a class="nav-link text-dark" aria-current="page">Settings</a>
          </li>
          <li class="nav-item selectable">
            <div class="nav-link text-dark" @click="accountStats()">
              Stats
            </div>
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
.nav-link:active{
  background-color: gray;
}
.glass{
  background-color: rgba(248, 248, 248, 0.466) !important;
  backdrop-filter: blur(.9rem);
  z-index: 4;
  height: 10rem;
  border: solid white 2px;
}
.rounding{
  border-radius: 2.5rem;
}
</style>
