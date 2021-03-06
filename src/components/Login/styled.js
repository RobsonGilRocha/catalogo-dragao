import styled from 'styled-components';

export const LoginBox = styled.div`
background-color:black;
border-radius: 7%;
border-style: solid;
border-color: gray;
padding: 1%;
height: 40%;
width: 40%;
min-height: 150px;
min-width: 300px;
margin: 3%;
font-size: 100%;
margin-top: 10%;
font-family: 'Roboto';
`
export const LoginTitle = styled.label`
height: 30%;
width: 30%;
min-height: 30px;
min-width: 200px;
font-size: 130%;
color:white;
text-align: center;
font-family: 'Roboto';
`
export const Loginbutton = styled.button`
background-color:gray;
border-radius: 7%;
height: 30%;
width: 30%;
font-size: 100%;
text-align: center;
color:white;
font-family: 'Roboto';
margin: 10px;
:hover{
        font-size: 130%;
        font-weight: 700;
        color: goldenrod;
}
`
export const Loginp = styled.p`
height: 100%;
width: 100%;
font-size: 100%;
font-family: 'Roboto';
`
export const Logininput = styled.input`
background-color:whites;
border-radius: 7%;
border-style: solid;
border-color: gray;
height: 30%;
width: 50%;
min-height: 30px;
min-width: 50px;
font-family: 'Roboto';

:hover{
    background-color:whitesmoke;
    font-size: 110%;
    border-radius: 9%;
    font-family: 'Roboto';
}
`