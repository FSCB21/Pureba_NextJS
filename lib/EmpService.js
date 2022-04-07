import axios from "axios";


class EmpleadoService {

    getDataEjemplo = async()=>{
        return {data:[{id_empleado:1,nombres:"Freddy"},{id_empleado:2,nombres:"Ejemplo"}]}
    }

    getAllId = async()=>{
        const response = [{id_empleado:1,nombres:"Freddy"},{id_empleado:2,nombres:"Ejemplo"}]
        
        return response.map(el=>{
            el.id_empleado = `${el.id_empleado}`
            return {
                params:{
                    id: el.id_empleado
                }
            }
        })
    }

    getUserData = async(id)=>{
        if(id==="1")
            return {data:{id_empleado:1,nombres:"Freddy"}}
        else (id==="2")
            return {data:{id_empleado:2,nombres:"Ejemplo"}}
    }

}

export {
    EmpleadoService
}