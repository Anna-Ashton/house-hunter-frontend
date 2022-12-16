import React from 'react';
  
const Home = () => {

  const text=" RELAX.... WE HUNTED A HOME FOR YOU! "; 

let index=0;

function autowrite(){
    document.querySelector('.underText').innerHTML=text.slice(0,index);
    ++index;

    if(index>text.length){
        index=0;
    }
}
setInterval(autowrite,100);
  return (
    
    <>
     <div
      style={{
        display: '',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    ></div>
    <header id="header" class="py-5 bg-light">
      <div class="container">
          <div class="row height align-items-center ">
              <div class="col height-80  text-center">
                  <h1 class="text-white display- font-weight-bold text-uppercase font-italic">
                      <strong>WE DONT FIND HOUSES ,WE FIND HOMES !</strong>
  
                  </h1>
                  <p class="underText text-white display-">Life is short, buy a house</p>
                  </div>
            </div>
            
              </div>
        </header>
    </>
      
    
  );
};
  
export default Home;