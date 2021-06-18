import{Login, Catalogo} from './components'
import { useState } from "react";

function App() {
  const [loginefetuado, setLoginefetuado] = useState(false);
  
  return (
    <>
     {!loginefetuado ? <Login loginefetuado={loginefetuado}/>: <Catalogo loginefetuado={loginefetuado}/>}
     <button onClick={()=> console.log(loginefetuado)}>"O console.log :{loginefetuado}"</button>
     <button onClick={()=> setLoginefetuado(!loginefetuado)}>O com set :{loginefetuado}"</button>
     <button onClick={()=> console.log("1234")}>"O com função"</button>
    </>
  );
}

export default App;
