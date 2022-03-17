import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from '../utilities/ItemDetail'
import SpinerLoading from '../utilities/SpinerLoading';
import Error404 from './Error404';
import db from '../../firebase/firebaseConfig'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [hiddenSpiner, setsHiddenSpiner] = useState('block')
    const [showItems, setShowItems] = useState('hidden')
    const { id } = useParams()
    useEffect(() => {
        const q = query(
            collection(db, 'products'),
            where('id', '==', id)
            );
        onSnapshot(q,
            (snapshot) => {
                const arrProducts = snapshot.docs.map(doc => {
                    return {...doc.data()}
                })
                setProducts(arrProducts[0]);
            }, (error) => {console.log(error)})
             
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