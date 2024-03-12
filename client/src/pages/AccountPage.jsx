/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from 'react'
import { UserContext } from '../components/UserContext'
import { Navigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PlacesPage from './PlacesPage'

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

  const linkClasses = (type = null) => {
    let classes = 'py-2 px-6'
    if (type === subPage) {
      classes += ' bg-primary text-white rounded-full'
      return classes
    }
  }

  return (
    <div>
      <nav className='w-full flex justify-center items-center gap-8 mt-8 mb-8'>
        <Link className={linkClasses('profile')} to={'/account'}>
          My profile
        </Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
          My bookings
        </Link>
        <Link className={linkClasses('places')} to={'/account/places'}>
          My accommodations
        </Link>
      </nav>
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
