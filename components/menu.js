export default function Menu({menu, setMenu}){
  return(
    <>
      {/* mobile menu */}
      <div className={ menu ? "hidden": "md:hidden absolute top-0 left-0 w-full h-full flex justify-center items-center"} >
          <div className="z-10 relative border flex flex-col justify-around items-center w-11/12 h-5/6 rounded-2xl border-red-600 bg-white">
            <button onClick={() => {setMenu(!menu)}} className="absolute z-20 top-5 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#">Mujer</a>
            <a href="#">Hombre</a>
            <a href="#">Niños</a>
          </div>
        </div>
    </>
  )
}