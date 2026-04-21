import { useState } from 'react'
import './App.css'
import AllExpenses from './Components/Home/AllExpenses'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddingForm from './Components/things/AddingForm';



 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllExpenses />} />
        <Route path="/add" element={<AddingForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
