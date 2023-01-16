import React from "react";

const Logout = ({user, setUser}) => {
     
     

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }
    return (
    <div>


         
         <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div class="auth flex items-center w-full md:w-full">
              
            </div>
         </div>
      </div>
   





   //  </div>
  )
}











export default Logout;