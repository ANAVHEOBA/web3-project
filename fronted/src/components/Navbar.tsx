import React from 'react'
import DeskNavbar from './DeskNavbar'
import MobileNavBar from './MobileNavBar'

function Navbar() {
  return (
    <div>
        <div className='block md:hidden'>
            <MobileNavBar />
        </div>
        <div className='hidden md:block'>
            <DeskNavbar />
        </div>
    </div>
  )
}

export default Navbar