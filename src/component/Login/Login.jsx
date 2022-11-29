
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi';

export default function Login({setUserData}) {
  let [User,setUser]= useState ({
    email:'',
    password:'',

  });
  let [Loading,Setload] = useState(false);
  let [errorList,setErrorlist] = useState ([]);
  let [errorMsg,setErrorMsg] = useState ("");



let nagigate = useNavigate();
function GoToHome(){
let path ='/Home';
nagigate(path);
}


  async function submbitrData(e){
    e.preventDefault();
    //let ValidateResult = ValidateForm();
   //setErrorlist(ValidateResult.error.details);
   let {data}= await axios.post("https://knowledge-saraha.herokuapp.com/users/signIn",User);
    //console.log(data);
    if(data.message=='login'){
      //console.log(data);
      localStorage.setItem('token',data.token);
      setUserData();
      //console.log(data);
       GoToHome();
    }
    else{
      setErrorMsg(data.message)
    }
    Setload(true);
    

  }

  function getValue(e) {
   //console.log(e.target.value);
   let myUser=  {...User };
   myUser[e.target.name]=e.target.value;
   setUser(myUser);
   ///console.log(myUser);
  }


 function ValidateForm(){
  const schema = Joi.object({ 
  email : Joi.string().required().email({tlds:{allow:['com','net']}}), 
  password : Joi.string().required().pattern(new RegExp('^[a-z]{3,8}$')), 
});

     return  schema.validate(User,{abortEarly:false});

 }



  return (
   <>
   {errorMsg?<div className="alert alert-danger mt-5">
   {errorMsg}
   </div>:''}
  
 <div className='m-5'>
  <h1 classname="reg ">Login From</h1>
  {  errorList.map((error,index)=>  <div key={index}
  className='alert alert-danger'  >
  {error.message}

  </div>
  )
  }
  <form onSubmit={submbitrData}>
    <div className="my-5">
      <label htmlFor="email" className="form-label fs-4 ">Email</label>
      <input onChange={getValue}  type="email"  name="email" className="form-control" id="email" placeholder='Enter your Email'  />
    </div>

    <div className="my-5">
      <label htmlFor="password" className="form-label fs-4">Passsword</label>
      <input  onChange={getValue}  type="password"  name="password" className="form-control " id="password" placeholder='Enter your Password'  />
    </div>

<button className=' btn btn-info'>
  {Loading?<i className='fa fa-spinner fa-spin'></i>:"Log in"}

</button>
</form>
</div>

   </>
  )
}
