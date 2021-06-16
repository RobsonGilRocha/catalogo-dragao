import { CatalogoBox, DragaoBox, GridBox } from './styled';
import React,{useEffect, useState } from 'react'
import {getDragons, createDragons,deleteDragons} from '../../services/dragon'
import { Row } from '..';


function Catalogo() {
  const [dragons, setDragons] = useState()
  const [luz, setLuz] = useState(false)
  const [count, setCount] =useState(0)


  let createname = "Alanazador"
  let createtype = "coach"
  let createhistories = "Uma historia suprenente, inovadora, além de mentes e corações destroi emocões e implementa lógica"

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

 async function handleCreateDragon(){
  await createDragons({name:`${createname}`,
  type:`${createtype}`,
  histories:`${createhistories}`}
  ,setLuz(!luz))
 }

  
  console.log(dragons)
  

  return (
      <CatalogoBox>
        <Row>
          <DragaoBox  onClick={deleteALL}>
            botao da morte
          </DragaoBox>
          <DragaoBox  onClick={()=> setLuz(!luz)}>
          {luz  ? `Quantidade de Dragões: ${count} `  : `Quantidade de Dragões: ${count}`}
          </DragaoBox>
          <DragaoBox  onClick={handleCreateDragon}>
            botao cria
          </DragaoBox>
          <DragaoBox  onClick={()=> setLuz(!luz)}> {luz  ? `luz esta ligada `  : `luz esta desligada `} </DragaoBox>
        </Row>
       
  
          

        <h1>CatalogoBox</h1>
        <GridBox>grid
        {dragons && dragons.map(dragons => <DragaoBox>
          <p>Nome do Dragao:"{dragons.name}"</p>
          <p>Tipo:"{dragons.type}"</p>
        <p>Historia:"{dragons.histories}"</p>
        </DragaoBox> )}
          </GridBox>
          
      </CatalogoBox>
  
  );
}

export default Catalogo;