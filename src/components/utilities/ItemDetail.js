
const ItemDetail = ({product}) => {
  return (
    <div>
      <h2 className="detailTitle text-center text-7xl my-12">{product.title}</h2>
      <div className="flex flex-wrap justify-around">
        <div className="mx-auto w-1/3 my-5">
          <img className="object-contain max-h-96 mx-auto" src={`.${product.picture}`} alt={product.title}></img>
        </div>
        <div className="mx-auto w-1/3">
          <p className="my-7 text-2xl">{product.description}</p>
          <div className="flex flex-wrap justify-around my-24">
            <p className="font-bold text-right text-3xl">Precio: </p>
            <p className="detailPrice font-bold text-right text-3xl">$ {product.price}</p>
          </div>
          <div className="text-center">
            <button className="detailAdd w-40 my-2.5 rounded-3xl py-1.5 px-5 text-white border-solid border-2 border-black">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail