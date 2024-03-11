import { FaAirbnb } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaUserLarge } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <Link to='/' className='inline-flex items-center gap-1'>
        <FaAirbnb className='h-8 w-8' />
        <span className='font-bold text-xl'>airbnb</span>
      </Link>
      <div className='flex border gap-2 border-gray-300 rounded-full py-2 px-5 shadow-md shadow-gray-200 font-[500]'>
        <div>Anywhere</div>
        <div className='border-l border-gray-300'></div>
        <div>Any week</div>
        <div className='border-l border-gray-300'></div>
        <div className='text-gray-600'>Add guests</div>
        <button className='bg-primary text-white p-[6px] rounded-full'>
          <CiSearch className='w-4 h-4' />
        </button>
      </div>
      <Link
        to='/login'
        className='flex border gap-2 border-gray-300 rounded-full py-2 px-4 items-center'
      >
        <RxHamburgerMenu />
        <div className='bg-gray-500 text-white rounded-full border border-gray-500 p-[2px]'>
          <FaUserLarge className='relative top-[3px]' />
        </div>
      </Link>
    </header>
  )
}

export default Header
