import React, { useContext } from 'react'
import CarritoDetail from '../utilities/CarritoDetail'
import { CarritoContext } from "../context/CarritoContext"

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
          <h2 className='title uppercase text-5xl m-12 font-bold'>Su carrito esta vacío</h2>
      }
    </div>
  )
}

export default CarritoContainer