import React, { useContext } from 'react'
import CarritoDetail from '../utilities/CarritoDetail'
import { CarritoContext } from "../context/CarritoContext"
import { NavLink } from 'react-router-dom';

const CarritoContainer = () => {
  const { totalItemCarrito } = useContext(CarritoContext);
  return (
    <div className='text-center'>
      {
        totalItemCarrito > 0 ?
          <>
          <h2 className='title uppercase text-5xl m-12 font-bold'>Carrito</h2>
          <CarritoDetail/>
          </>
        :
        <>
          <h2 className='title uppercase text-5xl m-12 font-bold'>Su carrito esta vacío</h2>
          <p className='text-xl'>Visite el nuestro <NavLink className='title uppercase' to='/productos'>catalogo</NavLink> para agregar productos</p>
        </>
      }
    </div>
  )
}

export default CarritoContainer