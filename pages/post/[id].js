import Layout from '../../components/layout'
import { EmpleadoService } from '../../service/empService'

const serviceEmpleado = new EmpleadoService()

export default function Post({postData}) {
  return <Layout>
      <div>Nombres: {postData.nombres}</div>
      <div>Nombres: {postData.apellidos}</div>
      <div>Nombres: {postData.fecha_ingreso}</div>
    </Layout>
}

export async function getStaticPaths() {
    const paths = await serviceEmpleado.getAllId()
    return {
        paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const {data} = await serviceEmpleado.getUserData(params.id)
    return {
      props: {
        postData:data
      }
    }
  }