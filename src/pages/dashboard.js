import React,{ useEffect,useState }  from "react";
import "../css/dashboard.css";
import { NavLink } from 'react-router-dom'

function Dashboard() {

  const [admin, setAdmin] = useState('username');

  
  return (
    <div>
      <div class="large-banner">
        <h2>Hello, See Your Details </h2>
       
      </div>

      <div class="featured-clay">
        <div>
          <div></div>

          <div>
            <p>See Bookings</p>
            <NavLink to='/bookings' activeStyle>
              Bookings
            </NavLink>
          </div>
        </div>

        <div>
          <div></div>

          <div>
            <p>Upload New Houses</p>
            <NavLink to='/owners' activeStyle>
              Upload
            </NavLink>
          </div>
        </div>

        <div>
          <div></div>

          <div>
            <p>See All Houses</p>
            <NavLink to="/houses" className="gobackhome">
              Houses
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
