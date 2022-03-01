import ItemList from './ItemList'

const ItemListContainer = ( {title} ) => {

    return (
        <section className='container mb-5 mx-auto'>
            <h1 className='font-bold text-4xl text-center title my-5'>{title}</h1>
            <ItemList />
        </section>
    )
}

export default ItemListContainer;
