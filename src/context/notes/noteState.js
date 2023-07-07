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
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;