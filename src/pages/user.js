import React, { useState } from "react";
import "../css/user.css";
// import { useNavigate } from "react-router-dom";

function User() {
  // const navigate = useNavigate;
  const [booking, setBooking] = useState({
    booking_date:"",
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
        booking_date: booking.booking_date,
      }),
    });
   await res.json();
    setBooking({
      booking_date: "",
    })
   
  };

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
  return (
    <div>
      {/* <a href="https://front.codes/" class="logo" target="_blank">
		<img src="https://assets.codepen.io/1462889/fcy.png" alt=""/>
	</a> */}

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
                              {/* <i class="input-icon uil uil-at"></i> */}
                            </div>
                            {/* <div class="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div> */}
                            <button class="btn mt-4">book</button>
                            {/* <p class="mb-0 mt-4 text-center">
                            <a href="#0" class="link">
                              Forgot your password?
                            </a>
                          </p> */}
                          </form>
                        </div>
                      </div>
                    </div>

                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <form onSubmit={handleClientSubmit}>
                            <h4 class="mb-4 pb-3">Client Details</h4>
                            <div class="form-group mt-2">
                              <input
                                type="text"
                                name="logname"
                                class="form-style"
                                placeholder="Your Full Name"
                                id="logname"
                                value={userInfo.full_name}
                                onChange={handleUserChange}
                                autocomplete="off"
                              />
                              {/* <i class="input-icon uil uil-user"></i> */}
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="text"
                                name="logname"
                                class="form-style"
                                placeholder="Your Username"
                                id="logname"
                                value={userInfo.username}
                                onChange={handleUserChange}
                                autocomplete="off"
                              />
                              {/* <i class="input-icon uil uil-user"></i> */}
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="email"
                                name="logemail"
                                class="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                value={userInfo.email}
                                onChange={handleUserChange}
                                autocomplete="off"
                              />
                              {/* <i class="input-icon uil uil-at"></i> */}
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="phone"
                                name="logphone"
                                class="form-style"
                                placeholder="Your Contact"
                                id="logphone"
                                value={userInfo.contact}
                                onChange={handleUserChange}
                                autocomplete="off"
                              />
                              {/* <i class="input-icon uil uil-lock-alt"></i> */}
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
