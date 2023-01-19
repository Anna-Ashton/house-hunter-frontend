import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import { RiDoubleQuotesL, RiDoubleQuotesR  } from 'react-icons/ri'
import chatbot from '../images/chatbot.jpg'
import '../css/reviews.css'


function Review() {

  const [reviews, setReviews] = useState([]);

  useEffect( () => {
  const getReviews = async () => {

  const { data:res } = await axios.get("/reviews")
      setReviews(res)
    }
    getReviews()
  },[])


  return (
    <>

<div className='review_section'>
    <h3>Review Section</h3>
    <hr id='horizontal_line'/>
    </div>

    <div className='review_container'>

      {
        reviews.map( review => {
          return(
            <div className='review_card' key={review.id}>
              <div className='review_top'>
                <img src={chatbot} alt='' id='user'
                />
              </div>
              <div className='review_center'>
                <p className='statement'> <RiDoubleQuotesL className='quote'/> {review.comment} <RiDoubleQuotesR className='quote'/></p>
              </div>
              {/* <div className='review_bottom'>
                <p>name</p>
              </div> */}
            </div>
          )
        })
      }



      
      
    </div>
    </>
  )
}

export default Review