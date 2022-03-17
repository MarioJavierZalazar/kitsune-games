import React, { useContext } from 'react'
import { CarritoContext } from "../context/CarritoContext"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";




const CartWidget = () => {
  const { totalItemCarrito } = useContext(CarritoContext);
  return (
      <div className='text-white'>
            <FontAwesomeIcon icon={faBasketShopping} />
            {totalItemCarrito > 0 &&
            <span className='cartCounter font-bold text-sm text-black px-2 rounded-xl relative bottom-1.5 left-1 text-center bg-slate-200'>{totalItemCarrito}</span>
            }
      </div>
  )
}

export default CartWidget