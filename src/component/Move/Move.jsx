import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Move() {


let Navigate= useNavigate();
function goTodetails(id){
 //alert(id);
 Navigate({
pathname:'/details',
search :`?id=${id} `

 })
 }



  let [TrenMove,SeTtrendmove]= useState([]);
  let prefix= "https://image.tmdb.org/t/p/w500";
  async function getTrending(){
    let {data}= await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=bc714f7e736e0bf24633967d25fd3219');
    SeTtrendmove (data.results);
    }
    
    useEffect(()=>{
    
    getTrending();

    },[]);
  return (
    <>
    
<div className="row mt-5">

{TrenMove.map((movie,index)=>
<div className="col-md-2 my-2 " key={index}>
<img src={prefix+movie.poster_path}  alt="" className='w-100'/>
<h3 className='h6 text-center mt-3 fs-3 ' onClick={() => goTodetails(movie.id)} >{movie.title?movie.title:'no name'}</h3>
</div>
  )}
</div>
    
    </>
  )
}

