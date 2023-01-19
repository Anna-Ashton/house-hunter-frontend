import React from 'react';
  
 const About = () => {
  return (
    <div
     style={{
        // display: 'flex',
        //  justifyifyContent: 'center',
        //  alignItems: 'center',
        // height: '10vh',
      }} >
        <section id='about-us' className='about-us'>
        <h2>ABOUT US</h2>
        <div class="about-contents">
        <div  class="about-box">
            <strong>Who are we ?</strong>Hey there , We are EAGLE HOUSE HUNTERS and our task is clear and simple .."finding the best homes for our clients" because we know Home is where love resides, memories are created, friends always belong, and laughter never ends.<tr></tr>
            <strong> The Journey </strong>The journey of finding the best houses for our clients has precisly not been easy but with right planning and commitment we were able to find a very convinient way to enable you find you home in just a few minutes  . <tr></tr>
            <strong> Our goal! </strong> Putting a smile on your face and saving your time ."Your time is limited so dont waste it walking around looking for a house leave that to us"
        </div>
        <div class="about-img">
        <img src="https://img.etimg.com/thumb/width-420,height-315,imgsize-103583,resizemode-1,msid-68229406/wealth/real-estate/dream-home-beyond-budget-buy-starter-home-save-on-rent-shift-to-larger-unit-later-heres-how/home-getty.jpg" alt=""></img>
        </div>
        
    </div>
    </section>

    <footer>
    <div className="row p-5 d-flex justify-content-center">
      <div className="col-lg-2">

     
        <p>Need a home ? <tr></tr>Leave the hustle to us</p>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/fb.svg" alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/instagram.svg"
          alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/youtube.svg"
          alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/twitter.svg"
          alt=""></img>
      </div>



      

      <div className="col-lg-2">
        <p className="quicklinks">Quick Links</p>
        <p>– About</p>
        <p>– photos</p>
        <p>– News</p>
        <p>– Contacts</p>

      </div>

      <div className="col-lg-2">
        <p className="quicklinks">Help</p>
        <p>– FAQs</p>
        <p>– Updates</p>
        <p>– Complains</p>
        <p>– Contacts</p>

      </div>

      <div className="col-lg-2">
        <p className="quicklinks">Categories</p><tr></tr>
        <p>– FAQs</p>
        <p>– Rentals</p>
        <p>– Apartments</p>
        <p>– Contacts</p>

      </div>

      <div className="col-lg-2">
        <p className="quicklinks">Contacts</p>
        <p className="number">
          <ion-icon name="call"></ion-icon>254-100-161
        </p>
        <p>
          <ion-icon name="pin"></ion-icon>254 Souths Suited 21,<tr></tr>
           NRB
        </p>
        <p className="number2">
          <ion-icon name="mail"></ion-icon>Eaglehouse@info.co.ke
        </p>


      </div>
       <h6>2022 @ Eaglehousehunter.com </h6>
    </div>
    </footer>
    </div>
  
 

  

  );
};
  
export default About;
