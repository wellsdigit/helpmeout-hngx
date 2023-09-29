import './App.css'
import { Button } from 'flowbite-react';
import Onboard from './pages/Onboard';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Onboard />}/>
    </Routes>
    </>
  )
}

export default App
