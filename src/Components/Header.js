import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AgentLoginContextObj } from '../Context/AgentContext/AgentContext'
import { userLoginContextObj } from '../Context/UserContext/UserLoginContext'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  let {agentLoginStatus,setError}=useContext( AgentLoginContextObj)
  let {setAgentLoginStatus}=useContext( AgentLoginContextObj)
  let {setCurrentAgent}=useContext( AgentLoginContextObj)

  let {userLoginStatus}=useContext(userLoginContextObj)
  let {setUserLoginStatus}=useContext(userLoginContextObj)
  let {setCurrentUser}=useContext(userLoginContextObj)

  function agentLogout(){

    setCurrentAgent({})
    setAgentLoginStatus(false)
  }

  function userLogout(){
    setCurrentUser({})
    setUserLoginStatus(false)

    sessionStorage.removeItem('token')
  }


  return (
    <div>
      

      
     <nav className="navbar navbar-light bg-light justify-content-between">
      <div className = 'justify-content-end' >
      <img className='img-fluid'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8dllqBFpJ1ZCjrL3qPHS4jI9SyHxg7x0Cw&usqp=CAU"
            height="100" width="100" alt="loading" style={{padding: "10px"}} />
           


          <span><p className='tagline'><b>MedJourney</b> Marvels<br></br><span>Your Journey to Wellness Begins Here</span></p></span>
      </div>
      <form className="form-inline" style={{padding: "10px",fontSize:'20px'}}>
      {agentLoginStatus===false ?(
        <>
        {userLoginStatus === false ?(
          <>
          <a className="mx-3 nav-link active nav-brand nav-item"  href="#aboutus" id="abtus">AboutUs</a>
          <a className='mx-3 nav-link active nav-brand nav-item' href='#hospitals'>Our Network</a>
         <NavLink className='nav-link active nav-brand nav-item fs-5' to="agent-login" >Login as agent</NavLink>
          </>
        ):(
          <NavLink className='nav-link active nav-brand nav-item fs-5' to="userlogin" onClick={userLogout} >Logout</NavLink>
        
        )}
        
        </>
        ):(
          <NavLink className='nav-link active nav-brand nav-item fs-5' to="" onClick={agentLogout} >Logout</NavLink>

        )}
        </form>
    </nav>

    </div>
  )
}

export default Header
