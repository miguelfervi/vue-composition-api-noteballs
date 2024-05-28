import { defineStore } from "pinia";
import { collection, onSnapshot, doc, setDoc } from "firebase/firestore";
import { db } from "@/js/firebase";

const notesCollectionRef = collection(db, "notes")

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionRef, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content
          }
  
          notes.push(note)
        });
        this.notes = notes
      });
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      await setDoc(doc(notesCollectionRef), id), {
        content: newNoteContent
      };
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => {
        return note.id === id;
      });

      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => {
          return note.id === id;
        })[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let totalCharacters = 0;

      state.notes.forEach((note) => {
        totalCharacters += note.content.length;
      });

      return totalCharacters;
    },
  },
});
