import React from 'react';
import Notes from './Notes';
import AddNote from './AddNote';

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-3 mx-2 notes-left">
          <Notes />
        </div>
        <div className="col mx-2">
          <AddNote />
        </div>
      </div>
    </>
  )
}

export default Home
