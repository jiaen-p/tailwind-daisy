import Head from "next/dist/next-server/lib/head"

export default function Header({menu, setMenu}){
  return (
    <>
      <Head>
        <title>Lissa accesorios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* navbar */}
      <nav className="bg-gray-100">
        <div className={menu ? "max-w-6xl mx-auto px-4 transition duration-700" : "max-w-6xl mx-auto px-4 transition duration-700 opacity-40 filter blur bg-gray-600"}>
          
          <div className="flex justify-between">
              {/* primary nav */}
              <div className="hidden md:flex items-center  text-gray-700 ">
                <a href="#" className="py-5 px-3 hover:text-gray-800">Mujer</a>
                <a href="#" className="py-5 px-3 hover:text-gray-800">Hombre</a>
                <a href="#" className="py-5 px-3 hover:text-gray-800">Niño</a>
              </div>
            
              {/* logo */}
              <div className="">
                <a href="#" className="flex items-center py-5 px-2 hover:text-gray-800 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-bold">Lissa accesorios</span>
                </a>
              </div>
        
              {/* secondary nav */}
              <div className="hidden md:flex items-center text-gray-700 px-9">
                <a href="#" className="">Nuestra historia</a>
              </div>
        
              {/* mobile button */}
              <div className="md:hidden flex items-center">
                <button onClick={() => {setMenu(!menu)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                  </svg>
                </button>
              </div>
          </div>
        </div>
        
        
      </nav>
    </>
    )
}