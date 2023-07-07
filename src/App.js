import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/noteState';

const App = () => {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route index element={<Home />} />
              <Route exact path="about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
