import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
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
