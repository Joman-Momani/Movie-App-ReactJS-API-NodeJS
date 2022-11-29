import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {useSearchParams} from 'react-router-dom';
import styles from './Det.module.css'
export default function Details() {


let [details,setDetails] =useState({});
let [searchparameter,setSerach]=useSearchParams();


let prefix= "https://image.tmdb.org/t/p/w500";
let current=searchparameter.get('id');

async function getDetails(){
  let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${current}?api_key=bc714f7e736e0bf24633967d25fd3219&language=en-US`);
  setDetails(data);
  //console.log(data)

}
useEffect( ()=>{
    getDetails();
},[])
  return (
 <>
 <div className="row mt-5">
<div className={`col-lg-4 my-3 mt-5 `}>
 <div className="text-center">
<img src={prefix+details.poster_path}  alt="movie" className='w-100 h-100'/>

</div>
</div>

<div className={`col-lg-4 my-3 mt-5 w-50`}>
 <div className="tt">
 <h2 className='h6 r mt-3 fs-3 m-3'>{details.title?details.title:'No Name'}</h2>
 <h4 className='p-3'>Vote: {details.vote_average}</h4>
 <h4 className='p-3'>Vote count: {details.vote_count}</h4>
 <h4 className='p-3'>Vote count: {details.release_date}</h4>
<p className='w-100 fs-3 text-muted p-3'>{details.overview?details.overview:'No Name'}</p>
</div>
</div>

 </div>
 
 
 
 
 </>
  )
}
