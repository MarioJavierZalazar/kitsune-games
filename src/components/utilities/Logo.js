import React from 'react'
import logo from '../../assets/img/logo.jpg'

const Logo = () => {
    return (
        <div className="max-w-screen-sm p-4">
            <img className='max-w-full' src={logo} alt="logo kitsune-games" />
        </div>
    )
}

export default Logo