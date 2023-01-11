import React ,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom'

import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


const url = "https://127.0.0.1:3000/signup"
function SignUp() {

  const [email,setEmail] = useState("")
const [password, setPassword] = useState("")
const [fullName, setFullName] = useState("")
const [ userName, setUserName] =useState ("")
const [ passwordConfirmation, setPasswordConfirmation] = useState("")
const [ user, setUser] = useState("")

    const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    email,
    password,
    full_name:fullName ,
    username: userName,
    password_confirmation: passwordConfirmation,
  }),
})
  .then((r) => r.json())
  .then((data) => {
    // save the token to localStorage for future access
    localStorage.setItem("jwt", data.jwt);
    // save the user somewhere (in state!) to log the user in
    setUser(data.user);
  });
  navigate("/houses")
  }


  return (

   <form onSubmit={handleSubmit}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

               <MDBInput wrapperClass='mb-4 w-100' label='full name' id='formControlLg' type='text' size="lg"
              value={fullName}
          onChange={(e) => setFullName(e.target.value)}
              />

              <MDBInput wrapperClass='mb-4 w-100' label='user name ' id='formControlLg' type='text' size="lg"
              value={userName}
          onChange={(e) => setUserName(e.target.value)}
              />

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"
              value={email}
          onChange={(e) => setEmail(e.target.value)}
              />

              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"
              value={password}
          onChange={(e) => setPassword(e.target.value)}
              />
               <MDBInput wrapperClass='mb-4 w-100' label='Password confirmation' id='formControlLg' type='password' size="lg"
              value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
              />

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='lg' >
                Login
              </MDBBtn>

              <hr className="my-4" />

              <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
              </MDBBtn>

              <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

   </form>
  );
}
  


export default SignUp