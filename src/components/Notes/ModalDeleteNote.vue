<template>
    <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
        <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
        Are you sure you want to delete this note?
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
            <button class="button" @click="closeModal">Cancel</button>
            <button class="button is-danger" @click="deleteNote(noteId)">Delete</button>
        </footer>
    </div>
    </div>
</template>

<script setup>

import {onMounted, onUnmounted, ref} from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from '@/stores/storeNotes'


const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    noteId: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const storeNotes = useStoreNotes()


const closeModal = () => {
    emit('update:modelValue', false)
}

const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal)


const handleKeyboard = e => {
    if(e.key === 'Escape') closeModal()
}

onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
})

onUnmounted( () => {
    document.removeEventListener('keyup', handleKeyboard)
})

const deleteNote = (noteId) => {
    storeNotes.deleteNote(noteId)
    closeModal()
}

</script>