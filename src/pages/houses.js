import React, {onSearchClick} from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { CDBFooter } from 'cdbreact';
// import SearchField from 'react-search-field';


function houses() {

  return (
    <div className="houses__container">
      <h1>Apartments Available</h1>
      {/* <SearchField 
        placeholder='Search House'
        onChange={onSearchClick}
        searchText="Search for Houses"
      /> */}
      <div className="houses__wrapper">
          <ul className="houses__list">
            <img src = "https://commercialpropertykenya.com/wp-content/uploads/2020/01/Mahiga-Homes-11.jpeg" alt="house"/>
            <h5>4 Bedroom Apartment in Jamhuri Estate, Ngong Road</h5>
            <MDBBtn size = 'small' >KSH 60,000 </MDBBtn>
          </ul>

          <ul className="houses__list">
            <img src = "https://commercialpropertykenya.com/wp-content/uploads/2020/01/Mahiga-Homes-11.jpeg" alt="house"/>
            <h5>3 bedroom apartment in Athi View Estate, Syokimau</h5>
            <MDBBtn size = 'small' >KSH 50,000 </MDBBtn>
          </ul>

          <ul className="houses__list">
            <img src = "https://commercialpropertykenya.com/wp-content/uploads/2020/01/Mahiga-Homes-11.jpeg" alt="house"/>
            <h5>3 bedroom apartment in Airways Estate, Utawala</h5>
            <MDBBtn size = 'small' >KSH 45,000 </MDBBtn>
          </ul>

          <ul className="houses__list">
            <img src = "https://commercialpropertykenya.com/wp-content/uploads/2020/01/Mahiga-Homes-11.jpeg" alt="house"/>
            <h5>4 bedroom maisonette in Mirema Greens Estate, Off Mirema Drive</h5>
            <MDBBtn size = 'small' >KSH 40,000 </MDBBtn>
          </ul>

          <ul className="houses__list">
            <img src = "https://commercialpropertykenya.com/wp-content/uploads/2020/01/Mahiga-Homes-11.jpeg" alt="house"/>
            <h5>4 bedroom apartments in Mirema Greens Estate, Off Mirema Drive</h5>
            <MDBBtn size = 'small' >KSH 8,000,000 </MDBBtn>
          </ul>

          <ul className="houses__list">
            <img src = "https://commercialpropertykenya.com/wp-content/uploads/2020/01/Mahiga-Homes-11.jpeg" alt="house"/>
            <h5>5 bedroom apartments in Mirema Greens Estate, Off Mirema Drive</h5>
            <MDBBtn size = 'small' >KSH 80,000 </MDBBtn>
          </ul>
      </div>
    </div>
  );
};
  
export default houses;


