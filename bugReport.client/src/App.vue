<template>
  <main class="container-fluid">
    <div class="row ">
      <Sidebar class="col-md-1 p-0 " />
      <div class="col-md-11 p-0">
        <Navbar />
        <div class="col-md-12 viewport">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.stick{
   position: -webkit-sticky;
  position: sticky ;
  left: 0%;
  top: 0%;
}
</style>
