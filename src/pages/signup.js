import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaMailBulk } from "react-icons/fa";
import "../css/signup.css";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
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
    const res = await fetch("/landlords", {
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
          res.json().then((user) => handleNotification());
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
    <div className="contact-page">
      <div className="contact-heading">
        <h2>Restricted for Admins only</h2>
      </div>

      <div className="contact-container">
        <div className="contact-row">
          <div className="contact-column">
            <div className="contact-widget">
              <div className="contact-widget-item">
                <div className="contact-icon">
                  <i className="FaLocationArrow">
                    <FaMapMarkerAlt />
                  </i>
                </div>
                <div className="contact-text">
                  <h5>Address</h5>
                  <p>Ngong Lane ..Nairobi Kenya</p>
                </div>
              </div>

              <div className="contact-widget-item">
                <div className="contact-icon">
                  <i className="fa-phone">
                    <FaPhone />
                  </i>
                </div>
                <div className="contact-text">
                  <h5>Phone</h5>
                  <p>+254234234234</p>
                </div>
              </div>

              <div className="contact-widget-item">
                <div className="contact-icon">
                  <i className="FaMailBulk">
                    <FaMailBulk />
                  </i>
                </div>
                <div className="contact-text">
                  <h5>Mail Us</h5>
                  <p>keja_hunters@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-column">
            <div className="contact-form">
              {notification ? <p>signup successfull</p> : null}
              <form onSubmit={handleClick}>
                {error ? <p>{error.errors}</p> : null}
                <input
                  type="text"
                  placeholder="fullname"
                  name="full_name"
                  value={engage.full_name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={engage.email}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  value={engage.username}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="caretaker"
                  name="caretaker_name"
                  value={engage.caretaker_name}
                  onChange={handleChange}
                />

                <input
                  type="phone"
                  placeholder="contact"
                  name="contacts"
                  value={engage.contacts}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={engage.password}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  placeholder="password_confirmation"
                  name="password_confirmation"
                  value={engage.password_confirmation}
                  onChange={handleChange}
                />

                <button className="contact-site-btn">Sign Up</button>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-row">
          <div className="map-column">
            <div className="contact-map">
              <iframe
                title="unique title"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.790618517481!2d36.78241265076555!3d-1.3004808360050335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4c!2sMoringa%20School!5e0!3m2!1sen!2ske!4v1672869696560!5m2!1sen!2ske"
                allowfullscreen=" "
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
