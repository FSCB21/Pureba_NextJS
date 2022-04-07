import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { EmpleadoService } from '../lib/empService'
import utilStyles from '../styles/utils.module.css'

export default function Home({data, ej}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Pagina de prueba</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
        </p>
        {
          
          data.map((el,id)=>{
            return <div key={id}>{el.nombres}</div>
          })
        }

      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const empService = new EmpleadoService()
  const {data} = await empService.getDataEjemplo().then(res=>{
    return res
  })

  return {
    props:{data}
  }
}