import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [username, setUsername] = useState() 
  const [email, setEmail] = useState() 
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
   

    axios.post('http://localhost:4000/register', { username, email, password })
      .then(response => {
        if(response.data.status)
         navigate('/login')
      })
      .catch(err => console.log(err))
}

  return (
   
    <div className='h-screen flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <h2 className='text-xl mb-5 font-bold text-blue-500'>Register</h2>

        <div className='mb-3'>
          <label htmlFor="username" className='font-medium mb-2 flex'>Username:</label>
          <input
            type="text"
            className='w-full border rounded-md bg-zinc-200 border-gray-400 p-3'
            placeholder='Enter your username'
            value={username} 
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor="email" className='font-medium mb-2 flex'>Email:</label>
          <input
            type="email"
            autoComplete='off'
            className='w-full border rounded-md bg-zinc-200 border-gray-400 p-3'
            placeholder='Enter your Email'
            value={email} // Ensure this value is defined
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor="password" className='font-medium mb-2 flex'>Password:</label>
          <input
            type="password"
            className='w-full border rounded-md bg-zinc-200 border-gray-400 p-3'
            placeholder='********'
            maxlength="8"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className='w-full border rounded-md border-gray-400 bg-violet-900 hover:bg-violet-950 text-white py-2 mb-3'>Register</button>
        <p>Have an Account? <Link to="/login" className=" text-blue-500 px-2 py-1 rounded-md">Login</Link> </p>
      </form>
    </div>
    
  )
}

export default Register;
