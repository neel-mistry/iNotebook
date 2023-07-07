import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "64a427e66d88a26291ec5292",
            "user": "64a3ce1c7e47cb49afb4b341",
            "title": "Hello Second Note",
            "description": "Second Description",
            "tag": "Personal",
            "date": "2023-07-04T14:08:38.309Z",
            "__v": 0
        },
        {
            "_id": "64a427e66d88a26291e3c5292",
            "user": "64a3ce1c7e47cb49afb4b341",
            "title": "Hello Second Note",
            "description": "Second Description",
            "tag": "Personal",
            "date": "2023-07-04T14:08:38.309Z",
            "__v": 0
        },
        {
            "_id": "64a427e66d88a26291ec25292",
            "user": "64a3ce1c7e47cb49afb4b341",
            "title": "Hello Second Note",
            "description": "Second Description",
            "tag": "Personal",
            "date": "2023-07-04T14:08:38.309Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API Call
        const note = {
            "_id": "64a427e66d88a26dfs291ec25292",
            "user": "64a3ce1c7e47cb49afb4b341",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-04T14:08:38.309Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    // Delete a Note
    const deleteNote = (id) => {
        // TODO: API Call
        console.log("Deleting note.... \nID: " +id);
        const newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
    }
    // Update a Note
    const updateNote = (id, title, description, tag) => {

    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;