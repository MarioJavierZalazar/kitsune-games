import ItemList from './ItemList'

const ItemListContainer = ( {tag} ) => {
    return (
        <section className='container mb-5 mx-auto'>
            <h2 className='title uppercase text-5xl m-12 font-bold text-center'>{tag}</h2>
            <ItemList tag={tag} />
        </section>
    )
}

export default ItemListContainer;
