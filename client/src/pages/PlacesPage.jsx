import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'
import AccountNav from '../components/AccountNav'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PlacesPage = () => {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    axios.get('/places').then(({ data }) => {
      setPlaces(data)
    })
  }, [])

  return (
    <div>
      <AccountNav />
      <div className='text-center'>
        list of all added places
        <br />
        <Link
          className='inline-flex gap-1 items-center bg-primary text-white py-2 px-6 rounded-full'
          to={'/account/places/new'}
        >
          <FaPlus />
          Add new place
        </Link>
      </div>
      <div className='mt-4'>
        {places.length > 0 &&
          places.map((place, idx) => {
            return (
              <Link
                to={'/account/places/' + place._id}
                key={idx}
                className='flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl'
              >
                <div className='w-32 h-32 bg-gray-300 shrink-0'>
                  {place.addedPhotos.length > 0 && (
                    <>
                      <img src={place.addedPhotos[0]} alt='' />
                    </>
                  )}
                </div>
                <div>
                  <h2 className='text-xl'>{place.title}</h2>
                  <p className='text-sm mt-2'>{place.description}</p>
                </div>
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default PlacesPage
