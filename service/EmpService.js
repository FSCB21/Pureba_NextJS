import axios from "axios";

const API = 'http://192.168.0.54:3003/prueba/data'

export class EmpleadoService {

    getDataEjemplo = async()=>{
        return await axios.get(`${API}`).then(res=>res.data)
    }

    getAllId = async()=>{
        const response = await axios.get(`${API}`).then(res=>res.data)
        
        return response.data.map(el=>{
            el.id_empleado = `${el.id_empleado}`
            return {
                params:{
                    id: el.id_empleado
                }
            }
        })
    }

    getUserData = async(id)=>{
        return await axios.get(`${API}/${id}`).then(res=>res.data)
    }

}
