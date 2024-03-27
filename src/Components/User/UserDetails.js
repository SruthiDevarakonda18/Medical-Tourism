import React, { useState } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../App.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userLoginContextObj } from '../../Context/UserContext/UserLoginContext';
import { useForm } from 'react-hook-form';
import {toast} from 'react-toastify'

function Form() {
  let navigate=useNavigate()
  let {  register,handleSubmit,formState: { errors }} = useForm();
  let {handleUser}=useContext(userLoginContextObj)
  let {userLoginStatus}=useContext(userLoginContextObj)
  let [history,setHistory] = useState(null);
  let [prescription,setPrescription] = useState(null);

  const handleFile1Change = (e) =>{
      setHistory(e.target.files[0]);
  }

  
  const handleFile2Change = (e) =>{
    setPrescription(e.target.files[0]);
}


async function HandleFormSubmit(userObj){
  console.log(userObj);
  console.log(history)
  console.log(prescription)

  const form = new FormData();

  form.append("city",userObj.city);
  form.append("dob",userObj.dob);
  form.append("email",userObj.email);
  form.append("firstname",userObj.firstname);
  form.append("lastname",userObj.lastname);
  form.append("middlename",userObj.middlename);
  form.append("phone",userObj.phone);
  form.append("preferredCity",userObj.preferredCity);
  form.append("specializations",userObj.specializations);

  form.append("history",history);
  form.append("prescription",prescription);



  let temp = await axios.post("http://localhost:5000/user-api/post-user-data",form);

 
  
  handleUser(userObj)
  toast.success('Form Submitted Successfully')
  navigate('/invitation')
}


  return (
    <div>
      {userLoginStatus === false ?(
        <div>
        <h3>Ouch! you have not logged in!</h3>
        <Link to="/userlogin" >Click here to login!</Link>
        </div>
      ):(
  <div className='firstform'>
      
    <div className="details d-flex mx-5 mt-5 mr-5 ml-5 me-5 p-5 rounded-3">
      <form className='mt-5 w-50 p-3 mx-auto' onSubmit={handleSubmit(HandleFormSubmit)}  >
          {/* 3rd party form */}
          <h1 className="text-center">Fill your details</h1>
          <label  className="form-label">Firstname</label>
          <input type='text' className='form-control' {...register('firstname',{required:true,maxLength:10})}  />
          {errors.firstname?.type==='required' && <p className='fs-8 text-danger'>Firstname is required</p> }
          {errors.firstname?.type==='maxLength' && <p className='fs-8 text-danger'>maximum length is 10</p> }   

          {/* middle name */}
          <label  className="form-label">Middlename</label>
          <input type='text' className='form-control' {...register('middlename')}  />
          
          {/* last name */}
          <label  className="form-label">Lastname</label>
          <input type='text' className='form-control' {...register('lastname',{required:true,maxLength:10})}  />
          {errors.lastname?.type==='required' && <p className='fs-8 text-danger' >Lastname is required</p> }
          {errors.lastname?.type==='maxLength' && <p className='fs-8 text-danger' >maximum length is 10</p> }  

          {/* email */}
          <label  className="form-label">Email</label>
          <input type='text' className='form-control' {...register('email',{required:true,pattern:{
            value: /^[^\s@]+@[^\s@].[^\s@]+$/
          }})}  />
          {errors.email?.type==='required' && <p className='fs-8 text-danger' >Email is required</p> }
          {errors.email?.type==='pattern' && <p className='fs-8 text-danger' >Invalid email address</p> }
          {/* phone */}
          <label  className="form-label">Phone</label>
          <input type='number' className='form-control' {...register('phone',{required:true,maxLength:10,minLength:10})}  />
          {errors.phone?.type==='required' && <p className='fs-8 text-danger' >Phone is required</p> }
          {errors.phone?.type==='maxLength' && <p className='fs-8 text-danger' >phone number must be 10 digit </p> }
          {errors.phone?.type==='minLength' && <p className='fs-8 text-danger' >phone number must be 10 digit </p> }  
          {/* city */}
          <label  className="form-label">City</label>
          <input type='text' className='form-control' {...register('city',{required:true})}  />
          {errors.city?.type==='required' && <p className='fs-8 text-danger'  >City is required</p> }

          {/* dob */}
          <label  className="form-label">Date of Birth</label>
          <input type='date' className='form-control' {...register('dob',{required:true})}  />
          {errors.city?.type==='required' && <p className='fs-8 text-danger' >DOB is required</p> }


        <div className='mb-4'>
          <label>Select Preferred Location:</label>
          <select

            
            {...register('preferredCity',{required:true})}
            className = "form-control">
              <option value="">Select Location</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Banglore">Banglore</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Delhi">Delhi</option>
     
          </select>
            {errors.preferredCity?.type==='required' && <p className='fs-8 text-danger' >City is required</p> }

        </div>

        <div className='mb-4'>
           <label>Select Specalization</label>
            <select

              
              {...register('specializations',{required:true})}
              className = "form-control">
              <option value="">Select Specialization</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Ophthalmology">Ophthalmology</option>
              <option value="Urology">Urology</option>
              <option value="Gastroenterology">Gastroenterology</option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="Hematology">Hematology</option>
              <option value='Physiotherapy'>Physiotherapy</option>
     
            </select>
          {errors.specializations?.type==='required' && <p className='fs-8 text-danger' >Specializations is required</p> }
        </div>    

        <label htmlFor='file'>Past Medical History</label>&nbsp;
        <input type='file' accept='application/pdf' className = "form-control" onChange={handleFile1Change}/>
        

        <br/>
        <label htmlFor='file'>Current Prescription</label>&nbsp;
        <input type='file' accept='application/pdf' className = "form-control" onChange={handleFile2Change}/>

        <br/>
        <NavLink to='/#'><button className='btn btn-success float-start'>Back</button></NavLink>
        <button type="submit"  className='btn btn-success float-end'>Submit</button>
      </form>
         
    </div>
    </div>)}
  </div>     
   
  )
}

export default Form







