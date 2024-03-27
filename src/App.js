import React from 'react'
import LandingPage from './Components/LandingPage'
import UserDetails from './Components/User/UserDetails'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Invitation from './Components/User/Invitation'
import AgentLogin from './Components/Agent/AgentLogin'
import HospitalRegistration from './Components/Agent/HospitalRegistration'
import UserLogin from './Components/User/UserLogin'
import UserRegister from './Components/User/UserRegister'
function App() {
  let BrowserRouter=createBrowserRouter([
    {
      path:"",
      element:<RootLayout />,
      children:[
        {
        path:"",
        element:<LandingPage />
        },
        {
          path:"userDetails",
          element:<UserDetails />
        },
        {
          path:"invitation",
          element:<Invitation/>
        },
        {
          path:"agent-login",
          element:<AgentLogin/>
        },
        {
          path:"hospital-registration",
          element:<HospitalRegistration/>
        },
        {
          path:"userlogin",
          element:<UserLogin/>
        },
        {
          path:"user-register",
          element:<UserRegister/>
        }
    ]
    }
  ])
    
  return (
    <>
    <ToastContainer/>
  <RouterProvider router={BrowserRouter} />
  </>
  )
}

export default App