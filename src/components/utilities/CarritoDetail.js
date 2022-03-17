import React, { useContext } from 'react'
import { CarritoContext } from "../context/CarritoContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CarritoDetail = () => {
  //Hooks
  const { carrito, clearCart, removeProduct, carritoTotal } = useContext(CarritoContext)

  // Funciones
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })


  //Render
  return (
    <div>
        <div className='flex justify-center'>
          <div>
            {carrito.map(product =>
              <div key={product.id} className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row m-10">
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`../img/${product.picture}`} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold text-gray-900">{product.title}</h5>
                  <div className='flex justify-around items-center'>
                    <p className="mx-3 font-normal text-gray-700">Cantidad: {product.prodQty}</p>
                    <p className="mx-3 font-normal text-gray-700">Total: {formatter.format(product.price * product.prodQty)}</p>
                    <button className="mx-3 bg-red-600 text-white px-2 rounded-xl" onClick={() => removeProduct(product)}><FontAwesomeIcon icon={faXmark} /></button>
                  </div>
                </div>
              </div>)}
          </div>
          <div className='mx-48 sticky self-center'>
            <div>
              <span className='font-bold uppercase text-xl'>Total: {formatter.format(carritoTotal)}</span>
            </div>
            <div className='flex flex-col items-center'>
              <button className='bg-slate-400	hover:bg-slate-300 w-46 text-center my-2.5 mx-auto rounded-3xl py-1.5 px-5 text-slate-800 border-solid border-2 border-black font-bold'  onClick={clearCart}>Vaciar carrito</button>
              <button className='btn-Primario w-46 text-center my-2.5 mx-auto rounded-3xl py-1.5 px-5 text-white border-solid border-2 border-black font-bold' >Finalizar compra</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CarritoDetail