<template>
    <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Add a new Note" ref="newNoteRef" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
            <slot name="buttons"></slot>
        </div>
      </div>
    </div>
    </div>
</template>