import{Login, Catalogo} from './components'
import { useState } from "react";

function App() {
  const [loginefetuado, setLoginefetuado] = useState(false);
  const [logindev, setLogindev] = useState(false);
  
  return (
    <>
     {
     !loginefetuado 
     ? 
     <Login setLoginefetuado={setLoginefetuado} setLogindev={setLogindev} logindev={logindev}/>
     : 
     <><Catalogo setLoginefetuado={setLoginefetuado} setLogindev={setLogindev}  logindev={logindev}  />
     </>
     }
    </>
  );
}

export default App;
