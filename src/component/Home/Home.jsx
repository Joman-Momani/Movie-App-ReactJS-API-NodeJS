import React from 'react';
import axios from 'axios';
import  styles from  './home.module.css';
import { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Mediacontext } from '../Mediacontext/Mediacontext';
import { useContext } from 'react';

export default function Home() {

  let Naviagte= useNavigate();
  function GotToDetailsMove(id){
    //alert(id)

    Naviagte({
      pathname:'/Details',
      search:`?id=${id}`
    })
  }





  let prefix= "https://image.tmdb.org/t/p/w500";
  /*
  let {TrenMove}=useContext(Mediacontext);
  let {TrendTv}=useContext(Mediacontext);*/

let [TrenMove,SeTtrendmove]= useState([]);
let [TrendTv,SetTrentTv]= useState([]);
let[Person,SetPerson]=useState([]);


async function getTrending(mediaType,callback){
let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=bc714f7e736e0bf24633967d25fd3219`);
//console.log(data.result);
 callback(data.results);
}

useEffect(()=>{
//call function
getTrending("movie",SeTtrendmove);//first movie
getTrending("tv",SetTrentTv);//second Tv show
getTrending("person",SetPerson);
},[]);


return (
<>
<div className="row">
<div className="col-md-4 d-flex align-items-center " >
<div>
<div className={styles.brdro}  ></div>
<h2>Trendining <br/> movies <br/> to watch now</h2>
<p>most movies watched by day</p>
<div className={styles.brdr}></div>
</div>
</div>
{TrenMove.map((movie,index)=>
<div onClick={()=> GotToDetailsMove(movie.id)} className={`col-md-2 my-2 ${styles.hover}`}key={index}>
 <div className="text-center">
<img src={prefix+movie.poster_path}  alt="movie" className='w-100'/>
<h3 className='h6 text-center mt-3 fs-3 '>{movie.title?movie.title:'No Name'}</h3>
</div>
</div>
  )}


</div>

<div className="row mt-5 pt-5">
<div className="col-md-4 d-flex align-items-center " >
<div>
<div className={styles.brdro}  ></div>
<h2>Trendining <br/> Tv <br/> to watch now</h2>
<p>most movies watched by day</p>
<div className={styles.brdr}></div>
</div>
</div>
{TrendTv.map((movie,index)=>
<div className="col-md-2 my-2 " key={index}>
<img src={prefix+movie.poster_path}  alt="" className='w-100'/>
<h3 className='h6 text-center mt-3 fs-3 '>{movie.name?movie.name:'No Name'}</h3>
</div>
  )}
</div>


<div className="row mt-5 pt-5">
<div className="col-md-4 d-flex align-items-center " >
<div>
<div className={styles.brdro}  ></div>
<h2>Trendining <br/> Person <br/> to watch now</h2>
<p>most movies watched by day</p>
<div className={styles.brdr}></div>
</div>
</div>
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
