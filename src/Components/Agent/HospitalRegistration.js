import React, { useContext } from 'react'
import { AgentLoginContextObj } from '../../Context/AgentContext/AgentContext'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import '../Agent/HospitalRegistration.css'

function HospitalRegistration() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let {agentLoginStatus}=useContext(AgentLoginContextObj)
  const [showPopup, setShowPopup] = useState(false)
  

  async function handleForm(hospitalObj){
    axios.post('http://localhost:5000/hospitals/post-hospital-data',hospitalObj)
    .then(() => {setShowPopup(true)
      setTimeout(() => {
        setShowPopup(false)
      }, 6000)
    })
    
  }
  return (
    <div>
      {agentLoginStatus === false ?(
        <div>
        <h3>Ouch! you have not logged in!</h3>
        <Link to="/agent-login" >Click here to login!</Link>
        </div>
      ):(
        <div className='hospitalform d-flex mx-5 mt-5 mr-5 ml-5 me-5 p-5 rounded-3'>
          <form className='mt-5 w-50 p-3 mx-auto' onSubmit={handleSubmit(handleForm)} >

          {/* Hospital name */}
          <label  className="form-label">Hospital Name</label>
          <input type='text' className='form-control mb-3' {...register('hospitalname',{required:true})}  />
          {errors.hospitalname?.type==='required' && <p>Hospital Name is required</p> }

          {/* address including city,state and country */}
          <label  className="form-label">Address(including city,state and country)</label>
          <input type='text' className='form-control mb-3' {...register('address',{required:true})}  />
          {errors.address?.type==='required' && <p>Address is required</p> }

          {/* contact number */}
          <label  className="form-label">Contact</label>
          <input type='number' className='form-control mb-3' {...register('contact',{required:true})}  />
          {errors.contact?.type==='required' && <p>Contact is required</p> }

          {/* email */}
          <label  className="form-label">Email</label>
          <input type='email' className='form-control mb-3 ' {...register('email')}  />

          {/* website */}
          <label  className="form-label">Hospital Website(if any)</label>
          <input type='text' className='form-control mb-3' {...register('website')}  />
          
          {/* certifications accredation and rewards */}
          <label  className="form-label">Certificates,Licenses and awards(if any)</label>
          <input type='text' className='form-control mb-3' {...register('certificates')}  />

          {/* facilities and services offered */}
          <label  className="form-label">Rate your facilities(1 to 5)</label>
          <input type='number' className='form-control mb-3' {...register('rating',{required:true,min:1,max:5})}  />
          {errors.rating?.type==='required' && <p>Rating is required</p> }
          {errors.rating?.type==='min' && <p>Rating must be at least 1</p> }
          {errors.rating?.type==='max' && <p>Rating must be at least 1</p> }

          {/* staff and expertise */}
          <label  className="form-label">Tell about hospital staff and expertise</label>
          <textarea className="form-control mb-3" cols="30" rows="3" {...register('staff',{required:true})}/>
          {errors.staff?.type==='required' && <p>This is required</p> }

          {/* would you like to say more */}
          <label  className="form-label">Suggestions</label>
          <textarea className="form-control mb-3" cols="30" rows="3" {...register('suggestions')}/>

          <button type='submit' className='btn btn-success  d-block mx-auto'>submit</button>

          </form>
          {showPopup && (
            <div className="popup">
              <p>Form submitted successfully!</p>
            </div>
          )}
        </div>
      )}
      </div>
  )
}

export default HospitalRegistration