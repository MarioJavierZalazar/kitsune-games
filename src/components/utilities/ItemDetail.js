import { useContext, useState } from "react"
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext"


const ItemDetail = ({ product }) => {
  //Hooks
  const [cant, setCant] = useState(1);
  const { setProduct } = useContext(CarritoContext);
  const [isInCart, setIsInCart] = useState(false);

  //Funciones
  const addCant = () => {
    if (cant < 10) setCant(cant + 1);
  }

  const restCant = () => {
    if (cant > 1) setCant(cant - 1);
  }

  const addToCart = (product, qty) => {
    setProduct(product, qty)
    setIsInCart(true)
  }

  //Render
  return (
    <div>
      <h2 className="detailTitle text-center text-7xl my-12">{product.title}</h2>
      <div className="flex flex-wrap justify-around">
        <div className="mx-auto w-1/3 my-5">
          <img className="object-contain max-h-96 mx-auto" src={`../img/${product.picture}`} alt={product.title}></img>
        </div>
        <div className="mx-auto w-1/3">
          <p className="my-7 text-2xl">{product.description}</p>
          <div className="flex flex-wrap justify-around my-24">
            <p className="font-bold text-right text-3xl">Precio: </p>
            <p className="detailPrice font-bold text-right text-3xl">$ {product.price}</p>
          </div>
          <div className="text-center">
            {isInCart ?
              <NavLink to='/carrito' className="detailAdd w-40 my-2.5 rounded-3xl py-1.5 px-5 text-white border-solid border-2 border-black">Terminar compra</NavLink>
              :
              <>
                <div className="flex justify-center mb-4">
                  <button className="px-2 border-2 bg-slate-200 rounded-md mx-2" onClick={restCant}> - </button>
                  <p className="px-5 w-1/6">{cant}</p>
                  <button className="px-2 border-2 bg-slate-200 rounded-md mx-2" onClick={addCant}> + </button>
                </div>
                <button onClick={() => { addToCart(product, cant) }} className="detailAdd w-40 my-2.5 rounded-3xl py-1.5 px-5 text-white border-solid border-2 border-black">Añadir al carrito</button>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail