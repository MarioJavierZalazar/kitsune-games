import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from '../utilities/ItemDetail'
import SpinerLoading from '../utilities/SpinerLoading';
import Error404 from './Error404';
import db from '../../firebase/firebaseConfig'
import { doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [hiddenSpiner, setsHiddenSpiner] = useState('block')
    const [showItems, setShowItems] = useState('hidden')
    const { id } = useParams()
    useEffect(() => {
        const docRef = doc(db, 'products', `${id}`)
        const docSnap = getDoc(docRef)

        docSnap.then(r => setProducts(r.data()))
             
        setShowItems('block')
        setsHiddenSpiner('hidden')
    }, [id])
    return (
        <div>
            <div className={hiddenSpiner}>
                <SpinerLoading />
            </div>
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