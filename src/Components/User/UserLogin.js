import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { userLoginContextObj } from '../../Context/UserContext/UserLoginContext'
import { Link } from 'react-router-dom'
import  './UserLogin.css'


function UserLogin() {

    let {userLoginStatus}=useContext(userLoginContextObj)
    let {onUserLogin}=useContext(userLoginContextObj)
    let {error}=useContext(userLoginContextObj)

    let {register,handleSubmit,formState: { errors }}=useForm()
    let navigate=useNavigate()

    useEffect(() => {
        if (userLoginStatus === true)
        {
          navigate("/userDetails");
        }
      },[userLoginStatus]);
    

  return (
    <div className="login d-flex mx-5 mt-5 mr-5 ml-5 me-5 p-5 rounded-3">
    <form className='w-50 p-3 mx-auto mt-5' onSubmit={handleSubmit(onUserLogin)} style={{minHeight:'80vh'}}>
        
            <h1 className="mb-3 fs-3 text-center ">Login</h1>
            {/* error */}
            {errors.length!==0 && <p>{error}</p>  }
            {/* username */}
            <label  className="form-label ">Username</label>
            <input type="text" className='form-control mb-3 ' {...register('username',{required:true})} />
            {errors.username && <p className='fs-8 text-danger'>Username is required</p> }
            {/* password */}
            <label  className="form-label ">Password</label>
            <input type="password" className='form-control mb-3 ' {...register('password',{required:true})} />
            {errors.password && <p className='fs-8 text-danger'>Password is required</p> }
            <p>Not registered yet <Link to="/user-register" >Register Here!</Link> </p>

            <button type='submit' className='btn btn-success d-block mx-auto'>Login</button>
        
    </form>
    </div>
  )
}

export default UserLogin