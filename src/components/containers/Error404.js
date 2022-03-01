import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = ( {origin} ) => {
  return (
    <div>
        <div className="overflow-hidden w-1/6 mx-auto mt-2.5 p-2">
            { origin === 'product' ?
                <img className='object-contain w-full' src='../img/error404.png' alt='Error 404'/>
            :
                <img className='object-contain w-full' src='./img/error404.png' alt='Error 404'/>    
            }
        </div>
        <div className='text-center'>
            <h2 className='text-9xl title font-bold m-5'>404</h2>
            <p className='block m-2'>La página indicada no existe o fue cambiada de lugar.</p>
            <NavLink to='/' className={'title font-bold hover:underline'}>Volver a Home</NavLink>
        </div>
    </div>
  )
}

export default Error404