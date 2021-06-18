
import React,{useEffect, useState } from 'react'
import { getDragons, createDragons, deleteDragons, putDragons} from '../../services/dragon' 
import { Row, Separator } from '..';
import { CatalogoBox, CatalogoTitle, CatalogoSubTitle, Catalogobutton,
   DragaoBox, GridBox, Catalogolabel,Catalogoinput,
    NavTopBox,NavBotBox } from './styled';

function Catalogo({setLoginefetuado}) {
  const [dragons, setDragons] = useState()
  const [optionbar, setOptionbar] = useState(0)
  const [count, setCount] =useState(0)
  const [Catalogoinputname, setCatalogoinputname] = useState();
  const [Catalogoinputtype, setCatalogoinputtype] = useState();
  const [Catalogoinputhistories, setCatalogoinputhistories] = useState();
  const [Catalogoinputdeleteid, setCatalogoinputdeleteid] = useState();
  const [Catalogoinputnameput, setCatalogoinputnameput] = useState();
  const [Catalogoinputtypeput, setCatalogoinputtypeput] = useState();
  const [Catalogoinputhistoriesput, setCatalogoinputhistoriesput] = useState();
  const [Catalogoinputputid, setCatalogoinputputid] = useState();

  
  useEffect(()=>{
    async function FetchDragons(){
       const response = await getDragons()
       setDragons(response.data)
       setCount(response.data.length)
    }
    FetchDragons()
  },[])
 
 function criarOption(){
  optionbar === 1? setOptionbar(0): setOptionbar(1)
 /*  alert("criarOption, optionbar mudou para 1 boleano 0") */
}
async function handleCreateDragon(){
  await createDragons({
    name:`${Catalogoinputname}`,
    type:`${Catalogoinputtype}`,
    histories:`${Catalogoinputhistories}`
  })
}

function delOption(){
  optionbar === 2? setOptionbar(0): setOptionbar(2)
 /*  alert("delOption, optionbar mudou para 2 boleano 0") */
}
function deleteID(){
  deleteDragons(Catalogoinputdeleteid)
}

function putOption(){
  optionbar === 3? setOptionbar(0): setOptionbar(3)
 /*  alert("putOption, optionbar mudou para 3 boleano 0") */
}
function updateID(){
  putDragons(Catalogoinputputid,{
    name:Catalogoinputnameput,
    type:Catalogoinputtypeput,
    histories:Catalogoinputhistoriesput
  })
} 

function devOption(){
  optionbar === 4? setOptionbar(0): setOptionbar(4)
/*   alert("devOption, optionbar mudou para 0 boleano 4") */
}
function deleteALLBEST(){
  dragons?.forEach( (dragon) => {
    setTimeout(() => {
      deleteDragons(dragon.id);
    }, 2000);
  }, alert("cudado aperte novamente"))
}


 function topOn() {
   /* const [toggle, setToggle] = useState(false)
    setToggle( window.pageYOffset > 300 ? true : false)
 */
/* { toggle 
            ?
            <NavTopBox onClick={()=>topOn()}/>
            : 
            <NavTopBox onClick={()=>topOn()}/>
            }
         */

  window.scroll({
      top: 0,
      behavior: 'smooth'

  })
}
function botOn() {
  /* const [toggle, setToggle] = useState(false)
   setToggle( window.pageYOffset > 300 ? true : false)
*/
/* { toggle 
           ?
           <NavTopBox onClick={()=>topOn()}/>
           : 
           <NavTopBox onClick={()=>topOn()}/>
           }
        */

 window.scroll({
     top: 10000,
     behavior: 'smooth'

 })
}
/* ,alert(` Foi registrado ${Catalogoinputname}`), 
  setOptionbar(0) */


 
let optBarPst =[
<CatalogoTitle>Catálogo de Dragões</CatalogoTitle>,
<DragaoBox><CatalogoSubTitle>Registre:</CatalogoSubTitle>
<Row column="column">
<Catalogoinput type="text" placeholder="Digite o Nome do Dragão" onChange={(event1) => setCatalogoinputname(event1.target.value)} />
              <Catalogoinput type="text" placeholder="Digite o Tipo do Dragão" onChange={(event2) => setCatalogoinputtype(event2.target.value)} />
              <Catalogoinput type="text" placeholder="Digite a Historia do Dragão" onChange={(event3) => setCatalogoinputhistories(event3.target.value)} />
              <p/>
</Row>
              
              <Row><Separator/><Catalogobutton  onClick={handleCreateDragon}>Criar</Catalogobutton><Separator/></Row>
              <p/></DragaoBox>,
<DragaoBox><CatalogoSubTitle>Delete com o ID</CatalogoSubTitle>
<Row column="column">
  <Catalogoinput type="text" placeholder="Digite o ID do Dragão"onChange={(eventdelid) => setCatalogoinputdeleteid(eventdelid.target.value)} />
              <Catalogobutton  onClick={ deleteID}>DELETAR</Catalogobutton><p/><label>Dragão ID:{Catalogoinputdeleteid}</label>
              <p/></Row>
              
              </DragaoBox>,
<DragaoBox><CatalogoSubTitle>Edite com o ID</CatalogoSubTitle>

<Row column="column">
  <Catalogoinput type="text" placeholder="ID para edição" onChange={(eventputid) => setCatalogoinputputid(eventputid.target.value)} />
  <Catalogoinput type="text" placeholder="Digite o Nome do Dragão" onChange={(eventputname) => setCatalogoinputnameput(eventputname.target.value)} />
  <Catalogoinput type="text" placeholder="Digite o Tipo do Dragão" onChange={(eventputtype) => setCatalogoinputtypeput(eventputtype.target.value)} />
  <Catalogoinput type="text" placeholder="Digite a Historia do Dragão" onChange={(eventputhistories) => setCatalogoinputhistoriesput(eventputhistories.target.value)} />
  <Catalogobutton  onClick={ updateID}>Editar</Catalogobutton>
  <p/>
              </Row>
              </DragaoBox>,
<DragaoBox><CatalogoSubTitle>deleteALLBEST</CatalogoSubTitle> 
              <Catalogobutton  onClick={deleteALLBEST}>deleteALLBEST</Catalogobutton>
              </DragaoBox> 
]

function botaoSair(){
  setLoginefetuado(false)
}
  return (
    <>
      <CatalogoBox>
        <Row><Separator/>
        <Catalogobutton  onClick={criarOption}>Registrar</Catalogobutton><Separator/>
        <Catalogobutton  onClick={delOption}>Retirar</Catalogobutton><Separator/>
        <Catalogobutton  onClick={putOption}>Editar</Catalogobutton><Separator/>
        <Catalogobutton  onClick={devOption}>DEV</Catalogobutton><Separator/>
        <Separator/><Separator/><Separator/><Separator/><Separator/><Separator/>
        <Catalogobutton  onClick={botaoSair}>SAIR</Catalogobutton><Separator/></Row>
        <Row><Separator/>{optBarPst[optionbar]}<Separator/></Row>

        <GridBox>
          {dragons && dragons.map(dragons => <Row column='column'><DragaoBox>
          <p> -Nome do Dragao:"{dragons.name}"</p>
          <p> -Tipo:"{dragons.type}"</p>
          <p> -Historia:"{dragons.histories}"</p>
          <p> -Data: DRAGÃO:"{dragons.createdAt}"-ID:"{dragons.id}"</p>
          </DragaoBox><Separator /></Row> )}
            {count
            ? 
            <Catalogolabel>"Essa é a Lista de Drãgões; total de: "{count}""</Catalogolabel>
            :
            <Catalogolabel>"Procurando Dragões OU Não a Dragões nesta Lista"</Catalogolabel>
            }
        </GridBox>
          
      </CatalogoBox>
      <NavBotBox onClick={()=>botOn()}/>
      <NavTopBox onClick={()=>topOn()}/>
    </>
  );
}

export default Catalogo;