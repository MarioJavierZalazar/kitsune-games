import Logo from '../utilities/Logo'
import CartWidget from '../utilities/CartWidget'

import '../../css/header.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <header>
            <div className='flex justify-between px-5'>
                <Logo />
            </div>
            <nav className='navBar text-white text-lg uppercase'>
                <ul className='flex justify-around'>
                    <li className='justify-self-auto'> <NavLink to='/'>Home</NavLink></li>
                    <li className='justify-self-auto'> <NavLink to='/productos'>Catalogo</NavLink></li>
                    <li className='justify-self-auto'> <NavLink to='/contacto'> Contacto</NavLink></li>
                    <li className='justify-self-auto'> <NavLink to='/login'> Login</NavLink></li>
                    <li className='justify-self-auto'> <NavLink to='/carrito'> <CartWidget /></NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
