import { useEffect, useState } from 'react'
import Item from "../utilities/Item"
import { productsCollection } from '../../firebase/firebaseConfig'
import { onSnapshot, query, where } from 'firebase/firestore'

const ItemList = ({ tag }) => {
  //hooks
  // const [hiddenSpiner, setsHiddenSpiner] = useState('block')
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (tag === 'catalogo') {
      onSnapshot(
        productsCollection,
        (snapshot) => {
          const arrProducts = snapshot.docs.map(doc => {
            return { ...doc.data() }
          })
          setProducts(arrProducts);
        }, (error) => { console.log(error) }
      )
    } else {
      setFilter(tag)
    }
  }, [tag]);

  //Funciones
  const setFilter = (filterTag) => {
    const q = query(
      productsCollection,
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
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map(p => <Item key={p.id} p={p} />)}
    </div>
  )
}

export default ItemList