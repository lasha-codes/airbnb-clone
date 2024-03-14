import { Link, useParams } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'
import AccountNav from '../components/AccountNav'

const PlacesPage = () => {
  const { action } = useParams()

  return (
    <div>
      <AccountNav />
      {action !== 'new' && (
        <div className='text-center'>
          <Link
            className='inline-flex gap-1 items-center bg-primary text-white py-2 px-6 rounded-full'
            to={'/account/places/new'}
          >
            <FaPlus />
            Add new place
          </Link>
        </div>
      )}
      my places
    </div>
  )
}

export default PlacesPage
