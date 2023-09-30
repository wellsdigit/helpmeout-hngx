import './App.css'
import { Button } from 'flowbite-react';
import Onboard from './pages/Onboard';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard';
import RecordedVid from './pages/RecordedVid';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Onboard />}/>
      <Route path='login' element={<Login />}/>
      <Route path='dashboard' element={<Dashboard />}/>
      <Route path='display' element={<RecordedVid />}/>
    </Routes>
    </>
  )
}

export default App
