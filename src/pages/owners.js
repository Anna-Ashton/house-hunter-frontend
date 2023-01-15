import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HouseForm = () => {
  const [houses, setHouses] = useState([]);
  const [inputs, setInputs] = useState({
    image: '',
    location: '',
    price: '',
    description: '',
    type: '',
    bedrooms: ''
  });
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

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
      image: '',
      location: '',
      price: '',
      description: '',
      type: '',
      bedrooms: ''
    });
    setEditing(false);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const newHouses = [...houses];
    newHouses[editingIndex] = inputs;
    setHouses(newHouses);
    setEditing(false);
    setInputs({
      image: '',
      location: '',
      price: '',
      description: '',
      type: '',
      bedrooms: ''
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
     <div className='landlord'>
    
      {editing ? (
        <form onSubmit={handleUpdate}>
            <label className='label'>
              Image:
              <input  className="form-control form-control-lg" type="text" name="image" value={inputs.image} onChange={handleChange} />
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
            Type:
            <input  className="form-control form-control-lg" type="text" name="type" value={inputs.type} onChange={handleChange} />
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
<input   className="form-control form-control-lg"type="text" name="image" value={inputs.image} onChange={handleChange} />
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
<input  className="form-control form-control-lg" type="text" name="type" value={inputs.type} onChange={handleChange} />
</label>
<label className='label'>
Bedrooms:
<input className="form-control form-control-lg" type="number" name="bedrooms" value={inputs.bedrooms} onChange={handleChange} />
</label>
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
<img src={house.image} alt={house.location} /><tr></tr>
 <h6>LOCATION</h6> <h4>{house.location}</h4> <h6>PRICE</h6>  <h4>{house.price}</h4> <h6>Description</h6><h4>{house.description}</h4> <h6>TYPE</h6><h4>{house.type}</h4><tr></tr><h6>BEEDROOMS</h6> <h4>{house.bedrooms}</h4><tr></tr>
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
