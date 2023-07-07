import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext)
    const { notes } = context
    return (
        <>
            <div className='my-2'>
                <h3 className='my-3'>Your Notes</h3>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note}/>;
                })}
            </div>
        </>
    )
}

export default Notes
