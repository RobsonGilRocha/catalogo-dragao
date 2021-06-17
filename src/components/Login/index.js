import { useState } from "react";
import { LoginBox,Loginp,Loginlabel,Logininput,Loginbutton } from './styled';
import { Row,Separator } from '..';

function Login() {
  const [inputusuario, setInputusuario] = useState();
  const [inputsenha, setInputsenha] = useState();


  

  /* setInputusuario
  loginmuda
  setInputsenha */

  return (
    <Row>
      <Separator/>
      <LoginBox>
        <Loginp/>
        <Row>
          <Separator/>
          <Row column="column">
            <Loginlabel>LoginBox</Loginlabel>
            <Loginp/>
            <Row justifyContent="justifyContent">
          <Row column="column" >
          <Loginlabel>Usuario</Loginlabel>
          <Loginlabel>Senha</Loginlabel>
          </Row>
          <Row column="column" >
          <Logininput type="text" onChange={(usuario) => setInputusuario(usuario.target.value)}/>
          <Logininput type="text" onChange={(senha) => setInputsenha(senha.target.value)}/>
          </Row>
        </Row>
        <Loginp/>
          <Loginbutton onClick={console.log("botao entrar")}>Entrar</Loginbutton>
          {/* () => console.log(`essa é o input do login:${inputusuario} e ${inputsenha}`) */}
          </Row>
          <Separator/>
        </Row>
      </LoginBox>
      <Separator/>
    </Row>
  
  );
}

export default Login;