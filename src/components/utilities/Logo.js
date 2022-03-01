import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.jpg'

const Logo = () => {
    return (
        <div className="max-w-screen-sm p-4">
            <NavLink to='/'>
                <img className='max-w-full' src={logo} alt="logo kitsune-games" />
            </NavLink>
        </div>
    )
}

export default Logo