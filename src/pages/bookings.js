import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import '../css/bookings.css'
import { NavLink } from "react-router-dom"

function Bookings() {

    const [bookings, setBookings] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect( () => {
        const fetchBookings = async () => {
          const { data:res } = await axios.get("/bookings")
          setBookings(res)
        }
        fetchBookings()
      }, [])


      useEffect( () => {
        const fetchUsers = async () => {
          const { data:res } = await axios.get("/users")
          setUsers(res)
        }
        fetchUsers()
      }, [])





  return (
    <div>

<main class="st_viewport">
  <div class="st_wrap_table" data-table_id="0">
    <header class="st_table_header">
      <h2>Clients & Booked Dates</h2>
      <NavLink to="/owners" className="upload-houses">
              Upload houses
            </NavLink>
      <div class="st_row">

       <div class="st_column _rank">Date </div>
        <div class="st_column _name">Name</div>
        <div class="st_column _surname">User</div>
        <div class="st_column _section">Email</div>
        <div class="st_column _section">Contact</div>
      </div>
    </header>
    <div class="st_table">
      <div class="st_row">
        <div class="st_column _rank">5/2/2023</div>
        <div class="st_column _name">John Powell</div>
        <div class="st_column _surname">John</div>
        <div class="st_column _year">johhn@hotmail.com</div>
        <div class="st_column _section">0109088823</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">23/1/2023</div>
        <div class="st_column _name">Luke Max</div>
        <div class="st_column _surname">Luke</div>
        <div class="st_column _year">luke@hotmail.com</div>
        <div class="st_column _section">0104688823</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">28/1/2023</div>
        <div class="st_column _name">Miriam Kunze</div>
        <div class="st_column _surname">Kunze</div>
        <div class="st_column _year">kunze@mail.com</div>
        <div class="st_column _section">072236477</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">4/2/2023</div>
        <div class="st_column _name">Janina Endres</div>
        <div class="st_column _surname">Endres</div>
        <div class="st_column _year">andres@gmail.com</div>
        <div class="st_column _section">0723456789</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">8/2/2023</div>
        <div class="st_column _name">Lena Eifel</div>
        <div class="st_column _surname">Eifel</div>
        <div class="st_column _year">eifel@gmail.com</div>
        <div class="st_column _section">0734567890</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">13/2/2023</div>
        <div class="st_column _name">Jonas Natch</div>
        <div class="st_column _surname">Nacht</div>
        <div class="st_column _year">natch@yahoo.com</div>
        <div class="st_column _section">090806666</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">9/3/2023</div>
        <div class="st_column _name">Vanessa Schneider</div>
        <div class="st_column _surname">Schneider</div>
        <div class="st_column _year">venessa@gmail.com</div>
        <div class="st_column _section">076645898</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">30/1/2023</div>
        <div class="st_column _name">Laura Beika</div>
        <div class="st_column _surname">Beike</div>
        <div class="st_column _year">beike@mail.com</div>
        <div class="st_column _section">030908888</div>
      </div>
      
    </div>
  </div>







  








</main>
  </div>
  )
}

export default Bookings