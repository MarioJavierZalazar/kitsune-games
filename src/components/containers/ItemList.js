import { useEffect, useState } from 'react'
import Item from "../utilities/Item"
import SpinerLoading from '../utilities/SpinerLoading'

const ItemList = ( ) => {
    const [hiddenSpiner, setsHiddenSpiner] = useState('block')
    const [products, setProducts] = useState([])
    
    useEffect( () => {
        setTimeout(getProducts, 2000)
    }, [] )

    const getProducts = () =>{
        const URL = 'https://6214354489fad53b1f0d838c.mockapi.io/Productos'
        fetch(URL).then( respuesta => respuesta.json() ).then( json => {
           setProducts(json)
        })
        setsHiddenSpiner('hidden')
    }
  return (
      <>
        <div className={hiddenSpiner}>
            <SpinerLoading />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {products.map( p => <Item key={p.id} p={p} /> )}
        </div>
      </>
  )
}

export default ItemList