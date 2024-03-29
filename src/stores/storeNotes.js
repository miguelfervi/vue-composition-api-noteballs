import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sed expedita voluptatibus assumenda facilis corrupti sint dolorum quam autem. Ad at beatae, non dolor illum unde quae pariatur debitis explicabo.",
        },
        {
          id: "id2",
          content: "This is a shorter note",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
          let currentDate = new Date().getTime(),
            id = currentDate.toString();

          let note = {
            id,
            content: newNoteContent,
          };

          this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
        this.notes = this.notes.filter((note) => note.id !== idToDelete);

    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => {
        return note.id === id;
      });

      this.notes[index].content = content;
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => { return note.id === id})[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let totalCharacters = 0;

      state.notes.forEach((note) => {
        totalCharacters += note.content.length;
      });

      return totalCharacters;
    }
  }
});
