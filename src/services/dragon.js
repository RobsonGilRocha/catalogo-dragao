import api, { endpoints } from './index'


export async function getDragons() {
    const { get } = api
    return get(endpoints.dragon)
}
export async function createDragons({name, type}) { api.post(endpoints.createdragon,name,type)
}
export async function putDragons(id) { api.put(endpoints.updatedragon(id))
}
export async function deleteDragons(id) { api.delete(endpoints.deletedragon(id))
}

/* login   admin admin
Base URL: https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/
[Endpoint: /dragon
Criar dragão: POST, body: name, type
Listar dragões: GET
Editar dragão: PUT, body: name, type, parametros: id (Ex.: ${baseUrl}/dragon/12)
Deletar dragão: DELETE, parametros: id (Ex.: ${baseUrl}/dragon/12)
*/