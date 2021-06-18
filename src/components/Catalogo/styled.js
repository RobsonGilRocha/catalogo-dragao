import styled from 'styled-components';

export const CatalogoBox = styled.div` //sim
background-color:black;
border-radius: 3%;
border-style: solid;
border-color: gray;
padding: 1%;
height: 97%;
width: 97%;
/* min-height: 150px;
min-width: 300px; */
margin: 1%;
font-size: 100%;
color: white;
background: url('./resource/image/logo512.png') center right no-repeat;
`
export const CatalogoTitle = styled.h1` //sim
height: 30%;
width: 30%;
min-height: 30px;
min-width: 200px;
font-size: 200%;
color:white;
text-align: center;
background: url('./resource/image/logo512.png') center right no-repeat;
`
export const Catalogobutton = styled.button` //sim
background-color:gray;
border-radius: 7%;
height: 30%;
width: 30%;
max-height: 50px;
max-width: 100px;
font-size: 100%;
text-align: center;
color:white;
`

export const GridBox = styled.div`//sim
background-color:gray;
border-radius: 3%;
height: 100%;
width: 100%;
/* max-height: 50px;
max-width: 100px; */
background: url('./resource/image/logo512.png') center right no-repeat;
`

export const Catalogolabel = styled.label`
height: 30%;
width: 30%;
min-height: 30px;
min-width: 30px;
font-size: 100%;
color:white;
text-align: end;
`

export const NavTopBox = styled.button`

    border-radius: 100%;
    border-style: solid;
    border-color: gray;
    background-color: gray;
    height: 20px;
    width: 5px;
    position: fixed;
    bottom: 3%;
    right: 3%;
    margin: 3%;
    z-index:2;
    cursor: pointer;
    color:gray;
    :hover{
        border-radius: 50%;
    border-style: solid;
    border-color: blue;
    background-color: black;
    height: 8%;
    width: 5%;
    position: fixed;
    bottom: 2%;
    right: 3%;
    margin: 2%;
    z-index:3;
    cursor: pointer;
    color: black;
    }
    `

export const DragaoBox = styled.div`
height: 100%;
width: 100%;
max-height: 400px;
max-width: 400px;
//align-items: center;
//align-self: center;
border-style: solid;
border-style: solid;
border-radius: 1%;
margin: 3%;
`



export const Logininput = styled.input`
background-color:white;
border-radius: 7%;
border-style: solid;
border-color: gray;
height: 30%;
width: 50%;
min-height: 30px;
min-width: 50px;
font-size: 100%;
`