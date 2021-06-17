import{Login, Catalogo} from './components'
import { useState } from "react";

function App() {
  const [loginefetuado, setLoginefetuado] = useState(false);


 function loginmuda(){
  setLoginefetuado(!loginefetuado)
}


  return (
    <>
     {!loginefetuado ? <Login/>: <Catalogo/>}
     <button onClick={()=> console.log(loginefetuado)}>"O console.log :{loginefetuado}"</button>
     <button onClick={()=> setLoginefetuado(loginefetuado)}>O com set :{loginefetuado}"</button>
     <button onClick={loginmuda}>"O com função"</button>
    </>
  );
}

export default App;
