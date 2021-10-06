<template>
  <div class="modal fade"
       id="modalId"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modalTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <!-- SLOT -->
            <slot name="modal-title"></slot>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- SLOT -->
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn bg-purple text-light selectable">
            Report
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bg-purple{
background-color:#875cff !important;
}
</style>
