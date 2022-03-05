import Logo from '../utilities/Logo'
import CartWidget from '../utilities/CartWidget'

import '../../css/header.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <header>
            <div className='flex justify-between px-5'>
                <Logo />
            </div>
            <nav className='navBar text-white text-lg uppercase py-2'>
                <ul className='flex justify-around'>
                    <li className='justify-self-auto'> <Link to='/'>Home</Link></li>
                    <li className='justify-self-auto'> <Link to='/productos'>Catalogo</Link></li>
                    <li className='justify-self-auto'> <Link to='/contacto'> Contacto</Link></li>
                    <li className='justify-self-auto'> <Link to='/login'> Login</Link></li>
                    <li className='justify-self-auto'> <Link to='/carrito'> <CartWidget /></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
