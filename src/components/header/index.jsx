// import React from 'react'
import './style.css';
import Logo from '../../assets/logos/logo.svg';
import Smallbcr from '../../assets/icons/bcr-small.png'
import Close from '../../assets/icons/close.png'

const Header = () => {
  return (
    <header className='flex items-center bg-[#F1F3FF]'>
     <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-3 content-center">
      <div className="flex items-center header-logo "><img src={Logo} title="Bincar Car Rental" alt="Bincar Car Rental" /></div>
      <div className="flex menuKanan sm:flex-col ">
        <div className="md:max-xl:hidden menuActive md:max-xl:flex-row sm:block ">
          <img src={Smallbcr} alt="Binar Car Rental" />
          <img src={Close} alt="Close" />
        </div>
        <ul className='flex gap-7 items-center'>
          <li><a className='text-black hover:text-black' href="">Our Services</a></li>
          <li><a className='text-black hover:text-black' href="">Why Us</a></li>
          <li><a className='text-black hover:text-black' href="">Testimonial</a></li>
          <li><a className='text-black hover:text-black' href="">FAQ</a></li>
          <li><button className="bg-[#5CB85F]  hover:text-black bg-white-200 text-white font-bold px-3.5 border-white hover:border-white rounded">Register</button></li>
        </ul>
      </div>
      </div>
     </div>
    </header>
  
  )
}

export default Header