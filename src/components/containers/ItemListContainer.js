import ItemList from './ItemList';

const ItemListContainer = () => {

    return (
        <section className='container mb-5 mx-auto'>
            <h1 className='font-bold text-4xl text-center title my-5'>Lista de productos</h1>
            <ItemList />
        </section>
    )
}

export default ItemListContainer;
