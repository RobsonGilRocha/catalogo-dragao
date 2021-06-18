import { useState } from "react";
import { LoginBox,Loginp,Loginlabel,Logininput,Loginbutton,LoginTitle } from './styled';
import { Row,Separator } from '..';

function Login({setLoginefetuado}) {
  const [inputusuario, setInputusuario] = useState();
  const [inputsenha, setInputsenha] = useState();

      function loginmuda(){
        inputusuario === "admin"  
        &&  inputsenha  === "admin" 
        ?  setLoginefetuado(true)  
        :  setLoginefetuado(false);
      }

  return (
    <Row>
      <Separator/>
      <LoginBox>
        <Loginp/>
        <Row><Separator/><LoginTitle>Catálogo de Dragões</LoginTitle><Separator/></Row>
        <Row ><Separator/><Loginlabel>Usuario</Loginlabel><Logininput type="text" onChange={(usuario) => setInputusuario(usuario.target.value)}/><Separator/><Separator/><Separator/><Separator/><Separator/></Row>
        <Row ><Separator/><Loginlabel>Senha</Loginlabel><Logininput type="text" onChange={(senha) => setInputsenha(senha.target.value)}/><Separator/><Separator/><Separator/><Separator/><Separator/></Row>
          <Row><Separator/><Loginbutton onClick={loginmuda}>Entrar</Loginbutton><Separator/></Row>
          
          
      </LoginBox>
      <Separator/>
    </Row>
  );
}

export default Login;