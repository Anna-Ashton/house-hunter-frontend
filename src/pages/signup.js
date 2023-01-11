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
    <div className="vh-100">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong">
            <div className="card-body p-5 text-center"></div>
    <form onSubmit={handleSubmit}>
    <h3 className="container mb-5" id="sign-in">SIGN UP</h3>
              <p className="mb-4">Please fill in the details!</p>
              <div className="form-outline mb-4">   
      <label>
        Username:
        <input
          type="text"
          name="username"
          className="form-control form-control-lg"
          value={userInfo.username}
          onChange={handleChange}
        />
      </label>
      </div>
      <label>
        Email:
        <input
          type="email"
          name="email"
          className="form-control form-control-lg"
          value={userInfo.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          className="form-control form-control-lg"
          value={userInfo.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          className="form-control form-control-lg"
          value={userInfo.confirmPassword}
          onChange={handleChange}
        />
      </label>
    </form>
    <div class="text-center p-4">
          <button type="submit" class="subscribe">SUBMIT</button>
        </div>
     
    </div>
    </div>
    </div>
    </div>

    <footer>
    <div className="row p-5 d-flex justify-content-center">
      <div className="col-lg-2">

     
        <p>Need a home ? <tr></tr>Leave the hustle to us</p>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/fb.svg" alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/instagram.svg"
          alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/youtube.svg"
          alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/twitter.svg"
          alt=""></img>
      </div>



      

      <div className="col-lg-2">
        <p className="quicklinks">Quick Links</p>
        <p>– About</p>
        <p>– photos</p>
        <p>– News</p>
        <p>– Contacts</p>

      </div>

      <div className="col-lg-2">
        <p className="quicklinks">Help</p>
        <p>– FAQs</p>
        <p>– Updates</p>
        <p>– Complains</p>
        <p>– Contacts</p>

      </div>

      <div className="col-lg-2">
        <p className="quicklinks">Categories</p><tr></tr>
        <p>– FAQs</p>
        <p>– Rentals</p>
        <p>– Apartments</p>
        <p>– Contacts</p>

      </div>

      <div className="col-lg-2">
        <p className="quicklinks">Contacts</p>
        <p className="number">
          <ion-icon name="call"></ion-icon>254-100-161
        </p>
        <p>
          <ion-icon name="pin"></ion-icon>254 Souths Suited 21,<tr></tr>
           NRB
        </p>
        <p className="number2">
          <ion-icon name="mail"></ion-icon>Eaglehouse@info.co.ke
        </p>


      </div>
       <h6>2022 @ Eaglehousehunter.com </h6>
    </div>
    </footer>
    </div>
  )
}


export default SignUp