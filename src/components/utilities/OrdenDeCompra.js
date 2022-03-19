import React from 'react'
import { useState, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import db from '../../firebase/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'


const OrdenDeCompra = () => {
  // Contextos
  const { carrito, clearCart } = useContext(CarritoContext);

  // Hooks
  const [buyerData, setBuyerData] = useState({})
  const [orderId, setOrderId] = useState('');
  const [ordenEmitida, setOrdenEmitida] = useState(false);

  //funciones
  const handleInput = e => {
    setBuyerData({
      ...buyerData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(carrito);

    const newOrderList = addDoc(collection(db, 'ordenes'), {
      buyer: {
        buyerNombre: buyerData.buyerNombre,
        buyerEmail: buyerData.buyerEmail,
        buyerTel: buyerData.buyerTel
      },
      items: carrito
    });

    newOrderList.then(data => setOrderId(data.id));
    clearCart();
    setOrdenEmitida(true);

  }


  return (
    <div className='text-center'>
      {
        ordenEmitida ?
        <>
        <h2 className='title uppercase text-5xl m-12 font-bold text-center'>Gracias por su compra</h2>
            <p className='text-xl mb-12'>Guarde este numero de orden, puede servirle ante cualquier reclamo</p>
          <div className=' inline-block text-center my-2.5 mx-auto rounded-3xl py-1.5 px-5 text-white border-solid border-2 border-black font-bold'>
            <p className='title uppercase text-3xl font-bold'>N° de orden: {orderId}</p>
          </div>
        </>
          :
          <>
            <h2 className='title uppercase text-5xl m-12 font-bold text-center'>Finalizar compra</h2>
            <p className='text-xl mb-12'>Para finalizar su compra, favor de completar los siguentes campos. Al finalizar, se le indicara el codigo de compra con el cual podra hacer el seguimiento.</p>
            <form className='mx-auto' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="buyerNombre">Indique su nombre:</label>
                <input type='text' name="buyerNombre" autoFocus id="buyerNombre" className="bg-slate-100 mx-4 w-96 px-2 rounded-xl" onChange={handleInput} />
              </div>
              <div>
                <label htmlFor="buyerEmail">Indique su correo electronico:</label>
                <input type='email' name="buyerEmail" id="buyerEmail" className="bg-slate-100 mx-4 w-96 px-2 rounded-xl" placeholder="correo@correo.com" onChange={handleInput} />
              </div>
              <div>
                <label htmlFor="buyerTel">Indique su teléfono:</label>
                <input type='text' name="buyerTel" id="buyerTel" className="bg-slate-100 mx-4 w-96 px-2 rounded-xl" onChange={handleInput} />
              </div>
              <button type='submit'>Realizar compra</button>
            </form>
          </>
      }
    </div>
  )
}

export default OrdenDeCompra