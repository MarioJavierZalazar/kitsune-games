import NavBar from './components/containers/NavBar'
import ItemListContainer from './components/containers/ItemListContainer'
import './css/base.css'

const usuario = 'Coders'


const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer name={usuario} />
    </>
  );
}

export default App;
