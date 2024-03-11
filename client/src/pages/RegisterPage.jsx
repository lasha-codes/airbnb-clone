import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      })
      alert('Registration successful. Now you can log in')
    } catch (error) {
      alert('Registration failed. Please try again later')
    }
  }

  return (
    <div className='mt-4 grow flex items-center  justify-center'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto' onSubmit={registerUser}>
          <input
            type='text'
            placeholder='John Doe'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='your@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='primary'>Register</button>
          <div className='text-center flex items-center justify-center gap-2 py-2 text-gray-500'>
            Already a member?
            <Link to='/login' className='underline text-black font-[600]'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
