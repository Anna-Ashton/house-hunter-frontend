import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [notify, setNotify] = useState(false);
  const [username, setUserName] = useState ("");
  const [password, setPassword] = useState("")

  // // const [credentials, setCredentials] = useState({
  //   username: "",
  //   password: "",
  // });
  function notifyUser(){
    setNotify((notify) => !notify);
  setTimeout(endNotification, 1000)
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
    setError(null)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.token
      },
      body: JSON.stringify({username, password}),
    })
    .then((res) => {
      if(res.ok) {
        res.json().then((user) => {
          notifyUser();
          localStorage.setItem("token", user.jwt);
          localStorage.setItem("user", `${user.user.id}`);        
        });
      } else {
        res.json().then((error) => setError(error));
      }
    })
  };

  


  function endNotification() {
    setNotify((notify) => !notify);
    navigate("/owners")
  }
  return (
    <div className="vh-100">
      <div className="container py-3 h-95">
        <div className="row d-flex justify-content-center align-items-center h-90">
          <div className="col-10 col-md-6 col-lg-4 col-xl-5">
            <div className="card shadow-5-strong">
              <div className="card-body p-3 text-center"></div>


              {notify? (
                <p>Login Successful</p>
              ) : null }

              <form onSubmit={handleSubmit}>
                <label>
                  <h3 className="container mb-3" id="sign-in">
                    LOGIN
                  </h3>

                  {error ? (
                      <p>{error.errors}</p>
                  ) : null}


                  <p className="mb-4">Please fill in the details!</p>
                  <div className="form-outline mb-4">
                    Username:
                    <input
                      type="text"
                      name="username"
                      className="form-control form-control-lg"
                      value={username}
                      onChange={(e) =>
                        setUserName(e.target.value)}
                    />
                  </div>
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => 
                    setPassword(e.target.value)}
                  />
                </label>
                <p class="mb-0">
                  Don't have an account?{" "}
                  <NavLink to="/sign-up" class="text-black-50 fw-bold">
                    Sign Up
                  </NavLink>
                </p>
                <div class="text-center p-5">
                  <button type="submit" class="subscribe">
                    LOGIN
                  </button>
                </div>
              </form>
              

              {/* <NavLink to="/signup">Signup Here</NavLink>  */}





              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
