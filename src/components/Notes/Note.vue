<template>
    <div class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
          <div class="has-text-right has-text-grey-light mt-2">
            <small>{{ characterLength }}</small>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <RouterLink  :to="`/editNote/${ note.id }`" class="card-footer-item" href="#">
          Edit
        </RouterLink>
        <a @click.prevent="modals.deleteNote = true" href="#" class="card-footer-item">Delete</a>
      </footer>
      <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes';
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue';

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})
const storeNotes = useStoreNotes()

const characterLength = computed(() => {
  const length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${props.note.content.length} ${description}`
})

const modals = reactive({
  deleteNote: false
})
</script>