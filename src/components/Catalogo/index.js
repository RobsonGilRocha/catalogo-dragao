import { CatalogoBox, DragaoBox, GridBox } from './styled';
import React,{useEffect, useState } from 'react'
import {getDragons, createDragons,deleteDragons,putDragons} from '../../services/dragon'
import { Row, Separator } from '..';


function Catalogo() {
  const [dragons, setDragons] = useState()
  const [luz, setLuz] = useState(false)
  const [count, setCount] =useState(0)
  const [inputname, setInputname] = useState();
  const [inputtype, setInputtype] = useState();
  const [inputhistories, setInputhistories] = useState();
  const [inputnameput, setInputnameput] = useState();
  const [inputtypeput, setInputtypeput] = useState();
  const [inputhistoriesput, setInputhistoriesput] = useState();
  const [inputdeleteid, setInputdeleteid] = useState();
  const [inputputid, setInputputid] = useState();

  useEffect(()=>{
    async function FetchDragons(){
       const response = await getDragons()
       setDragons(response.data)
       setCount(response.data.length)
    }
    
    FetchDragons()
  },[])

 function deleteALLBEST(){
  dragons?.forEach(async (dragon) => {
    setTimeout(() => {
      deleteDragons(dragon.id);
    }, 2000);
  })}

 function deleteID(){
   deleteDragons(inputdeleteid)
 }

 function updateID(){
  putDragons(inputputid,{
    name:inputnameput,
    type:inputtypeput,
    histories:inputhistoriesput
},setLuz(!luz))
}

 async function handleCreateDragon(){
  await createDragons({
    name:`${inputname}`,
    type:`${inputtype}`,
    histories:`${inputhistories}`
}
  ,setLuz(!luz))
 }

  return (
      <CatalogoBox><Row><Separator/><DragaoBox><h1>CatalogoBox</h1></DragaoBox><Separator/></Row>

          <Row><Separator/>
            <Row column='column'>
              <DragaoBox><h1>CriaçãoBox</h1>
              <input type="text" onChange={(event1) => setInputname(event1.target.value)} />
              <input type="text" onChange={(event2) => setInputtype(event2.target.value)} />
              <input type="text" onChange={(event3) => setInputhistories(event3.target.value)} />
              <p/>
              <button  onClick={handleCreateDragon}>-Botao criar:"{inputname}"
              </button>
              </DragaoBox>
              <DragaoBox><h1>UPTADEBox</h1>
              <label>ID para edição</label><input type="text" onChange={(eventputid) => setInputputid(eventputid.target.value)} />
              <p/><label>nome</label><input type="text" onChange={(eventputname) => setInputnameput(eventputname.target.value)} />
              <p/><label>tipo</label><input type="text" onChange={(eventputtype) => setInputtypeput(eventputtype.target.value)} />
              <p/><label>histories</label><input type="text" onChange={(eventputhistories) => setInputhistoriesput(eventputhistories.target.value)} />
              <button  onClick={ updateID}>-UPDATE Dragão ID:{inputputid}</button>
              </DragaoBox>
            </Row>
            <Row column='column'>
              <DragaoBox>{luz  ? `-Quant: Dragões: ${count} `  : `-Quant: Dragões: ${count}`}</DragaoBox>
              <DragaoBox  onClick={()=> setLuz(!luz)}> {luz  ? `-Luz esta ligada `  : `-Luz esta desligada `} </DragaoBox>
              <DragaoBox><h1>deleteALLBEST</h1> 
              <button  onClick={deleteALLBEST}>deleteALLBEST</button>
              </DragaoBox>
              <DragaoBox><h1>DeleteBox</h1>
              <input type="text" onChange={(eventdelid) => setInputdeleteid(eventdelid.target.value)} />
              <button  onClick={ deleteID}>-DELETAR Dragão ID:{inputdeleteid}</button>
              </DragaoBox>
           </Row>
           <Separator/></Row>
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