import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'
import { HiOutlineCloudUpload } from 'react-icons/hi'
import Perks from '../components/Perks'
import axios from 'axios'

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

  const addPhotoByLink = async (e) => {
    e.preventDefault()
    const { data: filename } = await axios.post('/upload-by-link', {
      link: photoLink,
    })
    setAddedPhotos((prev) => {
      return [...prev, filename]
    })
    setPhotoLink('')
  }

  const uploadPhoto = (e) => {
    const files = e.target.files
    const data = new FormData()

    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i])
    }

    axios
      .post('/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        const { data: filenames } = response
        setAddedPhotos((prev) => {
          return [...prev, ...filenames]
        })
      })
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
            <div className='flex gap-2'>
              <input
                type='text'
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
                placeholder={'Add using a link ....jpg'}
              />
              <button
                onClick={addPhotoByLink}
                className='bg-gray-200 px-4 rounded-2xl'
              >
                Add&nbsp;photo
              </button>
            </div>
            <input
              type='file'
              multiple
              className='hidden'
              id='file-upload'
              onChange={uploadPhoto}
            />
            <div className='mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              {addedPhotos.length > 0 &&
                addedPhotos.map((link, idx) => (
                  <div key={idx}>
                    <img
                      className='rounded-2xl'
                      src={'http://localhost:4000/uploads/' + link}
                    />
                  </div>
                ))}
              <label
                htmlFor='file-upload'
                className='flex gap-1 justify-center items-center  border bg-transparent rounded-2xl p-8 text-2xl text-gray-600 cursor-pointer'
              >
                <div className='text-3xl'>
                  <HiOutlineCloudUpload />
                </div>
                Upload
              </label>
            </div>
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
