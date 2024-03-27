import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './UserRegister.css'
import {toast} from 'react-toastify'
function UserRegister() {

  let navigate=useNavigate()
  let {register,handleSubmit,formState: { errors }}=useForm()
  let [error,setError]=useState('')

  async function HandleSubmit(userObj){
    try{
    let res= await axios.post('http://localhost:5000/user-api/register',userObj)
    console.log(res)
    if(res.status===200){
      toast.success('Registration Successful')
      navigate('/userlogin')
      return 
    }

    toast.warning(res.data.message)
   
  }
    catch(err){
      toast.warning(err.message)
     
    }
  }
  return (
    <div className="register d-flex mx-5 mt-5 mr-5 ml-5 me-5 p-5 rounded-3">
      <form className='mx-auto w-50 p-3 mt-5' onSubmit={handleSubmit(HandleSubmit)} style={{minHeight:'80vh'}} >
      <h1 className="mb-3 fs-3 text-center ">Register</h1>
      {error.length!==0 && <h3 className='text-danger fs-5 fw-old text-center'>{error}</h3>}
        {/* 3rd party form */}

        {/* username */}
        <label  className="form-label">Username</label>
        <input type='text' className='form-control mb-3 mb-3' {...register('username',{required:true})}  />
        {errors.username && <p className='text-danger fs-8'>Username is required</p> }

        {/* password */}
        <label  className="form-label">Password</label>
        <input type='password' className='form-control mb-3' {...register('password',{required:true})}  />
        {errors.password && <p className='text-danger fs-8'>Password is required</p> }

         {/* email */}
         <label  className="form-label">Email</label>
          <input type='text' className='form-control' {...register('email',{required:true,pattern:{
            value: /^[^\s@]+@[^\s@].[^\s@]+$/
          }})}  />
          {errors.email?.type==='required' && <p className='fs-8 text-danger' >Email is required</p> }
          {errors.email?.type==='pattern' && <p className='fs-8 text-danger' >Invalid email address</p> }

        <p>Already Registered <Link to="/userlogin" >Login Here!</Link> </p>

        <button className='btn btn-success d-block mx-auto' type='submit' >Submit</button>
        
      </form>
    </div>
    
  )
}

export default UserRegister