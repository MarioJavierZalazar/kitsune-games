import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from '../utilities/ItemDetail'
import SpinerLoading from '../utilities/SpinerLoading';
import Error404 from './Error404';
const ItemDetailContainer = () => {
    const [item, setItems] = useState([])
    const [hiddenSpiner, setsHiddenSpiner] = useState('block')
    const [showItems, setShowItems] = useState('hidden')
    const {id} = useParams()
    useEffect( () => {
        setTimeout(getProducts, 2000)
    }, [] )

    const getProducts = () =>{
        const URL = 'https://6214354489fad53b1f0d838c.mockapi.io/Productos'
        
        fetch(URL).then( respuesta => respuesta.json() ).then( json => {
            setItems(json[id-1])
        })
        setShowItems('block')
        setsHiddenSpiner('hidden')
    }
    return (
        <div>
            <div className={hiddenSpiner}>
                <SpinerLoading />
            </div>
            <div className={showItems}>
                {item ?
                    <ItemDetail product={item}/>
                : 
                    <Error404 origin={'product'}/>
                }
            </div>
        </div>
    )
}

export default ItemDetailContainer