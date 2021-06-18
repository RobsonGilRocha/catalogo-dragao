import{Login, Catalogo} from './components'
import { useState } from "react";

function App() {
  const [loginefetuado, setLoginefetuado] = useState(true);
  
  return (
    <>
     {
     !loginefetuado 
     ? 
     <Login setLoginefetuado={setLoginefetuado}/>
     : 
     <><Catalogo setLoginefetuado={setLoginefetuado} loginefetuado={loginefetuado} />
     </>
     }
    </>
  );
}

export default App;
