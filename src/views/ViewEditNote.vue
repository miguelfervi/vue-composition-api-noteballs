<template>
    <div class="edit-note">
     <AddEditNote v-model="noteContent" bgColor="link" ref="addEditNoteRef" placeholder="Edit note" label="Edit Note">
      <template #buttons>
        <button
          class="button is-link is-light"
          @click="$router.back()"
          >
           Cancel
        </button>
        <button
          class="button is-link has-background-link"
         :disabled="!noteContent"
          >
          Save Note
        </button>
      </template>
    </AddEditNote>

    </div>
</template>

<script setup>
    import { ref } from "vue";

    import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { RouterLink } from "vue-router";


    const noteContent = ref("");

</script>