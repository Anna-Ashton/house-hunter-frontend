import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Houses from './pages/houses';
import Contact from './pages/contact';
import SignUp from './pages/signup';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} /> 
        <Route path='/houses' element={<Houses/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        {/* <Route path='/login' element={<login/>} /> */}
      </Routes>
    </Router>
  );
}
  
export default App;