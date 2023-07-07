import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    
    const handleOnClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className='my-3'>
                <h3 className='my-3'>What's on your mind?</h3>
            </div>
            <form className='container'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Write Something</label>
                    <textarea className="form-control" id="description" name="description" rows="3" onChange={onChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
            </form>
        </div>
    )
}

export default AddNote
