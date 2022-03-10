import React, { useState, useContext, useEffect } from 'react'
import { CarritoContext } from "../context/CarritoContext"

const CarritoDetail = () => {
  //Hooks
  const {carrito, clearCart, removeProduct, carritoTotal } = useContext(CarritoContext)
  const [carritoProduct, setCarritoProduct] = useState(carrito)

  useEffect(() => {
    setCarritoProduct(carrito)
  }, [carrito])
  


  //Render
  return (
    <div>
        <h2>Carrito details</h2>
        <table className='table-auto'>
          <thead>
            <tr>
              <th>img</th>
              <th>title</th>
              <th>qty</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
          {carritoProduct.map(product => 
          <tr key={product.id}>
            <td>{product.picture}</td>
            <td>{product.title}</td>
            <td>{product.prodQty}</td>
            <td>{product.price * product.prodQty}</td>
            <td><button onClick={()=>removeProduct(product)}>X</button></td>
          </tr>)}
          </tbody>
        </table>
        <div>
          <span>Total:{carritoTotal}</span>
        </div>
        <div>
          <button onClick={clearCart}>Borrar todo</button>
          <button>Finalizar compra</button>
        </div>
    </div>
  )
}

export default CarritoDetail