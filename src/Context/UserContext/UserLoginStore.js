import React,{useState} from 'react'
import {userLoginContextObj} from '../UserContext/UserLoginContext';
import axios from 'axios';


const UserLoginStore = ({children}) => {

  let [user,setUser]=useState({})

    const handleUser=async (userObj)=>{
        setUser(userObj);
      }

  
  let [currentUser,setCurrentUser]=useState({})
  let [userLoginStatus,setUserLoginStatus]=useState(false)
  let [error,setError]=useState('')

  async function onUserLogin(userCredObj){
    try {
      let res=await axios.post("http://localhost:5000/user-api/login",userCredObj);
      console.log(res)
      if(res.data.message==='Login Successful'){
        setCurrentUser(res.data.user)
        setUserLoginStatus(true)
        sessionStorage.setItem('token',res.data.token)
        setError('')
      }
      else{
        setUserLoginStatus(false)
        setError(res.data.message)
      }
    }
    catch(err){
      setUserLoginStatus(false)
      setError(err.message)
    }
  }

    
  return (
  <userLoginContextObj.Provider value={{onUserLogin,currentUser,setCurrentUser,userLoginStatus,setUserLoginStatus,error,user,handleUser}}>{children}</userLoginContextObj.Provider>
  )
}

export default UserLoginStore