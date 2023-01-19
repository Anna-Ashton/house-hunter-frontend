import React, { useState } from "react";
import "../css/user.css";
import { NavLink } from "react-router-dom";

function User() {
  // const navigate = useNavigate;
  const [booking, setBooking] = useState({
    booking_date: "",
  });
  const [userInfo, setUserInfo] = useState({
    full_name: "",
    username: "",
    email: "",
    contact: "",
  });

  function handleUserChange(e) {
    e.preventDefault();
    const { value, name } = e.currentTarget;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: userInfo.id,
        full_name: userInfo.full_name,
        username: userInfo.username,
        email: userInfo.email,
        contact: userInfo.contact,
      }),
    });
    await resp.json();
    setUserInfo({
      full_name: "",
      username: "",
      email: "",
      contact: "",
    });
  };

  function handleChange(e) {
    e.preventDefault();
    const { value, name } = e.currentTarget;

    setBooking({
      ...booking,
      [name]: value,
    });
  }

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/bookings", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: booking.id,
        booking_date: booking.booking_date,
      }),
    });
    await res.json();
    setBooking({
      booking_date: "",
    });

    alert(
      `Hello ${name}.... Can't wait to see you on the set date. Thank You for trusting our services.`
    );
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Hello ${name}.... For updates and any issues we will be reaching you through your Email: ${email}   or through your Phone Number: ${contact} . Go ahead and book the day you will visit your potential new home.`
    );
  };

  return (
    <div>
     

      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3">
                  <span>Who are you, Client?</span>
                  <span>Book With Us</span>
                </h6>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <form onSubmit={handleBookSubmit}>
                            <h4 class="mb-4 pb-3">Book A Day</h4>
                            <div class="form-group">
                              <input
                                type="date"
                                name="booking_date"
                                class="form-style"
                                placeholder="Preferred viewing day"
                                id="logdate"
                                value={booking.booking_date}
                                onChange={handleChange}
                                autocomplete="off"
                              />
                            
                            </div>
                           
                            <button class="btn mt-4">book</button>
                          
                            <p className="users-home">
                              <NavLink to="/" className="gobackhome">
                                Welcome Again
                              </NavLink>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <form onSubmit={handleSubmit}>
                            <h4 class="mb-4 pb-3">Client Details</h4>
                            <div class="form-group mt-2">
                              <input
                                type="text"
                                name="full_name"
                                class="form-style"
                                placeholder="Your Full Name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autocomplete="off"
                              />
                            
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="text"
                                name="username"
                                class="form-style"
                                placeholder="Your Username"
                                id="logname"
                                value={userInfo.username}
                                onChange={handleUserChange}
                                autocomplete="off"
                              />
                             
                            </div>
                            <div class="form-group mt-2">
                              <h1>
                                {" "}
                                <input
                                  type="email"
                                  name="email"
                                  class="form-style"
                                  placeholder="Your Email"
                                  id="logemail"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  autocomplete="off"
                                />{" "}
                              </h1>
                             
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="phone"
                                name="contact"
                                class="form-style"
                                placeholder="Your Contact"
                                id="logphone"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                autocomplete="off"
                              />
                             
                            </div>
                            <button class="btn mt-4">submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
