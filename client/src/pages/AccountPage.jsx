/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from 'react'
import { UserContext } from '../components/UserContext'
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PlacesPage from './PlacesPage'
import AccountNav from '../components/AccountNav'

const AccountPage = () => {
  const [redirect, setRedirect] = useState(null)
  const { ready, user, setUser } = useContext(UserContext)
  let { subPage } = useParams()

  const logout = async () => {
    setRedirect(true)
    await axios.post('/logout')
    setUser(null)
  }

  if (!ready) {
    return 'Loading...'
  }

  if (ready && !user) {
    return <Navigate to='/login' />
  }
  if (subPage === undefined) {
    subPage = 'profile'
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div>
      <AccountNav />
      {subPage === 'profile' && (
        <div className='text-center max-w-lg mx-auto'>
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className='primary max-w-sm mt-2'>
            Logout
          </button>
        </div>
      )}
      {subPage === 'places' && <PlacesPage />}
    </div>
  )
}

export default AccountPage
