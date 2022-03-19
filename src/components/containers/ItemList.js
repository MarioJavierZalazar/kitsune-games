import { useEffect, useState } from 'react'
import Item from "../utilities/Item"
import SpinerLoading from '../utilities/SpinerLoading'
import db from '../../firebase/firebaseConfig'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const ItemList = ({tag}) => {
  //hooks
  const [hiddenSpiner, setsHiddenSpiner] = useState('block')
  const [products, setProducts] = useState([])

  useEffect(() => {
    switch (tag) {
      case 'consolas': setFilter(tag);
        break;
      case 'juegos': setFilter(tag);
        break;
    
      default:
        onSnapshot(
          collection(db, 'products'),
          (snapshot) => {
            const arrProducts = snapshot.docs.map(doc => {
              return { ...doc.data() }
            })
            setProducts(arrProducts);
          }, (error) => { console.log(error) }
        )

        break;
    }
    setsHiddenSpiner('hidden')
  }, [tag]);

  //Funciones
  const setFilter = (filterTag) => {
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