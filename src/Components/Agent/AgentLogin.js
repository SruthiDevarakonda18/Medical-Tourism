import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AgentLoginContextObj } from '../../Context/AgentContext/AgentContext';
import './AgentLogin.css'
function AgentLogin() {

  let navigate=useNavigate()
  let {register,handleSubmit}=useForm();
  let {agentLoginStatus}=useContext(AgentLoginContextObj)
  let {onAgentLogin}=useContext(AgentLoginContextObj)
  let {error}=useContext(AgentLoginContextObj)

  let handleAgentLogin = async(data) =>{
    let res = await onAgentLogin(data);
    if(res === 'AGENT_LOGIN'){
      navigate("/hospital-registration")
    }
  }
  

  return (
    <div className='details d-flex align-items-center justify-content-center rounded-3  mx-5 mt-5 mr-5 ml-5 me-5 p-5' style={{minHeight:'80vh'}}>
      
        <form className='mt-5 w-50 p-3 mx-auto' onSubmit={handleSubmit(handleAgentLogin)}>
            <h1 className='mb-3 fs-3 text-center'>Login</h1>
            {/* error */}
            {error.length!==0 && <p>{error}</p>  }
            {/* username */}
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" className='form-control mb-3' {...register("username")}/>
            {/* password */}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className='form-control mb-4' {...register("password")} />
            <button type='submit' className='btn btn-success d-block mx-auto'>Login</button>
        </form>
    </div>
    
  )
}

export default AgentLogin