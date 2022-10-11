import React from "react";

import axios from 'axios';
const Home = () => {
  const [url,seturl] = React.useState("http://localhost:4000")
  const apiGoogleCall = async()=>
  {
    try{
      console.log("calling ....")
      const res = await axios.get(`/auth/google`,{})
      console.log("calling  res : ",res)
      return Promise.resolve(true);
    }catch(error){
      console.log("error : ",error);
      return Promise.reject(false);
    }
  } 

  return (
    
    <div className="card" style={{margin:"10%",padding:"20px",textAlign:"center"}}>
        
        <button type="button" className="waves-effect waves-light btn"
        onClick={async()=>{
          const data = await apiGoogleCall();
          if(data)
          {
            console.log("google login true")
          }else{
            console.log("google login false")
          }
        }}>Sign in with Google </button>
    </div>
  );
};

export default Home;