<template>
  <div class="notes">
    <AddEditNote>
      <template #buttons>
        <button
          :disabled="!newNote"
          @click="addNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

const newNote = ref("");
const newNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
