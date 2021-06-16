import { CatalogoBox, DragaoBox, GridBox } from './styled';
import React,{useEffect, useState } from 'react'
import {getDragons, createDragons,deleteDragons} from '../../services/dragon'


function Catalogo() {
  const [dragons, setDragons] = useState()
  const [luz, setLuz] = useState(false)
  const [count, setCount] =useState(0)

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
  await createDragons({name:"Supremo",type:"Elemental",histories:"Uma Historia muito longa para estar aqui nesta div..."})
 }

  
  console.log(dragons)
  

  return (
      <CatalogoBox>
        <DragaoBox  onClick={deleteALL}>
            botao da morte
          </DragaoBox>
          <DragaoBox  onClick={()=> setLuz(!luz)}>
            botao Atualiza
          </DragaoBox>
          <DragaoBox  onClick={handleCreateDragon}>
            botao cria
          </DragaoBox>
          <DragaoBox> {luz  ? `luz esta ligada ${count}`  : `luz esta desligada ${count}`} </DragaoBox>
  
          

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