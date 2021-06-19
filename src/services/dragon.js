import api, { endpoints } from './index'


export async function getDragons() {
    const { get } = api
    return get(endpoints.dragon)
}
export async function createDragons({name, type,histories}) { api.post(endpoints.createdragon,{name,type,histories})
}
export async function putDragons(id,{name, type,histories}) { api.put(endpoints.updatedragon(id),{name, type,histories})
}
export async function deleteDragons(id) { api.delete(endpoints.deletedragon(id))
}

