import React, { useState } from "react";
// import { FaMapMarkerAlt, FaPhone, FaMailBulk } from "react-icons/fa";
import "../css/signup.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function ContactPage({onSignUp}) {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [engage, setEngage] = useState({
    full_name: "",
    email: "",
    comment: "",
    username: "",
    caretaker_name: "",
    contacts: "",
    password: "",
    password_confirmation: "",
  });

  const [notification, setNotification] = useState(false);

  function handleNotification() {
    setNotification((notification) => !notification);
    setTimeout(endNotification, 1000);
  }

  function handleChange(e) {
    e.preventDefault();
    const { value, name } = e.currentTarget;

    setEngage({
      ...engage,
      [name]: value,
    });
  }

  const handleClick = async (e) => {
    e.preventDefault();
    fetch("/landlords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: engage.id,
        full_name: engage.full_name,
        email: engage.email,
        username: engage.username,
        caretaker_name: engage.caretaker_name,
        contacts: engage.contacts,
        password: engage.password,
        password_confirmation: engage.password_confirmation,
      }),
    })
      //   const data = await res.json()
      //   setEngage([...engage, data])
      // }
      .then((res) => {
        if (res.ok) {
          res.json().then((user) =>
          onSignUp(user),
          handleNotification());
        } else {
          res.json().then((error) => setError(error));
        }
      }); 
  };

  function endNotification() {
    setNotification((notification) => !notification);
    navigate("/login");
  }

  return (
    <div className="main-body">
      <div className="main-form-group">
        <h1>Sign Up Form</h1>
        {notification ? (
          <p className="signupPrompt">signup successfull</p>
        ) : null}

        <form onSubmit={handleClick}>
          {error ? <p>{error.errors}</p> : null}
          <div class="main-form-field">
            <input
              type="text"
              placeholder="Fullname"
              name="full_name"
              value={engage.full_name}
              onChange={handleChange}
            />
          </div>

          <div class="main-form-field">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={engage.email}
              onChange={handleChange}
            />
          </div>

          <div class="main-form-field">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={engage.username}
              onChange={handleChange}
            />
          </div>

          <div class="main-form-field">
            <input
              type="text"
              placeholder="Caretaker"
              name="caretaker_name"
              value={engage.caretaker_name}
              onChange={handleChange}
            />
          </div>

          <div class="main-form-field">
            <input
              type="phone"
              placeholder="Contact"
              name="contacts"
              value={engage.contacts}
              onChange={handleChange}
            />
          </div>

          <div class="main-form-field">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={engage.password}
              onChange={handleChange}
            />
          </div>

          <div class="main-form-field">
            <input
              type="password"
              placeholder="Confirm password"
              name="password_confirmation"
              value={engage.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <hr className="hr" />

          <button className="signup-button">Sign Up</button>
        </form>

        <p class="para-2">
        Already have an account? 
        <NavLink to="/login" >
          Login
        </NavLink>
      </p>
      </div>

      
    </div>
  );
}
