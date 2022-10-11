import React from "react";
import "./App.css";
import Header from "./components/header";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <>  
      

    <BrowserRouter>
    <Header/>
    
     <Routes>
     <Route exact path='/' element={<Home/>} />
    
     <Route path='/profile' element={<Profile/>} />
     </Routes>
    
     </BrowserRouter>
    </>
  );
}

export default App