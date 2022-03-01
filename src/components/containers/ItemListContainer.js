import ItemList from './ItemList'

const ItemListContainer = ( {title} ) => {

    return (
        <section className='container mb-5 mx-auto'>
            <h2 className='title uppercase text-5xl m-12 font-bold text-center'>Catálogo</h2>
            <ItemList />
        </section>
    )
}

export default ItemListContainer;
