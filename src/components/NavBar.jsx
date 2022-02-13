import React from 'react'
import logo from '../assets/img/logo.jpg'
import '../css/header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <header className='container mx-auto'>
            <div className='flex justify-between'>
                <div className="header_logo p-4">
                    <img src={logo} alt="logo"/>
                </div>
                <div className='cart my-auto'>
                    <a href="#">
                        <FontAwesomeIcon icon={faBasketShopping} />
                    </a>
                </div>
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
