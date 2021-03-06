import { useState } from "react";
import { LoginBox,Loginp,Logininput,Loginbutton,LoginTitle } from './styled';
import { Row,Separator, Line } from '..';

function Login({setLoginefetuado,setLogindev}) {
  const [inputusuario, setInputusuario] = useState();
  const [inputsenha, setInputsenha] = useState();

      function loginmuda(){
        if(inputusuario === "dev"  &&  inputsenha  === "dev"){
          setLogindev(true)
          setLoginefetuado(true)
          window.alert("Login DEV efetuado com sucesso")
        } else if(inputusuario === "admin"  &&  inputsenha  === "admin"){
          setLoginefetuado(true)
          setLogindev(false)
          window.alert("Login efetuado com sucesso")
        }  else if(inputusuario === "admin"  ||  inputusuario  === "dev"){
          setLogindev(false)
          setLoginefetuado(false)
          window.alert("Erro ao Logar: senha incorreta")
        } else {
          setLogindev(false)
          setLoginefetuado(false)
          window.alert("Erro ao Logar: senha e usuario incorretos")
        }
          setInputusuario("")
          setInputsenha("")
      }

  return (
    <Row>
      <Separator/>
      <Row column="column">
      <LoginBox>
        <Loginp/>
        <Row><Separator/><LoginTitle>Catálogo de Dragões</LoginTitle><Separator/></Row>
        <Row ><Separator x="60"/><Logininput value={inputusuario} type="text" placeholder="Digite seu usuário" onChange={(usuario) => setInputusuario(usuario.target.value)}/><Separator x="60"/></Row>
        <Row ><Separator x="60"/><Logininput value={inputsenha} type="password" placeholder="Digite sua Senha" onChange={(senha) => setInputsenha(senha.target.value)}/><Separator x="60"/></Row>
        <Row><Separator/><Loginbutton onClick={loginmuda}>Entrar</Loginbutton><Separator/></Row>
        <Row><Separator/><LoginTitle>Tente :admin, admin</LoginTitle><Separator/></Row>
          
      </LoginBox>
      <LoginBox><Row column="column">
      <Line/>
  <Loginp/><LoginTitle>Robson Gil Rocha</LoginTitle>
<LoginTitle>gil1990gil@hotmail.com</LoginTitle><Loginp/>
<Line/></Row></LoginBox></Row>
      <Separator/>
    </Row>
      
  );
}

export default Login;
