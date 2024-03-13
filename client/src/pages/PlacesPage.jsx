import { Link, useParams } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'
import { HiOutlineCloudUpload } from 'react-icons/hi'
import { CiWifiOn } from 'react-icons/ci'
import { FaCar, FaCat } from 'react-icons/fa'
import { PiTelevisionSimpleLight } from 'react-icons/pi'
import { GiCryptEntrance } from 'react-icons/gi'
import { GiPocketRadio } from 'react-icons/gi'
import { useState } from 'react'

const PlacesPage = () => {
  const { action } = useParams()
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [photoLink, setPhotoLink] = useState('')
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)

  const inputHeader = (text) => {
    return <h2 className='text-2xl mt-4'>{text}</h2>
  }

  const inputDescription = (text) => {
    return <p className='text-gray-500 text-sm'>{text}</p>
  }

  const preInput = (header, description) => {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    )
  }

  return (
    <div>
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
      {action === 'new' && (
        <div>
          <form>
            {preInput(
              'Title',
              'Title for your place. should be short and catchy as in advertisement'
            )}
            <input type='text' placeholder='title eg. My lovely apart.' />
            {preInput('Address', 'Address to your place')}
            <input type='text' placeholder='address' />
            {preInput('Photos', 'more, better.')}
            <div className='flex gap-2'>
              <input type='text' placeholder={'Add using a link ....jpg'} />
              <button className='bg-gray-200 px-4 rounded-2xl'>
                Add&nbsp;photo
              </button>
            </div>
            <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              <button className='flex gap-1 justify-center items-center  border bg-transparent rounded-2xl p-8 text-2xl text-gray-600'>
                <div className='text-3xl'>
                  <HiOutlineCloudUpload />
                </div>
                Upload
              </button>
            </div>
            {preInput('Description', 'description of the place')}
            <textarea />
            {preInput('Perks', 'select all the perks of your place')}
            <div className='grid mt-3 gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' />
                <CiWifiOn />
                <span>Wifi</span>
              </label>
              <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' />
                <FaCar />
                <span>Free parking spot</span>
              </label>
              <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' />
                <PiTelevisionSimpleLight />
                <span>TV</span>
              </label>
              <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' />
                <FaCat />
                <span>Pets</span>
              </label>
              <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' />
                <GiCryptEntrance />
                <span>Private entrance</span>
              </label>
              <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer'>
                <input type='checkbox' />
                <GiPocketRadio />
                <span>Radio</span>
              </label>
            </div>
            {preInput('Extra info', 'what house rules, etc.')}
            <textarea></textarea>
            {preInput(
              'Check in&out times, max guests',
              '  add check in and out times, remember to have time window for cleaning the room between guests'
            )}

            <div className='grid gap-2 sm:grid-cols-3'>
              <div>
                <h3 className='mt-2 -mb-1'>Check in time</h3>
                <input type='text' placeholder='14:00' />
              </div>
              <div>
                <h3 className='mt-2 -mb-1'>Check out time</h3>
                <input type='text' />
              </div>
              <div>
                <h3 className='mt-2 -mb-1'>Max number of guests</h3>
                <input type='text' />
              </div>
            </div>
            <button className='primary my-4'>Save</button>
          </form>
        </div>
      )}
      my places
    </div>
  )
}

export default PlacesPage
