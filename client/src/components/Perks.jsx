import { CiWifiOn } from 'react-icons/ci'
import { FaCar, FaCat } from 'react-icons/fa'
import { PiTelevisionSimpleLight } from 'react-icons/pi'
import { GiCryptEntrance } from 'react-icons/gi'
import { GiPocketRadio } from 'react-icons/gi'

const Perks = ({ selected, onChange }) => {
  return (
    <>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input type='checkbox' />
        <CiWifiOn />
        <span>Wifi</span>
      </label>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input type='checkbox' />
        <FaCar />
        <span>Free parking spot</span>
      </label>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input type='checkbox' />
        <PiTelevisionSimpleLight />
        <span>TV</span>
      </label>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input type='checkbox' />
        <FaCat />
        <span>Pets</span>
      </label>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input type='checkbox' />
        <GiCryptEntrance />
        <span>Private entrance</span>
      </label>
      <label
        className='border p-4 flex rounded-2xl gap-2 items-center 
        cursor-pointer'
      >
        <input type='checkbox' />
        <GiPocketRadio />
        <span>Radio</span>
      </label>
    </>
  )
}
export default Perks
