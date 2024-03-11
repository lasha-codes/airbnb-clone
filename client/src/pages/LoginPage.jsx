import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../components/UserContext'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { setUser, user } = useContext(UserContext)

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/login', { email, password })
      setUser(data)
      alert('Login successful')
      setRedirect(true)
    } catch (error) {
      alert('Login failed')
    }
  }

  console.log(user)

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className='mt-4 grow flex items-center  justify-center'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto' onSubmit={handleLoginSubmit}>
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
          <button className='primary'>Login</button>
          <div className='text-center flex items-center justify-center gap-2 py-2 text-gray-500'>
            Don`t have an account?
            <Link to='/register' className='underline text-black font-[600]'>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
