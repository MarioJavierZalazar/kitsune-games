import NavBar from './components/containers/NavBar'
import ItemListContainer from './components/containers/ItemListContainer'
import Footer from './components/containers/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/containers/ItemDetailContainer'
import HomeContainer from './components/containers/HomeContainer'

import './css/base.css'
import ContactoContainer from './components/containers/ContactoContainer'
import LoginContainer from './components/containers/LoginContainer'
import CarritoContainer from './components/containers/CarritoContainer'
import Error404 from './components/containers/Error404'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path='*' element={<Error404/>}/>
          <Route path='/' element={<HomeContainer/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>  
          <Route path='/contacto' element={<ContactoContainer/>}/>
          <Route path='/login' element={<LoginContainer/>}/>
          <Route path='/carrito' element={<CarritoContainer/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
