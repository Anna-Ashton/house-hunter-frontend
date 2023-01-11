import React, { useState } from 'react';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = event => {
    event.persist();
    setUserInfo(userInfo => ({
      ...userInfo,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userInfo);
    // Send a request to the server with the user's information
    // If the information is valid, create a new account
    // If the information is invalid, display an error message
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh'
      }}
    >
      <h1>Sign Up</h1>
    </div>
  );
};
  
export default SignUp;