import react, { useState } from "react";

export const CarritoContext = react.createContext()


export const CarritoContextProvider = ({children}) => {
  // Hooks
  const [carrito, setCarrito] = useState([])
  const [carritoTotal, setCarritoTotal] = useState(0)
  const [totalItemCarrito, setTotalItemCarrito] = useState(0)
  //Functions
  const sumar = (valor, multiplicador) => {
    return valor * multiplicador
  }
  const setProduct = (item, prodQty) => {
    if (existeEnCarrito(item.id)){
      let index = carrito.findIndex(i => i.id === item.id);
      let copiaCarrito = [...carrito];
      copiaCarrito[index].prodQty += prodQty;
      setCarritoTotal(carritoTotal + sumar(item.price, prodQty))
      setTotalItemCarrito(totalItemCarrito + prodQty)
      setCarrito(copiaCarrito);
    } else {
      const itemCarrito = {...item, prodQty};
      setCarrito([...carrito, itemCarrito]);
      setCarritoTotal(carritoTotal + sumar(itemCarrito.price, itemCarrito.prodQty))
      setTotalItemCarrito(totalItemCarrito + itemCarrito.prodQty)
    }
  }

  const existeEnCarrito = (id) => {
    return carrito.some((cartItem) => cartItem.id === id);
  }
  const clearCart = () => {
    setCarrito([]);
    setCarritoTotal(0)
    setTotalItemCarrito(0)
  }

  const removeProduct = (item) => {
    if (existeEnCarrito(item.id)){
      let index = carrito.findIndex(i => i.id === item.id);
      let copiaCarrito = [...carrito];
      setCarritoTotal(carritoTotal - sumar(item.price, item.prodQty))
      setTotalItemCarrito(totalItemCarrito - item.prodQty)
      copiaCarrito.splice(index, 1);
      setCarrito(copiaCarrito);
  }}
  //Render
  return (
      <CarritoContext.Provider value={ { carrito, setProduct, clearCart, removeProduct, carritoTotal, totalItemCarrito} }>
        {children}
      </CarritoContext.Provider>
  )
}