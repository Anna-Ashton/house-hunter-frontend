import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';

function HouseFinder() {
  const [houses, setHouses] = useState([]);
 

  useEffect( () => {
    const fetchHouses = async () => {
      const { data:res } = await axios.get("/houses")
      setHouses(res)
    }
    fetchHouses()
  }, [])

  

  // handle submit 
  function handleSubmit(e){
    e.preventDefault();
    // fetchHouses();
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
    
      <div>
        {houses.map(house => (
          <Card key={house.id} house={house} handleBookVisit={handleBookVisit} />
        ))}
      </div>
    </div>
  );
}

export default HouseFinder;
