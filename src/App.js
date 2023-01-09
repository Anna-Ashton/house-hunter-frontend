import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './homepage/Home'
import Login from './login/Login'
import SignUp from './signup/SignUp'
import Housing from './housing/Housing'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route> 
          <Route path="/housing" element={<Housing />}></Route>
        </Routes>
    </Router>
  </>
  );
}

export default App;
