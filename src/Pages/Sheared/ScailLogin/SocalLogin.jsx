import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocalLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.sate?.from?.pathname || '/'
    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{
            const loggedInUser=result.user
            const savedUser= {name:loggedInUser.displayName, email:loggedInUser.email}
            fetch('https://bistro-boss-server-lemon-six.vercel.app/users',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(savedUser)
              })
              .then(res=>res.json())
              .then(()=>{
               
                    navigate(from,{replace:true})
             
              })
           
        
        })
    }
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
      <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
       <FaGoogle/>
      </button>
      </div>
    </div>
  );
};

export default SocalLogin;
