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
  },[dragons?.length])


 async function deleteALL(){
  dragons?.forEach(async (dragon) => {
  await deleteDragons(dragon.id)})
  setLuz(!luz)
 }
  
  console.log(dragons)
  

  return (
      <CatalogoBox>
        <DragaoBox  onClick={deleteALL}>
            botao da morte
          </DragaoBox>
          {luz  ? <DragaoBox>"luz esta ligada"</DragaoBox>: <DragaoBox>"luz esta desligada"</DragaoBox>}
          <DragaoBox>
            {count}
          </DragaoBox>

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