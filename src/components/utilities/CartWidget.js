import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";




const CartWidget = () => {
  return (
      <div className='text-white my-auto'>
            <FontAwesomeIcon icon={faBasketShopping} />
            <span className='cartCounter font-bold text-sm text-white'>0</span>
      </div>
  )
}

export default CartWidget