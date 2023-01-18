import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [notify, setNotify] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // // const [credentials, setCredentials] = useState({
  //   username: "",
  //   password: "",
  // });
  function notifyUser() {
    setNotify((notify) => !notify);
    setTimeout(endNotification, 1000);
  }

  // function handleChange(e){
  //   e.preventDefault();

  //   const { value, name } = e.currentTarget;

  //   setCredentials({
  //     ...credentials,
  //     [name]: value,
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(credentials);
    setError(null);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.token,
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          notifyUser();
          localStorage.setItem("token", user.jwt);
          localStorage.setItem("user", `${user.user.id}`);
        });
      } else {
        res.json().then((error) => setError(error));
      }
    });
  };

  function endNotification() {
    setNotify((notify) => !notify);
    navigate("/dashboard");
  }
  return (
    // <div className="vh-100">
    //   <div className="container py-3 h-95">
    //     <div className="row d-flex justify-content-center align-items-center h-90">
    //       <div className="col-10 col-md-6 col-lg-4 col-xl-5">
    //         <div className="card shadow-5-strong">
    //           <div className="card-body p-3 text-center"></div>

    //           {notify? (
    //             <p>Login Successful</p>
    //           ) : null }

    //           <form onSubmit={handleSubmit}>
    //             <label>
    //               <h3 className="container mb-3" id="sign-in">
    //                 LOGIN
    //               </h3>

    //               {error ? (
    //                   <p>{error.errors}</p>
    //               ) : null}

    //               <p className="mb-4">Please fill in the details!</p>
    //               <div className="form-outline mb-4">
    //                 Username:
    //                 <input
    //                   type="text"
    //                   name="username"
    //                   className="form-control form-control-lg"
    //                   value={username}
    //                   onChange={(e) =>
    //                     setUserName(e.target.value)}
    //                 />
    //               </div>
    //             </label>
    //             <label>
    //               Password:
    //               <input
    //                 type="password"
    //                 name="password"
    //                 className="form-control form-control-lg"
    //                 value={password}
    //                 onChange={(e) =>
    //                 setPassword(e.target.value)}
    //               />
    //             </label>
    //             <p class="mb-0">
    //               Don't have an account?{" "}
    //               <NavLink to="/sign-up" class="text-black-50 fw-bold">
    //                 Sign Up
    //               </NavLink>
    //             </p>
    //             <div class="text-center p-5">
    //               <button type="submit" class="subscribe">
    //                 LOGIN
    //               </button>
    //             </div>
    //           </form>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container-login">
      <div className="screen">
        <div className="screen__content">
          {notify ? <p className="alert-text">Login Successful</p> : null}
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              {error ? <p className="alert-text">{error.errors}</p> : null}
              <input
                type="text"
                name="username"
                className="login__input"
                placeholder="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
           
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
            <NavLink to="/sign-up" className="gotosignup__text">
              Sign Up
            </NavLink>
          </form>
          <div class="social-login">
            <h3>log in via</h3>
            <div class="social-icons">
              <p className="social-login__icon fab fa-instagram"></p>
              <p className="social-login__icon fab fa-facebook"></p>
              <p className="social-login__icon fab fa-twitter"></p>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
