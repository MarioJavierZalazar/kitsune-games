import React from 'react'
import Logo from '../utilities/Logo'
import CartWidget from '../utilities/CartWidget'
import '../../css/header.css'


const NavBar = () => {
    return (
        <header>
            <div className='flex justify-between px-5'>
                <Logo />
            </div>
            <nav className='navBar'>
                <ul className='flex justify-around'>
                    <li className='justify-self-auto'><a href="#">Inicio</a></li>
                    <li className='justify-self-auto'><a href="#">Consolas</a></li>
                    <li className='justify-self-auto'><a href="#">Juegos</a></li>
                    <li className='justify-self-auto'><a href="#">Contacto</a></li>
                    <li className='justify-self-auto'><a href="#">Login</a></li>
                    <li className='justify-self-auto'><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
