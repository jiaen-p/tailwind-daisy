import { ReactNode } from 'react'
import { Categorias } from './categories/category'
import Link from 'next/link'
type Props = {
  page: ReactNode,
  categorias:Categorias
}

const Layout = ({page, categorias}:Props) => {
  return(
    <>
      <div className="drawer drawer-mobile min-h-screen">
        <input type="checkbox" id="nav-menu" className="drawer-toggle" />
        <main className="flex-grow block overflow-x-hidden drawer-content">
          {/* navbar */}
          <nav id="nav" className="inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out sticky border-b border-base-200 text-base-content bg-neutral-content shadow-lg">
            <div className="navbar max-w-none">
              
              {/* mobile menu icon */}
              <div className="navbar-start md:hidden">
                <label htmlFor="nav-menu" className="btn btn-square btn-ghost drawer-button lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </label>
              </div>

              {/* tittle name */}
              <div className="navbar-center">
                <span className="text-lg font-bold">
                  Lissa Accesorios
                </span>
              </div>

              {/* end div */}
              <div className="navbar-end">

              </div>
            </div>
          </nav>
          {/* content goes here */}
          <div className="m-4">
            {page}
          </div>
        </main>

        {/* mobile side menu */}
        <div className="drawer-side md:hidden">
          <label htmlFor="nav-menu" className="drawer-overlay"></label>
          <aside className="flex flex-col justify-center w-80 bg-base-100">
            {/* categories */}
            <div>
              <ul className="menu flex flex-col compact p-4 pt-2 mt-5">
                <li>
                  <a className="bg-gray-100">Mujer</a> 
                  <ul className="menu">
                    {Object.entries(categorias.catMujer).map(([k,v]) => {
                      return <li key={v}><Link href={"/mujer/" + k}><a>{v}</a></Link></li>
                    })}
                  </ul>
                </li>
                <div className="divider"></div>
                <li>
                  <a className="bg-gray-100">Hombre</a> 
                  <ul className="menu">
                    {Object.entries(categorias.catHombre).map(([k,v]) => {
                      return <li key={v}><Link href={"/hombre/" + k}><a>{v}</a></Link></li>
                    })}
                  </ul>
                </li>
                <div className="divider"></div>
                <li>
                  <a className="bg-gray-100">Infantil</a> 
                  <ul className="menu">
                    {Object.entries(categorias.catInfantil).map(([k,v]) => {
                      return <li key={v}><Link href={"/infantil/" + k}><a>{v}</a></Link></li>
                    })}
                  </ul>
                </li>
              </ul>
            </div>
            <footer>
              quienes somos
            </footer>
          </aside>
        </div>
      </div>
    </>
  )

}



export default Layout