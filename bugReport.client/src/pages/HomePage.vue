<template>
  <main class="bg-light">
    <div class="container-fluid ">
      <div class="card most-tracked-holder p-1 mb-2 ">
        <div class="row text-center">
          <h2>Most Tracked</h2>
        </div>
        <div class="card-body">
          <div class="row pt-3 justify-content-center">
            <div class="col-4">
              <div class="card p-2 rounding">
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
              <div class="card p-2 rounding ">
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
              <div class="card p-2 rounding ">
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
    </div>
    <section class="container-fluid ">
    </section>
    <section class="container-fluid">
      <div class="card rounding">
        <div class="card p-2  ">
          <div class="row ">
            <div class="col-lg-6 ">
              <span class="d-flex ">
                <h2>Level:</h2>
                <button class="btn border query-btn ">1</button>
                <button class="btn border query-btn ">2</button>
                <button class="btn border query-btn ">3</button>
                <button class="btn border query-btn ">4</button>
                <button class="btn border query-btn ">5</button>

              </span>
            </div>
            <div class="col-lg-6">
              <div class="input-group">
                <input type="search"
                       class="form-control rounded"
                       placeholder="Search"
                       aria-label="Search"
                       aria-describedby="search-addon"
                />
                <button type="button" class="btn border-purple">
                  search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body overflow-auto" style="height:55vh">
          <Bugs v-for="b in bugs " :key="b.id" :bugs=" b" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      await bugsService.getBugs()
    })
    return {
      bugs: computed(() => AppState.bugs)
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

.query-btn {
    &:visited {
      background-color:#875cff!important ;
      color: white;
    }
    &:hover {
      background-color:#875cff !important;
      color: white;
    }
    &:active {
      background-color:#875cff !important;
      color: white;
    }

}
.border-purple{
      border: #875cff solid 1px;
      &:hover{
        background-color: #875cff;
        color: white;
      }
    }

</style>
