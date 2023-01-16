import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Houses from "./pages/houses";
import SignUp from "./pages/signup";
import Owners from "./pages/owners";
import  Review from "./pages/reviews";
import Login from "./pages/login";

function App() {
  //const { token } = localStorage.getItem('jwt');
  let token = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  if (token && user) {
    this.props.fetchCurrentUser();
  }
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/reviews" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
