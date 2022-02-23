import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";




const CartWidget = () => {
  return (
      <div className='text-white my-auto'>
            <FontAwesomeIcon icon={faBasketShopping} />
            <spam className='cartCounter text-xs'>0</spam>
      </div>
  )
}

export default CartWidget