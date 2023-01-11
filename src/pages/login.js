import React, { useState } from 'react'

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = event => {
    event.persist();
    setCredentials(credentials => ({
      ...credentials,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(credentials);
    // Send a request to the server with the credentials
    // If the credentials are valid, log the user in
    // If the credentials are invalid, display an error message
  }

  return (
    <div className="vh-100">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong">
            <div className="card-body p-5 text-center"></div>
    <form onSubmit={handleSubmit}>
      <label>
      <h3 className="container mb-5" id="sign-in">LOGIN</h3>
              <p className="mb-4">Please fill in the details!</p>
              <div className="form-outline mb-4"> 
        Username:
        <input
          type="text"
          name="username"
          className="form-control form-control-lg"
          value={credentials.username}
          onChange={handleChange}
        />
        </div>
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          className="form-control form-control-lg"
          value={credentials.password}
          onChange={handleChange}
        />
        </label>
        <p class="mb-0">Don't have an account? <a href="./signup" class="text-black-50 fw-bold">Sign Up</a></p>
      <div class="text-center p-5">
          <button type="submit" class="subscribe">LOGIN</button>
        </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login