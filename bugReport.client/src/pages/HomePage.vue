<template>
  <main class="bg-light">
    <!-- <div class="container  ">
      <div class="card most-tracked-holder p-1 mb-4 pb-5 ">
        <div class="row text-center">
          <h2>Most Tracked</h2>
        </div>
        <div class="card-body ">
          <div class="row pt-3 justify-content-center">
            <div class="col-4">
              <div class="card p-2 rounding  most-tracked " data-aos="fade-left">
                <img class="card-img-top" src="holder.js/100px180/" alt="">
                <div class="card-body">
                  <h4 class="card-title">
                    Title
                  </h4>
                  <p class="card-text">
                    Text
                  </p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card p-2 rounding  most-tracked  ">
                <img class="card-img-top" src="holder.js/100px180/" alt="">
                <div class="card-body">
                  <h4 class="card-title">
                    Title
                  </h4>
                  <p class="card-text">
                    Text
                  </p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card p-2 rounding  most-tracked ">
                <img class="card-img-top" src="holder.js/100px180/" alt="">
                <div class="card-body">
                  <h4 class="card-title">
                    Title
                  </h4>
                  <p class="card-text">
                    Text
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="row btm-border mx-4 mb-4"></div>
    <section class="container ">
      <div class="card rounding">
        <div class="card p-3 ">
          <div class="row  ">
            <div class="col-lg-6">
              <span class="d-flex  ">
                <h2>priority filter:</h2>
                <div :v-if="bugs">
                  <button class="mdi mdi-arrow-up" :class="{'mdi mdi-arrow-down':sorting===false}" @click="sorting=!sorting"></button>
                </div>
                <button class="btn bg-purple ms-5 text-white fw-bold " data-bs-toggle="modal" data-bs-target="#bug-modal">+Bug</button>
                <button class="ms-2" @click="opened = !opened">open|closed</button>
              </span>

              <Modal id="bug-modal">
                <template #modal-title>
                  <h4>Report Bug</h4>
                </template>
                <template #modal-body>
                  <BugForm />
                </template>
              </Modal>
            </div>
          </div>
        </div>
        <div class="card-body overflow-auto" style="height:120vh">
          <Bugs v-for="b in bugs " :key="b.id" :bugs="b" />
        </div>
      </div>
    </section>
    <div class="row btm-border mx-4 my-4"></div>
    <section class="container p-3 ">
      <div class="row">
        <div class="col-6 ">
          <h6>Bug Report</h6>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default {
  name: 'Home',
  setup() {
    const sorting = ref(false)
    const opened = ref(true)
    onMounted(async() => {
      await bugsService.getBugs()
    })

    function sortByPriority(a, b) {
      if (sorting.value) {
        return b.priority - a.priority
      }
      return a.priority - b.priority
    }

    function filterByClosed(b) {
      if (opened.value) {
        b.closed = true
      }
      return false
    }

    return {
      sorting,
      opened,
      bugs: computed(() => AppState.bugs.sort(sortByPriority))
      // .filter(filterByClosed))
    }
  }

}
</script>

<style lang="scss" scoped >
.most-tracked-holder{
  border-radius: 1rem;
}
.rounding{
  border-radius: 1rem;
}

// .query-btn {
//     &:visited {
//       background-color:#875cff!important ;
//       color: white;
//     }
//     &:hover {
//       background-color:#875cff !important;
//       color: white;
//     }
//     &:active {
//       background-color:#875cff !important;
//       color: white;
//     }

// }
// .border-purple{
//       border: #875cff solid 1px;
//       &:hover{
//         background-color: #875cff;
//         color: white;
//       }
//     }

.btm-border{
  border-bottom: rgba(255, 255, 255, 0.945) 2.5px solid;

}
.purple{
color:#605cff ;
}
// .most-tracked:hover{
//     border: #875cff solid 1px;
//     cursor: pointer;
// }
.bg-purple{
    background-color: #605cff !important;
}

</style>
