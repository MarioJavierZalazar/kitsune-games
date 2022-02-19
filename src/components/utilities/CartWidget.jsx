import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";




const CartWidget = () => {
  return (
      <div className='cart my-auto'>
            <FontAwesomeIcon icon={faBasketShopping} />
      </div>
  )
}

export default CartWidget