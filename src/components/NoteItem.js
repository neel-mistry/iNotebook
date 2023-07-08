import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note, updateNote } = props

    return (
        <div>
            <div className="card my-3">
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                    <h5 className="card-title">{note.title}</h5>
                    <i className="fa-solid fa-pen-to-square mx-2 edit-icon" onClick={()=>{updateNote(note)}}></i>
                    <i className="fa-solid fa-trash mx-2 edit-icon" onClick={()=>{deleteNote(note._id)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <span className="badge rounded-pill text-bg-info">{ note.tag }</span>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
