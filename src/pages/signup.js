import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

}
from 'mdb-react-ui-kit';

function SignUp() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='8'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">SIGN UP</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Fullname' id='form1' type='text'/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
            </MDBCol>

              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password confirmation' id='formControlLg' type='password' size="lg"/>

              <MDBBtn size='small'>
                SIGN UP
              </MDBBtn>

              <hr className="my-4" />
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}
  
export default SignUp;