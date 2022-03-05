import { useEffect, useState } from 'react'
import Item from "../utilities/Item"
import SpinerLoading from '../utilities/SpinerLoading'

const ItemList = ( ) => {
    const [hiddenSpiner, setsHiddenSpiner] = useState('block')
    const [products, setProducts] = useState([])
    const [productsFilter, setProductsFilter] = useState([])
    const [value, setvalue] = useState(false)
    const [value2, setvalue2] = useState(false)
    const [value3, setvalue3] = useState(true)
    
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
    const setConsolas = () => {
      setvalue(true)
      setvalue2(false)
      setvalue3(false)
      return setProductsFilter(products.filter(tag => tag.tag === 'consolas'))
    }
    const setJuegos = () => {
      setvalue(false)
      setvalue2(true)
      setvalue3(false)
    return setProductsFilter(products.filter(tag => tag.tag === 'juegos'))
    }
    const setTodo = () => {
      setvalue(false)
      setvalue2(false)
      setvalue3(true)
    return setProductsFilter(products)
    }
    
  return (
      <>
        <div className='text-2xl font-bold text-center'>
          <p className='title inline-block mr-4'>Filtros:</p>
          <button className={`mx-6 p-2 rounded-3xl py-1.5 px-5 border-solid border-2 border-black ${value3 ? 'filterActive' : 'filter'}`} onClick={setTodo}>Todo</button>
          <button className={`mx-6 p-2 font-bold rounded-3xl py-1.5 px-5 border-solid border-2 border-black ${value ? 'filterActive' : 'filter'}`} onClick={setConsolas}>Consolas</button>
          <button className={`mx-6 p-2 font-bold rounded-3xl py-1.5 px-5 border-solid border-2 border-black ${value2 ? 'filterActive' : 'filter'}`} onClick={setJuegos}>Juegos</button>
        </div>
        <div className={hiddenSpiner}>
            <SpinerLoading />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {productsFilter.length > 0 ? 
          productsFilter.map( p => <Item key={p.id} p={p} />)
          : products.map( p => <Item key={p.id} p={p} />)}
        </div>
      </>
  )
}

export default ItemList