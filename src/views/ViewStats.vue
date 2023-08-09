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
                    <td>{{storedNotes.totalNotesCount}}</td>
                </tr>
                <tr>
                    <td>Number of total characters</td>
                    <td>{{ storedNotes.totalCharactersCount }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

import { useStoreNotes } from '@/stores/storeNotes';

const storedNotes = useStoreNotes();

</script>