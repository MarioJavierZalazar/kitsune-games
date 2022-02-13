import React from 'react'
import '../../css/main.css'

const ItemListContainer = ({name}) => {
    return (
        <main className='container'>
            <h1 className='font-bold text-4xl title'>¡Bienvenido {name}!</h1>
        </main>
    )
}

export default ItemListContainer;
