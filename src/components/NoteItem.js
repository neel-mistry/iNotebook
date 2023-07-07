import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note } = props

    return (
        <div>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-pen-to-square mx-2 edit-icon"></i>
                    <i className="fa-solid fa-trash mx-2 edit-icon" onClick={()=>{deleteNote(note._id)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
