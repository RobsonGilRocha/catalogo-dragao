import styled from 'styled-components';

export const CatalogoBox = styled.div` 
background-color:black;
border-radius: 3px;
border-style: solid;
border-color: gray;
padding: 1%;
height: 97%;
width: 97%;
margin: 1%;
font-size: 100%;
color: white;
background: url('./resource/image/logo512.png') center right no-repeat;
`
export const CatalogoTitle = styled.h1` 
height: 100%;
width: 100%;
min-height: 30px;
min-width: 200px;
font-size: 300%;
color:white;
text-align: center;
align-items: center;
align-self:center;
align-content:center;
:hover{
    color:gray;
    font-size: 330%;
    font-weight: 700;
}
`
export const CatalogoSubTitle = styled.h1` 
height: 100%;
width: 100%;
min-height: 30px;
min-width: 200px;
font-size: 200%;
color:white;
text-align: center;
align-items: center;
align-self:center;
align-content:center;
background: url('./resource/image/logo512.png') center right no-repeat;
:hover{
    color:gray;
    font-size: 230%;
    font-weight: 700;
}
`
export const Catalogobutton = styled.button` 
background-color:gray;
border-radius: 7%;
height: 30%;
width: 30%;
max-height: 50px;
max-width: 100px;
font-size: 100%;
text-align: center;
color:white;
:hover{
        font-size: 130%;
        font-weight: 700;
}
`

export const DEVbutton = styled.button` 
background-color:gray;
border-radius: 7%;
height: 30%;
width: 100%;
max-height: 50px;
max-width: 100px;
font-size: 100%;
align-self: center;
align-content: center;
color:white;
:hover{
        font-size: 130%;
        font-weight: 700;
        color: goldenrod;
}
`
export const GridBox = styled.div`

border-radius: 3%;
height: 100%;
width: 100%;
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
    position: fixed;
    bottom: 5%;
    right: 3%;
    margin: 3%;
    z-index:2;
    cursor: pointer;
    height: 30px;
    width: 30px;

    :hover{
    border-radius: 50%;
    border-style: solid;
    border-color: blue;
    background-color: black;
    z-index:3;
    cursor: pointer;
    color: black;
    }
    `
export const NavBotBox = styled.button`

    border-radius: 100%;
    border-style: solid;
    border-color: gray;
    background-color: gray;
    position: fixed;
    bottom: 0%;
    right: 3%;
    margin: 3%;
    z-index:2;
    cursor: pointer;
    height: 30px;
    width: 30px;

    :hover{
    border-radius: 50%;
    border-style: solid;
    border-color: blue;
    background-color: black;
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
border-style: solid;
border-radius: 7%;
margin: 3%;

`

export const Catalogoinput = styled.input` 
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