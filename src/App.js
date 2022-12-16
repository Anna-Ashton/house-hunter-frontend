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
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/houses' component={Houses} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>
  );
}
  
export default App;