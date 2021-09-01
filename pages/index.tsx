import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'


import {CatHombre, CatMujer, CatInfantil, Categorias} from '../components/categories/category'
const mainPage = (
  <>
    <div className="mb-5">
      <div className="card shadow-2xl image-full mt-2">
        <figure>
          <img src="https://picsum.photos/id/401/400" alt="header photo" />
        </figure>
        <div className="justify-end card-body">
          <h2 className="card-title">Bienvenidos!</h2>
          <p>Aqui podeis encontrar todas nuestras novedades.</p>
        </div>
      </div>
    </div>
    <div className="card  shadow mb-5">
      <div className="card-body">
        <h2 className="card-title">¿No sabe qué regalar?</h2>
        <p>Te ayudamos! queremos ayudarte a crear memorias inolvidables para esa ocasión especial.</p>
        {/* <button className="btn btn-primary">Contactar</button> */}
      </div>
    </div>
    <div className="mb-5">
      <div className="card shadow-2xl">
        <div className="w-full carousel carousel-center">
          <div className="carousel-item">
            <img className="" src="https://picsum.photos/id/401/400" alt="stock photo" />
          </div>
          <div className="carousel-item">
            <img className="" src="https://picsum.photos/id/402/400" alt="stock photo" />
          </div>
          <div className="carousel-item">
            <img className="" src="https://picsum.photos/id/403/400" alt="stock photo" />
          </div>
          <div className="carousel-item">
            <img className="" src="https://picsum.photos/id/404/400" alt="stock photo" />
          </div>
        </div>

      </div>
    </div>

  </>
)



export default function Home({categorias}:any) {
  return (
    <>
      <Head>
        <title>Lissa accesorios</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="descripcion" content="Lissa accesorios" />
      </Head>
      {/* promo goes here */}

      {/* main layout */}
      <Layout page={mainPage} categorias={categorias}/>

    </>

  )
} 

export const getStaticProps: GetStaticProps = async () => {
  
  
  const categorias = {
    catHombre : Object(CatHombre),
    catMujer : Object(CatMujer),
    catInfantil : Object(CatInfantil)
  } as Categorias


  return {
    props: {
      categorias
    }
  }
}

