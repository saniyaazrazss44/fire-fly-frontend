import React from 'react'
import '../../assets/css/Navbar.css'
import FireFlyIcon from '../../assets/img/icons/firefly-icon.png'

const Navbar = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex px-8 sm:px-28 py-4 navbar'>
                <img src={FireFlyIcon} alt="image" />
            </div>
        </div>
    )
}

export default Navbar