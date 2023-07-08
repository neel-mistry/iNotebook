import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5001"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get all notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2NlMWM3ZTQ3Y2I0OWFmYjRiMzQxIn0sImlhdCI6MTY4ODQ2Nzg1MX0.CqsBYuqQx2jZpxQyQQW90Rj7_myedqOLDyxlA_k3IgI" 
            }
          });
          const json = await response.json(); 
          console.log(json);
          setNotes(json);
    }
    // Add a Note
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2NlMWM3ZTQ3Y2I0OWFmYjRiMzQxIn0sImlhdCI6MTY4ODQ2Nzg1MX0.CqsBYuqQx2jZpxQyQQW90Rj7_myedqOLDyxlA_k3IgI"
            },
            body: JSON.stringify({title, description, tag}),
          });
          const note = await response.json(); 
          setNotes(notes.concat(note))
    }
    // Delete a Note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2NlMWM3ZTQ3Y2I0OWFmYjRiMzQxIn0sImlhdCI6MTY4ODQ2Nzg1MX0.CqsBYuqQx2jZpxQyQQW90Rj7_myedqOLDyxlA_k3IgI"
            }
          });
          const json = await response.json(); 
          console.log(json);
          setNotes(json);
        const newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
    }
    // Update a Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2NlMWM3ZTQ3Y2I0OWFmYjRiMzQxIn0sImlhdCI6MTY4ODQ2Nzg1MX0.CqsBYuqQx2jZpxQyQQW90Rj7_myedqOLDyxlA_k3IgI"
            },
            body: JSON.stringify({title, description, tag}),
          });
          const json = await response.json(); 
          console.log(json)


          let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
              newNotes[index].title = title;
              newNotes[index].description = description;
              newNotes[index].tag = tag;
              break;
            }
        }
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;