import { useEffect, useState } from 'react'
import Item from "../utilities/Item"

const ItemList = () => {

    const [products, setProducts] = useState([])
    
    useEffect( () => {
        setTimeout(getProducts, 2000)
    }, [] )

    const getProducts = () =>{
        const URL = './data/products.json';

        fetch(URL).then( respuesta => respuesta.json() ).then( json => {
            setProducts(json)
        })
    }

  return (
      <div className='itemContainer flex flex-wrap justify-around'>
          {products.map( p => <Item key={p.id} p={p} /> )}
      </div>
  )
}

export default ItemList