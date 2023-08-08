<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      ref="addEditNoteRef"
      placeholder="Edit note"
      label="Edit Note"
    >
      <template #buttons>
        <button class="button is-link is-light mr-2" @click="$router.back()">
          Cancel
        </button>
        <button
        @click="handleSaveClicked"
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
import { useStoreNotes } from "../stores/storeNotes";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const storeNotes = useStoreNotes();

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/")
}

</script>
