/* eslint-disable react/prop-types */
import axios from 'axios'
import { useState } from 'react'
import { HiOutlineCloudUpload } from 'react-icons/hi'

const PhotosUploader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState('')
  const addPhotoByLink = async (e) => {
    e.preventDefault()
    const { data: filename } = await axios.post('/upload-by-link', {
      link: photoLink,
    })
    onChange((prev) => {
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
        onChange((prev) => {
          return [...prev, ...filenames]
        })
      })
  }

  console.log(addedPhotos)

  return (
    <>
      <div className='flex gap-2'>
        <input
          type='text'
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
          placeholder={'Add using a link ....jpg'}
        />
        <button
          onClick={addPhotoByLink}
          className='bg-gray-200 px-4 
rounded-2xl'
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
      <div
        className='mt-2 grid gap-2 
grid-cols-3 md:grid-cols-4 
lg:grid-cols-6'
      >
        {addedPhotos.length > 0 &&
          addedPhotos.map((link, idx) => (
            <div key={idx} className='h-32 flex'>
              <img
                className='rounded-2xl w-full object-cover'
                src={'http://localhost:4000/uploads/' + link}
              />
            </div>
          ))}
        <label
          htmlFor='file-upload'
          className='flex gap-1 justify-center 
items-center  border bg-transparent 
rounded-2xl p-8 text-2xl 
text-gray-600 cursor-pointer'
        >
          <div className='text-3xl'>
            <HiOutlineCloudUpload />
          </div>
          Upload
        </label>
      </div>
    </>
  )
}

export default PhotosUploader
