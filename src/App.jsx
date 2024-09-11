import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom'
import FavoritesPage from './components/FavoritesPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>

    </div>
  )
};

export default App;
