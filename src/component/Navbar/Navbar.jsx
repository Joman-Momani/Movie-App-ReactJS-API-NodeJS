import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
export default function Navbar({logindata,logout}) {

  console.log("nav",logindata);
  return (
   <>
<nav className="navbar navbar-expand-lg navbar-light bg-transparent p-3">
  <div className="container-fluid">
    <Link className={`navbar-brand fs-5 ${style.ll}`} to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {logindata? <>
        
          <li className={`nav-item ${style.item} `}>
          <Link className={`nav-link fs-5 ${style.ll}`} to="Home" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${style.ll}`} to="Move" >Move</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${style.ll}`} to="Tv" >Tv Show</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${style.ll}`} to="People" >People</Link>
        </li>
        
        </> :''}
       
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      <li className="nav-item d-flex">
        <a className={`nav-link fs-5 ${style.ll}`} href="#" >
          <i className='fa-brands fa-facebook '></i>
        </a>
        <a className={`nav-link fs-5 ${style.ll}`} href="#" >
          <i className='fa-brands fa-youtube'></i>
        </a>
        <a className={`nav-link fs-5 ${style.ll}`} href="#" >
          <i className="fa-brands fa-instagram"></i>
        </a>
        </li>       

        {!logindata?<>
          <li className="nav-item">
          <Link className={`nav-link fs-5 ${style.ll}`} to="Login" >Login</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fs-5 ${style.ll}`} to="Register" >Register</Link>
        </li>
        
        
        </> :<>
        <li>
          <Link className={`nav-link fs-5 ${style.name} `}  to="#" >Welcome {logindata.name}</Link>
        </li>
          <li>
          <Link className={`nav-link fs-5 ${style.ll}`}  to="/" onClick={logout}>Logout</Link>
        </li></>  }     
      </ul>
      </div>
  </div>
  </nav>

   
   
   
   
   
   
   
   </>
  )
}
