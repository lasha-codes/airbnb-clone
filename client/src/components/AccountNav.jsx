import { CiUser, CiBoxList } from 'react-icons/ci'
import { HiOutlineBuildingLibrary } from 'react-icons/hi2'
import { Link, useLocation } from 'react-router-dom'

const AccountNav = () => {
  const { pathname } = useLocation()
  let mainPath = pathname
  if (mainPath.includes('/account/places')) {
    mainPath = '/account/places'
  }
  const linkClasses = (type = null) => {
    let classes = 'py-2 px-6 rounded-full'
    if (type === mainPath) {
      classes += ' bg-primary text-white rounded-full'
    } else {
      classes += ' bg-gray-200'
    }
    return classes
  }

  return (
    <nav className='w-full flex justify-center items-center gap-8 mt-8 mb-8'>
      <Link
        className={`${linkClasses('/account')} flex items-center gap-2`}
        to={'/account'}
      >
        <CiUser />
        My profile
      </Link>
      <Link
        className={`${linkClasses(
          '/account/bookings'
        )} flex items-center gap-2`}
        to={'/account/bookings'}
      >
        <CiBoxList />
        My bookings
      </Link>
      <Link
        className={`${linkClasses('/account/places')} flex items-center gap-2`}
        to={'/account/places'}
      >
        <HiOutlineBuildingLibrary />
        My accommodations
      </Link>
    </nav>
  )
}
export default AccountNav
