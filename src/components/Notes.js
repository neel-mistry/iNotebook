import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context
    const ref = useRef(null)
    const refClose = useRef(null)

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
    }
    
    const handleOnClick = () => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        setNote({ id: "", etitle: "", edescription: "", etag: "" })
        refClose.current.click()
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className='my-2'>
                {/* <!-- Button trigger modal --> */}
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='container'>
                                    <div className="mb-3">
                                        <label htmlFor="etitle" className="form-label">Enter Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" onChange={onChange}  value={note.etitle}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="edescription" className="form-label">Write Something</label>
                                        <textarea className="form-control" id="edescription" name="edescription" rows="3" onChange={onChange} value={note.edescription}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="etag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} />
                                    </div>   
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleOnClick}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='my-3'>Your Notes</h3>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
                })}
            </div>
        </>
    )
}

export default Notes
