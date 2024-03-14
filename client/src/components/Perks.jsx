/* eslint-disable react/prop-types */
import { CiWifiOn } from 'react-icons/ci'
import { FaCar, FaCat } from 'react-icons/fa'
import { PiTelevisionSimpleLight } from 'react-icons/pi'
import { GiCryptEntrance } from 'react-icons/gi'
import { GiPocketRadio } from 'react-icons/gi'

const Perks = ({ selected, onChange }) => {
  const handleCbClick = (e) => {
    const { checked, name } = e.target
    if (checked) {
      onChange([...selected, name])
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)])
    }
  }
  return (
    <>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input
          type='checkbox'
          checked={selected.includes('wifi')}
          name='wifi'
          onChange={handleCbClick}
        />
        <CiWifiOn />
        <span>Wifi</span>
      </label>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input
          type='checkbox'
          checked={selected.includes('parking')}
          name='parking'
          onChange={handleCbClick}
        />
        <FaCar />
        <span>Free parking spot</span>
      </label>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input
          type='checkbox'
          checked={selected.includes('tv')}
          name='tv'
          onChange={handleCbClick}
        />
        <PiTelevisionSimpleLight />
        <span>TV</span>
      </label>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input
          type='checkbox'
          checked={selected.includes('pets')}
          name='pets'
          onChange={handleCbClick}
        />
        <FaCat />
        <span>Pets</span>
      </label>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input
          type='checkbox'
          checked={selected.includes('entrance')}
          name='entrance'
          onChange={handleCbClick}
        />
        <GiCryptEntrance />
        <span>Private entrance</span>
      </label>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input
          type='checkbox'
          checked={selected.includes('radio')}
          name='radio'
          onChange={handleCbClick}
        />
        <GiPocketRadio />
        <span>Radio</span>
      </label>
    </>
  )
}
export default Perks
