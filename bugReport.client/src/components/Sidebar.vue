<template>
  <div class="sidebar d-md-flex flex-column justify-content-between px-3 p-2  d-none d-md-block">
    <div class="top-part">
      <div class=" py-3">
        <router-link class="navbar-brand d-flex justify-content-center" :to="{ name: 'Home' }">
          <div class="d-flex flex-column align-items-center">
            <i class="fas fa-bug text-light fs-1"></i>
          </div>
        </router-link>
      </div>
      <div class="links">
        <ul class="nav-links page  ps-0 ">
          <li class=" page text nav-link text-light pb-3 fw-bold ">
            link to dashboard
          </li>
          <li class="nav-link text-light pb-3 fw-bold">
            my tracked bugs
          </li>
          <li class="nav-link  text-light pb-3 fw-bold">
            link to completed
          </li>
          <li class="nav-link  text-light pb-3 fw-bold">
            link to stats
          </li>
          <li class="nav-link  text-light pb-3 fw-bold">
            <router-link :to="{ name: 'About' }" class="btn text-light   text-uppercase">
              About
            </router-link>
          </li>
          <li class="nav-link  text-light pb-3 fw-bold">
            link to something
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom-part">
      <Auth />
      <button
        class="btn selectable  text-uppercase my-2 my-lg-0"
        @click="login"
        v-if="!user.isAuthenticated"
      >
        Login
      </button>

      <div class="dropdown my-2 my-lg-0" v-else>
        <div
          class="dropdown-toggle selectable"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          id="authDropdown"
        >
          <img
            :src="user.picture"
            alt="user photo"
            height="40"
            class="rounded-circle"
          />
          <span class="mx-3 text-light lighten-30">{{ user.name }}</span>
        </div>
        <div
          class="dropdown-menu p-0 list-group w-100"
          aria-labelledby="authDropdown"
        >
          <router-link :to="{ name: 'Account' }">
            <div class="list-group-item list-group-item-action hoverable">
              Manage Account
            </div>
          </router-link>
          <div
            class="list-group-item list-group-item-action hoverable text-danger"
            @click="logout"
          >
            <i class="mdi mdi-logout"></i>
            logout
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style>
.sidebar{
  background-color: #875cff;
  height: 100vh;
   position: -webkit-sticky;
  position: sticky ;
  left: 0%;
  top: 0%;
}
.page :hover{
  background-color:#e5e5e5 !important;
  color:#875cff !important;
  cursor: pointer !important;
width: 20rem;
border-radius: 12rem;

}
.page{
  width: 15rem;
}

.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active{
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

</style>
