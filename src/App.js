const mensaje = 'Bienvenidos a React !!!'
const styles = {color: 'orange'}

function App() {
  return (
    <>
      <h1>{mensaje}</h1>
      <ul>
        <li style={styles}>React</li>
        <li>JSX</li>
        <li>WebPack</li>
      </ul>
    </>
  );
}

export default App;
