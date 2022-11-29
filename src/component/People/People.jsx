import React from 'react';
import axios from 'axios';
import { useState ,useEffect} from 'react';

export default function People() {
  let prefix= "https://image.tmdb.org/t/p/w500";
  let[Person,SetPerson]=useState([]);


  async function getTrending(mediaType,callback){
  let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=bc714f7e736e0bf24633967d25fd3219`);
  //console.log(data.result);
   callback(data.results);
  }
  
  useEffect(()=>{
  getTrending("person",SetPerson);
  },[]);


  return (
  <>
  
  <div className="row mt-5 pt-5">
{Person.map((movie,index)=>
<div className="col-md-2 my-2 " key={index}>
<img src={prefix+movie.profile_path}  alt="Person Trending" className='w-100'/>
<h3 className='h6 text-center mt-3 fs-3  '>{movie.name?movie.name:'No Name'}</h3>
</div>
  )}
</div>
  
  
  
  </>






  )
}
