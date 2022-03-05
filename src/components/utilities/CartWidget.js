import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";




const CartWidget = () => {
  return (
      <div className='text-white'>
            <FontAwesomeIcon icon={faBasketShopping} />
            <span className='cartCounter font-bold text-sm text-black px-2 rounded-xl relative bottom-1.5 left-1 text-center bg-slate-200'>0</span>
      </div>
  )
}

export default CartWidget