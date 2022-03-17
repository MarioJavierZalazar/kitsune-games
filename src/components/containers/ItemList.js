import { useEffect, useState } from 'react'
import Item from "../utilities/Item"
import SpinerLoading from '../utilities/SpinerLoading'
import db from '../../firebase/firebaseConfig'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const ItemList = () => {
  const [hiddenSpiner, setsHiddenSpiner] = useState('block')
  const [products, setProducts] = useState([])

  useEffect(() => {
    onSnapshot(
      collection(db, 'products'),
      (snapshot) => {
        const arrProducts = snapshot.docs.map(doc => {
          return { ...doc.data() }
        })
        setProducts(arrProducts);
      }, (error) => { console.log(error) }
    )
    setsHiddenSpiner('hidden')
  }, []);

  const setFilter = (e) => {
    let filterTag = e.target.value
    const q = query(
      collection(db, 'products'),
      where('tag', '==', filterTag)
    );
    onSnapshot(q,
      (snapshot) => {
        const arrProducts = snapshot.docs.map(doc => {
          return { ...doc.data() }
        })
        setProducts(arrProducts);
      }, (error) => { console.log(error) })
  }

  return (
    <>
      <div className='text-2xl font-bold text-center'>
        <p className='title inline-block mr-4'>Filtros:</p>
        <button value='consolas' className={`mx-6 p-2 font-bold rounded-3xl py-1.5 px-5 border-solid border-2 border-black`} onClick={setFilter}>Consolas</button>
        <button value='juegos' className={`mx-6 p-2 font-bold rounded-3xl py-1.5 px-5 border-solid border-2 border-black`} onClick={setFilter}>Juegos</button>
      </div>
      <div className={hiddenSpiner}>
        <SpinerLoading />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map(p => <Item key={p.id} p={p} />)}
      </div>
    </>
  )
}

export default ItemList