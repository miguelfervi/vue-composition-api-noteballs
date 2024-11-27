import { defineStore } from "pinia";
import { collection, onSnapshot, doc, deleteDoc, updateDoc, query, orderBy, addDoc } from "firebase/firestore";
import { db } from "@/js/firebase";
import { useStoreAuth } from "./storeAuth";

let notesCollectionRef
let notesCollectionQuery
let getNotesSnapshot = null

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
      notesLoaded: false
    };
  },
  actions: {
    async getNotes() {
      this.notesLoaded = false
      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }

          notes.push(note)
        });
        setTimeout(() => {
          this.notes = notes
          this.notesLoaded = true
        },2000)

      });
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString();

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date
      });
    },
    async deleteNote(idToDelete) {
        await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content
      });
    },
    init() {
      const storeAuth  = useStoreAuth()

      notesCollectionRef = collection(db, "users", storeAuth.user.id, 'notes'  )
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
      this.getNotes()
    },
    clearNotes() {
      this.notes = []
      if(getNotesSnapshot)  getNotesSnapshot() // unsubscribe from any active listener
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
