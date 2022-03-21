import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from '../utilities/ItemDetail'
import Error404 from './Error404';
import {productsCollection} from '../../firebase/firebaseConfig'
import { doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [showItems, setShowItems] = useState('hidden')
    const { id } = useParams()
    useEffect(() => {
        const productSerch = doc(productsCollection, `${id}`)
        const productSelected = getDoc(productSerch)

        productSelected.then(r => setProducts(r.data()))
             
        setShowItems('block')
    }, [id])
    return (
        <div>
            <div className={showItems}>
                {products ?
                    <ItemDetail product={products} />
                    :
                    <Error404 origin={'product'} />
                }
            </div>
        </div>
    )
}

export default ItemDetailContainer