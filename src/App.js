import NavBar from './components/containers/NavBar'
import ItemListContainer from './components/containers/ItemListContainer'
import Footer from './components/containers/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/containers/ItemDetailContainer'
import HomeContainer from './components/containers/HomeContainer'

import './css/base.css'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<HomeContainer title={'Inicio'}/>}/>
          <Route path='/productos' element={<ItemListContainer title={'Todos los productos'}/>}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>  
          <Route path='/contacto' element={<ItemListContainer title={'Contacto'}/>}/>
          <Route path='/login' element={<ItemListContainer title={'Login'}/>}/>
          <Route path='/carrito' element={<ItemListContainer title={'Carrito'}/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
