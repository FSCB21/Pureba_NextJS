import Layout from '../../components/layout'
import { EmpleadoService } from '../../lib/empService'

const serviceEmpleado = new EmpleadoService()

export default function Post({postData}) {
  console.log(postData)
  return <Layout>
      <div>id: {postData.id_empleado}</div>
      <div>nombres: {postData.nombres}</div>
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