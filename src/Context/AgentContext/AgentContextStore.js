import React, { useState } from 'react'
import { AgentLoginContextObj } from './AgentContext'
import axios from 'axios'

function AgentContextStore({children}) {
    let [error,setError]=useState('')
    let [currentAgent,setCurrentAgent]=useState({})
    let [agentLoginStatus,setAgentLoginStatus]=useState(false)

    async function onAgentLogin(userCredObj){
      
      try {
        let res=await axios.post(`http://localhost:5000/hospitals/post-agent-data`,userCredObj)
        let AgentList=res.data.user
       
        if(!AgentList){
            setError('Invalid Agentname')
        }
        else{
       
            if(res.data.message === "Login Successful"){
              
              
      
              setAgentLoginStatus(true)
              return "AGENT_LOGIN";
            }
            else{
            setError(AgentList)
          }
    }
      } catch (error) {
        console.log(error)
      }
} 
  return (
    <AgentLoginContextObj.Provider value={{currentAgent,setCurrentAgent,agentLoginStatus,setAgentLoginStatus,error,onAgentLogin}} >{children}</AgentLoginContextObj.Provider>
  )
}

export default AgentContextStore