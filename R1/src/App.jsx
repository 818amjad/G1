import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const handleSubmit =(e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/registers',{name,email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
   }
  return (
    
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlfor ="email">
                <strong>Name</strong>

              </label>
              <input type="text" 
              placeholder='enter name'
              autoComplete='off'
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlfor ="email">

                <strong>email</strong>

              </label>
              <input type="email" 
              placeholder='enter email'
              autoComplete='off'
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
              />
              </div>
              <div className='mb-3'>
              <label htmlfor ="email">
                <strong>password</strong>

              </label>
              <input type="password" 
              placeholder='enter password'
              autoComplete='off'
              name='password'
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
              />
              </div>
              <button type='submit' className='btn-success W-100 rounded-0'>
                Register
              </button>
              <p>Already have an account</p>
              <button className='btn btn-default border W-100 bg-light rounded-0 text-decoration'>
                login
              </button>
          </form>

        </div>
        
      </div>
      
    
  )
}

export default App
