//import { createContext } from 'react';
import axios from 'axios';
import { useEffect ,useState } from 'react';

const { createContext } = require("react");
export let Mediacontext = createContext([]);

export function MediacontextProvider(props){
    let [TrenMove,SeTtrendmove]= useState([]);
    let [TrendTv,SetTrentTv]= useState([]);
    async function getTrending(mediaType,callback){
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=bc714f7e736e0bf24633967d25fd3219`);
     callback(data.results);
    }
    useEffect(()=>{
    getTrending("movie",SeTtrendmove);
    getTrending("tv",SetTrentTv);
    },[]);
   
    
    return <Mediacontext.Provider 
    value={{TrenMove,TrendTv}}>

      {props.children}

    </Mediacontext.Provider>
}