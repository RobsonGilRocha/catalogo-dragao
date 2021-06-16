import{Login, Catalogo} from './components'

function App() {
 let loginefetuado = true 


  return (
    <>
     {!loginefetuado ? <Login/>: <Catalogo/>}
     
    </>
  );
}

export default App;
