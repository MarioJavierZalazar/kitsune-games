import NavBar from './components/containers/NavBar'
import ItemListContainer from './components/containers/ItemListContainer'
import Footer from './components/containers/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/containers/ItemDetailContainer'
import HomeContainer from './components/containers/HomeContainer'
import './css/base.css'
import CarritoContainer from './components/containers/CarritoContainer'
import Error404 from './components/containers/Error404'
import OrdenDeCompra from './components/utilities/OrdenDeCompra'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path='*' element={<Error404/>}/>
          <Route path='/' element={<HomeContainer/>}/>
          <Route path='/productos' element={<ItemListContainer tag='catalogo' />}/>
          <Route path='/consolas' element={<ItemListContainer tag='consolas'/>}/>
          <Route path='/juegos' element={<ItemListContainer tag='juegos'/>}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<CarritoContainer/>}/>
          <Route path='/carrito/finalizarOrden' element={<OrdenDeCompra/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
