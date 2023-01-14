import React, { useEffect,useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const HouseForm = () => {
  const navigate = useNavigate();
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState([]);
  const [inputs, setInputs] = useState({
    estate_name: '',
    img_url: '',
    location: '',
    price: '',
    description: '',
    house_type: '',
    bedrooms: '',
  });
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user)
  navigate("/login");


  const handleChange = event => {
    event.persist();
    if (event.target.name === 'price' || event.target.name === 'bedrooms') {
      if (Number(event.target.value)) {
        setInputs(inputs => ({ ...inputs, [event.target.name]: Number(event.target.value) }));
      }
    } else {
      setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
  }

  const handleCreate = event => {
    event.preventDefault();
    setHouses([...houses, inputs]);
   setInputs({
     estate_name: '',
     img_url: '',
     location: '',
     price: '',
     description: '',
     house_type: '',
     bedrooms: '',
   });
   setEditing(false);

    setError(null)
     fetch("/houses", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
         Accept: "application/json",
         Authorization: localStorage.token

      },
      body: JSON.stringify ({
        id: inputs.id,
        estate_name: inputs.estate_name,
        img_url: inputs.img_url,
        location: inputs.location,
        price: inputs.price,
        description: inputs.description,
        house_type: inputs.house_type,
        bedrooms: inputs.bedrooms
      })
    })

    .then((res)=> {
        if (res.ok) {
          res.json().then((data) =>{
            localStorage.setItem("token", data.jwt);
            localStorage.setItem("user", `${data.user.id}`); 
            setInputs([...inputs, data])
          })
        } else {
          res.json().then((error) => setError(error));
        }
    //   res.json())
    // .then((data)=>{
    //   setInputs([...inputs, data])
    // })
  })
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const newHouses = [...houses];
    newHouses[editingIndex] = inputs;
    setHouses(newHouses);
    setEditing(false);
    setInputs({
      estate_name: '',
      img_url: '',
      location: '',
      price: '',
      description: '',
      house_type: '',
      bedrooms: '',
    });
  }

  const handleDelete = (index) => {
    const newHouses = [...houses];
    newHouses.splice(index, 1);
    setHouses(newHouses);
  }

  const startEditing = (index) => {
    setEditing(true);
    setEditingIndex(index);
    const houseToEdit = houses[index];
    setInputs(houseToEdit);
  }

  return (
     <div>

    
      {editing ? (
        <form onSubmit={handleUpdate}>
          <label className='label'>
            Estate Name:
            <input  className="form-control form-control-lg" type="text" name="estate_name" value={inputs.estate_name} onChange={handleChange} />
          </label>
          <label className='label'>
            Image:
            <input  className="form-control form-control-lg" type="text" name="img_url" value={inputs.img_url} onChange={handleChange} />
          </label>
          <label className='label'>
            Location:
            <input  className="form-control form-control-lg"  type="text" name="location" value={inputs.location} onChange={handleChange} />
          </label>
          <label className='label'>
            Price:
            <input  className="form-control form-control-lg" type="number" name="price" value={inputs.price} onChange={handleChange} />
            </label>
<label className='label'>
Description:
<input  className="form-control form-control-lg" type="text" name="description" value={inputs.description} onChange={handleChange} />
</label>
<label className='label'>
House Type:
<input  className="form-control form-control-lg" type="text" name="house_type" value={inputs.house_type} onChange={handleChange} />
</label>
<label className='label'>
Bedrooms:
<input  className="form-control form-control-lg" type="number" name="bedrooms" value={inputs.bedrooms} onChange={handleChange} />
</label>
<div class="text-center p-4" >
<button class="subscribe" type="submit">Update</button>
</div>
<div class="text-center p-4" >
<button  class="subscribe" type="button" onClick={() => setEditing(false)}>Cancel</button>
</div>
</form>

) : (
  
<form className='form'   onSubmit={handleCreate}>
<label className='label'>
Image:
<input   className="form-control form-control-lg"type="text" name="img_url" value={inputs.img_url} onChange={handleChange} />
</label>
<label className='label'>
Location:
<input   className="form-control form-control-lg"type="text" name="location" value={inputs.location} onChange={handleChange} />
</label>
<label className='label'>
Price:
<input  className="form-control form-control-lg" type="text" name="price" value={inputs.price} onChange={handleChange} />
</label>
<label className='label'>
Description:
<input  className="form-control form-control-lg" type="text" name="description" value={inputs.description} onChange={handleChange} />
</label>
<label className='label'>
Type:
<input  className="form-control form-control-lg" type="text" name="house_type" value={inputs.house_type} onChange={handleChange} />
</label>
<label className='label'>
Bedrooms:
<input className="form-control form-control-lg" type="number" name="bedrooms" value={inputs.bedrooms} onChange={handleChange} />
</label>
</div>
<div class="text-center p-4">
          <button type="submit" class="subscribe">UPLOAD</button>
        </div>
</form>
)}
<h1 className='house1'>HOUSE LIST</h1>
   <Row>
<ul>
{houses.map((house, index) => (
  <li className="house-card" key={index}>
    <Col>
    
<img src={house.img_url} alt={house.location} /><tr></tr>
<h6>ESTATE NAME</h6>  <h4>{house.estate_name}</h4>
 <h6>LOCATION</h6> <h4>{house.location}</h4> <h6>PRICE</h6>  <h4>{house.price}</h4> <h6>DESCRIPTION</h6><h4>{house.description}</h4> <h6>HOUSE TYPE</h6><h4>{house.house_type}</h4><tr></tr><h6>BEDROOMS</h6> <h4>{house.bedrooms}</h4><tr></tr>
<button class="subscribe2" type="button" onClick={() => startEditing(index)}>Edit</button><tr></tr>
<button  class="subscribe2"type="button" onClick={() => handleDelete(index)}>Delete</button>
</Col>
</li>
))}
</ul>
</Row>
</div>
);
}

export default HouseForm;
