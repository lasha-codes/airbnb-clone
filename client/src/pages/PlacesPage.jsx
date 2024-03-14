import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'

import Perks from '../components/Perks'

import PhotosUploader from '../components/PhotosUploader'
import axios from 'axios'

const PlacesPage = () => {
  const { action } = useParams()
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)
  const [redirect, setRedirect] = useState('')

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

  const addNewPlace = async (e) => {
    e.preventDefault()
    await axios.post('places', {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    })
    setRedirect('/account')
  }

  console.log(addedPhotos)

  if (redirect) {
    return <Navigate to={redirect} />
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
          <form onSubmit={addNewPlace}>
            {preInput(
              'Title',
              'Title for your place. should be short and catchy as in advertisement'
            )}
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='title eg. My lovely apart.'
            />
            {preInput('Address', 'Address to your place')}
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='address'
            />
            {preInput('Photos', 'more, better.')}
            <PhotosUploader
              addedPhotos={addedPhotos}
              onChange={setAddedPhotos}
            />
            {preInput('Description', 'description of the place')}
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {preInput('Perks', 'select all the perks of your place')}
            <div
              className='grid mt-3 gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
   lg:grid-cols-6'
            >
              <Perks selected={perks} onChange={setPerks} />
            </div>

            {preInput('Extra info', 'what house rules, etc.')}
            <textarea
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
            />
            {preInput(
              'Check in&out times, max guests',
              '  add check in and out times, remember to have time window for cleaning the room between guests'
            )}

            <div className='grid gap-2 sm:grid-cols-3'>
              <div>
                <h3 className='mt-2 -mb-1'>Check in time</h3>
                <input
                  type='text'
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder='14:00'
                />
              </div>
              <div>
                <h3 className='mt-2 -mb-1'>Check out time</h3>
                <input
                  type='text'
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder='11:00'
                />
              </div>
              <div>
                <h3 className='mt-2 -mb-1'>Max number of guests</h3>
                <input
                  type='number'
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                />
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
