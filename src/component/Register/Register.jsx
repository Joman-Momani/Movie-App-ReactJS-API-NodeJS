
import { useState } from 'react';
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let [User,setUser]= useState ({
    name:'',
    email:'',
    password:'',
    age:'',

  });
  let [Loading,Setload] = useState(false);
  let [errorList,setErrorlist] = useState ([]);
  
let navigate = useNavigate();


function GoToLogin(){
let path ='/Login';
navigate(path);
}
  
    /*
    setload(true);



    let validateresult = ValidateForm();
    if(validateresult.error){
    setErrorlist(validateresult.error.details);
    setload(false);


    }
    else{
      GoToLogin();
    }

    //console.log(validateresult);
    
    
    
*/


function ValidateForm(){ //شكل لبدي اعملو validation
  const schema = Joi.object({ 
  name :Joi.string().alphanum().min(3).max(7).required(), 
  age : Joi.number().required().min(2).max(80), 
  email : Joi.string().required().email({tlds:{allow:['com','net']}}), 
  password : Joi.string().required(), 
});

 return  schema.validate(User,{abortEarly:false});

 }


let submbitrData = async (e)=>{
  e.preventDefault();
  //let ValidateResult = ValidateForm();
 //setErrorlist(ValidateResult.error.details);
 let {data}= await axios.post("https://knowledge-saraha.herokuapp.com/users/signUp",User);
  console.log(data);
  if(data.message ==='success'){
    console.log("success");
    GoToLogin();
  }
  Setload(true);
  //GoToLogin();

}

let getValue =(e)=> {
   //console.log(e.target.value);
   let myUser=  {...User }; //old
   myUser[e.target.name]=e.target.value; //first-name==tareq;
   setUser(myUser);
   //console.log(myUser);
  }





  return (
   <>
 <div className=' row m-5'>
  <h1 classname="reg my-5 ">Registration From</h1>
  {errorList.map((error,index)=>
  <div className="alert alert-danger mt-3">{error.message} </div>
  )}

  <form onSubmit={submbitrData}>

    <div className="mb-3 my-4">
      <label htmlFor="name" className="form-label fs-5 ">Name</label>
      <input  onChange={getValue}  type="text"  name="name" className="form-control" id="name"  placeholder='Enter Your Name' />
    </div>

   

    <div className="mb-3 my-4">
      <label htmlFor="age" className="form-label fs-5">Age</label>
      <input  onChange={getValue} type="number"  name="age" className="form-control" id="age"  placeholder='Enter Your Age' />
    </div>

    <div className="mb-3 my-4">
      <label htmlFor="email" className="form-label fs-5">Email</label>
      <input onChange={getValue}  type="email"  name="email" className="form-control" id="email"  placeholder='Enter Your Email' />
    </div>

    <div className="mb-3 my-4">
      <label htmlFor="password" className="form-label fs-5">Passsword</label>
      <input  onChange={getValue}  type="password"  name="password" className="form-control" id="passsword"   placeholder='Enter Your Password'/>
    </div>

   <button type="sumbit" className='my-3  btn btn-info'>
    {Loading?<i className='fa fa-spinner fa-spin'></i>:"Register"}
   
   </button>
  </form>
</div>

   </>
  )
}
