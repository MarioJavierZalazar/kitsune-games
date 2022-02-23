import Logo from '../utilities/Logo'
import CartWidget from '../utilities/CartWidget'
import '../../css/header.css'


const NavBar = () => {
    return (
        <header>
            <div className='flex justify-between px-5'>
                <Logo />
            </div>
            <nav className='navBar text-white text-lg uppercase'>
                <ul className='flex justify-around'>
                    <li className='justify-self-auto'>Inicio</li>
                    <li className='justify-self-auto'>Consolas</li>
                    <li className='justify-self-auto'>Juegos</li>
                    <li className='justify-self-auto'>Contacto</li>
                    <li className='justify-self-auto'>Login</li>
                    <li className='justify-self-auto'><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
