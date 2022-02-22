import NavBar from './components/containers/NavBar'
import ItemListContainer from './components/containers/ItemListContainer'
import Footer from './components/containers/Footer'
import './css/base.css'


const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default App;
