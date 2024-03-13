/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from 'react'
import { UserContext } from '../components/UserContext'
import { Navigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PlacesPage from './PlacesPage'
import { CiUser, CiBoxList } from 'react-icons/ci'
import { HiOutlineBuildingLibrary } from 'react-icons/hi2'

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
    let classes = 'py-2 px-6 rounded-full'
    if (type === subPage) {
      classes += ' bg-primary text-white rounded-full'
    } else {
      classes += ' bg-gray-200'
    }
    return classes
  }

  return (
    <div>
      <nav className='w-full flex justify-center items-center gap-8 mt-8 mb-8'>
        <Link
          className={`${linkClasses('profile')} flex items-center gap-2`}
          to={'/account'}
        >
          <CiUser />
          My profile
        </Link>
        <Link
          className={`${linkClasses('bookings')} flex items-center gap-2`}
          to={'/account/bookings'}
        >
          <CiBoxList />
          My bookings
        </Link>
        <Link
          className={`${linkClasses('places')} flex items-center gap-2`}
          to={'/account/places'}
        >
          <HiOutlineBuildingLibrary />
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
