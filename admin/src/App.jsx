import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AddAlbum from './pages/AddAlbum';
import AddSongs from './pages/AddSongs';
import ListAlbum from './pages/ListAlbum';
import ListSongs from './pages/ListSongs';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export const url = 'http://localhost:5000';

const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer/>
      <Sidebar/>

      <div className='flex-1 h-screen overflow-y-scroll bg-white'>
        <Navbar/>
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
          <Routes>
            <Route path='/add-album' element={<AddAlbum/>} />
            <Route path='/add-songs' element={<AddSongs/>} />
            <Route path='/list-album' element={<ListAlbum/>} />
            <Route path='/list-songs' element={<ListSongs/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
