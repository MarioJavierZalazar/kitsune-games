import React from 'react'
import Logo from '../utilities/Logo'
import CartWidget from '../utilities/CartWidget'
import '../../css/header.css'


const NavBar = () => {
    return (
        <header className='container mx-auto'>
            <div className='flex justify-between'>
                <Logo />
                <CartWidget />
            </div>
            <nav className='container navBar'>
                <ul className='flex justify-around'>
                    <li className='justify-self-auto'><a href="#">Inicio</a></li>
                    <li className='justify-self-auto'><a href="#">Consolas</a></li>
                    <li className='justify-self-auto'><a href="#">Juegos</a></li>
                    <li className='justify-self-auto'><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
