import { CatalogoBox, DragaoBox, GridBox } from './styled';
import React,{useEffect, useState } from 'react'
import {getDragons, createDragons,deleteDragons} from '../../services/dragon'
import { Row, Separator } from '..';


function Catalogo() {
  const [dragons, setDragons] = useState()
  const [luz, setLuz] = useState(false)
  const [count, setCount] =useState(0)
  const [inputname, setInputname] = useState();
  const [inputtype, setInputtype] = useState();
  const [inputhistories, setInputhistories] = useState();
  const [inputdeleteid, setInputdeleteid] = useState();



  /* let createname = "EDLagoa"
  let createtype = "aquático"
  let createhistories = `"De boa na lagoa , dragão inteligente que não lava o pé ,porém não tem chule, admirador da Lua Akita"` */

  useEffect(()=>{
    
    async function FetchDragons(){
       const response = await getDragons()
       setDragons(response.data)
       setCount(response.data.length)
    }
    
    FetchDragons()
  },[])


 async function deleteALL(){
  dragons?.forEach(async (dragon) => {
  await deleteDragons(dragon.id)})
  
 }

 function deleteID(){
   deleteDragons(inputdeleteid)
 }
  

 async function handleCreateDragon(){
  await createDragons({
    name:`${inputname}`,
    type:`${inputtype}`,
    histories:`${inputhistories}`
}
  ,setLuz(!luz))
 }

  
  /* console.log(dragons) */
  

  return (
      <CatalogoBox>
        <Row>
          <DragaoBox>{luz  ? `-Quant: Dragões: ${count} `  : `-Quant: Dragões: ${count}`}</DragaoBox>
          <DragaoBox  onClick={()=> setLuz(!luz)}> {luz  ? `-Luz esta ligada `  : `-Luz esta desligada `} </DragaoBox>
        </Row>
        <Row>
          <DragaoBox><h1>CatalogoBox</h1> 
          </DragaoBox>
          <DragaoBox><h1>CriaçãoBox</h1>
          <input type="text" onChange={(event1) => setInputname(event1.target.value)} />
          <input type="text" onChange={(event2) => setInputtype(event2.target.value)} />
          <input type="text" onChange={(event3) => setInputhistories(event3.target.value)} />
          <p/>
          <button  onClick={handleCreateDragon}>-Botao criar:"{inputname}"
          </button>
          </DragaoBox>
          </Row>
          <Row>
          <DragaoBox><h1>-Botao da morte</h1> 
          <button  onClick={deleteALL}>-Botao da morte</button>
          </DragaoBox>
          <DragaoBox><h1>DeleteBox</h1>
          <input type="text" onChange={(eventdelid) => setInputdeleteid(eventdelid.target.value)} />
          <button  onClick={ deleteID}>-DELETAR Dragão ID:{inputdeleteid}</button>
          </DragaoBox>
          </Row>
        <GridBox>
        {dragons && dragons.map(dragons => <Row column='column'><DragaoBox>
        <p> -Nome do Dragao:"{dragons.name}"</p>
        <p> -Tipo:"{dragons.type}"</p>
        <p> -Historia:"{dragons.histories}"</p>
        <p> -Data: DRAGÃO:"{dragons.createdAt}"-ID:"{dragons.id}"</p>

        

        </DragaoBox><Separator /></Row> )}
        {count? <h1>"Essa é a Lista de Drãgões, quantidade total é de: {count} !"</h1>:<h1>"Não a Dragões nesta Lista"</h1>}
          </GridBox>
          
      </CatalogoBox>
  
  );
}

export default Catalogo;