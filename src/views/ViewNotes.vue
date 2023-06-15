<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea v-model="newNote" class="textarea" placeholder="Add a new Note" ref="newNoteRef" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button :disabled="!newNote" @click="addNote" class="button is-link has-background-success">Add New Note</button>
        </div>
      </div>
    </div>

    <Note v-for="note in notes" key="note.id" :note="note" @deleteClicked="deleteNote" />

  </div>
</template>

<script setup>

import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)


const notes = ref([
  {
    id: "id1",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sed expedita voluptatibus assumenda facilis corrupti sint dolorum quam autem. Ad at beatae, non dolor illum unde quae pariatur debitis explicabo."
  },
  {
    id: "id2",
    content: "This is a shorter note"
  }
])


const addNote = () => {

  let currentDate = new Date().getTime(),
    id = currentDate.toString()
  
  let note = {
    id,
    content: newNote.value
  }

  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
}

const deleteNote = idToDelete => {
  notes.value = notes.value.filter(note => { return note.id !== idToDelete})
}
</script>
