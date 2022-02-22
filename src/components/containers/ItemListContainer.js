import React from 'react'
import ItemList from './ItemList';
import '../../css/main.css'

const ItemListContainer = () => {

    return (
        <section className='container'>
            <h1 className='font-bold text-4xl title'>Lista de productos</h1>
            <ItemList />
        </section>
    )
}

export default ItemListContainer;
