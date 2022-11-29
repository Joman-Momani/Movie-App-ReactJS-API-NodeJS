import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Move from '../Move/Move';
import Tv from '../Tv/Tv';
import People from '../People/People';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Notfound from '../Notfound/Notfound';
import { Routes, Route, Navigate } from 'react-router-dom';
import Details from '../Details/Details';
import { useState,useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from '../Protected/ProtectedRoute';
export default function App() {

let [logindata,setlogin] = useState(null);

function setUserData(){
  let token = localStorage.getItem('token');
  let decoded = jwtDecode(token);
  //console.log(decoded);
  setlogin(decoded);
  console.log(logindata);
    }
  
    useEffect( ()=>{
  
      if(localStorage.getItem('token')){
        setUserData();
      }
    
    },[])

    function logout(){
      localStorage.removeItem('token');
      setlogin(null);
      Navigate('/Home'); 
    }
return (
<div>
<Navbar  logindata={logindata} logout={logout}   />
<div className="container">
    <Routes>
        <Route  element={<ProtectedRoute logindata={logindata}  />}   >
        <Route path='/' element={<Home/>}></Route>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='Movie App ReactJS-API-NodeJS'  element={<Home/>}></Route>
        <Route path='Move' element={<Move/>}></Route>
        <Route path='Details' element={ <Details/>}></Route>
        <Route path='Tv' element={<Tv/>}></Route>
        <Route path='People' element={<People/>}></Route>
        </Route>
        <Route path='Login' element={<Login setUserData={setUserData} />}></Route>
        <Route path='Register' element={<Register/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
    </Routes>
</div>
</div>
  )
}

//export default  App();
