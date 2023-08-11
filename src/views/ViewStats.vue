<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stats</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ storedNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of total characters</td>
          <td>{{ storedNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteballs"
      class="input"
      type="text"
      placeholder="Do you love noteballs??"
      v-autofocus
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";

const storedNotes = useStoreNotes();

const loveNoteballs = ref("");

useWatchCharacters(loveNoteballs, 50);
</script>
