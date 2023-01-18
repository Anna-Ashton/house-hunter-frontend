import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';


function HouseFinder() {
  const [houses, setHouses] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    price: { min: 0, max: 1000000 },
    numRooms: { min: 0, max: 20 },
    estateName: '',
  });

  useEffect( () => {
    const fetchHouses = async () => {
      const { data:res } = await axios.get("/houses")
      setHouses(res)
    }
    fetchHouses()
  }, [])
  // useEffect(() => {
  //   fetchHouses();
  // }, []);

  // // Fetch houses from API iko hapa
  // function fetchHouses() {
  //   axios
  //     .post('./houses', { params: filters })
  //     .then(response => {
  //       setHouses(response.data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }

  // Handle filter changes
  function handleFilterChange(e) {
    const { name, value } = e.target;
    if (name === 'min-price' || name === 'max-price') {
      setFilters(prevFilters => ({
        ...prevFilters,
        price: {
          ...prevFilters.price,
          [name.split('-')[1]]: value,
        },
      }));
    } else if (name === 'min-rooms' || name === 'max-rooms') {
      setFilters(prevFilters => ({
        ...prevFilters,
        numRooms: {
          ...prevFilters.numRooms,
          [name.split('-')[1]]: value,
        },
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  }

  // handle submit 
  function handleSubmit(e){
    e.preventDefault();
    const fetchHouses = async () => {
      const { data:res } = await axios.get("/houses")
      setHouses(res)
    }
    fetchHouses()

  }
  
  

  // Handle booking a visit for a house
  function handleBookVisit(id) {
    axios
      .post(`/${id}/bookings`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div>
        <div className="container custom-mt">
             <div className="row"> 
                <div className="col-12"> 
                <form onSubmit={handleSubmit} className="filter">
                <div>
          <div className="mt-4">
            <label>Location:</label> 
        <input
          type="text"
          name="location"
           className="form-control form-control-lg"
          placeholder="Location"
          onChange={handleFilterChange}
          readOnly={false}
        />
        <input
          type="text"
          name="estateName"
          placeholder="Estate Name"
          className="form-control form-control-lg"
          onChange={handleFilterChange}
          readOnly={false}       
        />
        </div>
        </div>

     
        <div>
          <div className="mt-4">
            <label>Price:</label>
            <input
              type="number"
              name="min-price"
               className="form-control form-control-lg"
              placeholder="Min Price"
              onChange={handleFilterChange}
              readOnly={false}
            />
            <input
              type="number"
              name="max price"
              placeholder="Max Price"
              className="form-control form-control-lg"
              onChange={handleFilterChange}
              readOnly={false}
            /> 
          </div>
        </div>

        <div>
          {/* <div className="dropdown mt-3 d-flex">
            <div className="border-grey"> */}
              <label>Number of Rooms:</label>
              <input
                type="number"
                name="min-rooms"
                placeholder="Min Rooms"
                className="form-control form-control-lg"
                onChange={handleFilterChange}
                min="1"
                max="10"
                readOnly={false}
              />
              <input
                type="number"
                name="max-rooms"
                placeholder="Max Rooms"
                className="form-control form-control-lg"
                onChange={handleFilterChange}
                readOnly={false}
              />
            </div>
          {/* </div>
        </div> */}
  
        
        <div className="mt-3">
          {/* <button id="btn-filter" className="btn btn-outline-success border-radius-0 pl-3 pr-3 pb-2 pt-2">Filter</button> */}
          <button type="submit" id="btn-filter" className="btn btn-outline-success border-radius-0 pl-3 pr-3 pb-2 pt-2">Filter</button>
        </div>
      </form>


    
        {houses.map(house => (
          <div className='rr'><Card key={house.id} house={house} handleBookVisit={handleBookVisit} /></div>
        ))}
         </div>
          </div>
          </div>
          </div>
   );
}

export default HouseFinder;

