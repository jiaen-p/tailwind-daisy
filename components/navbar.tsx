const Navbar = () => (
  <>
    
      
    <main>
        <div className="drawer drawer-mobile">
          <input type="checkbox" id="main-menu" className="drawer-toggle" />
          {/* <Navbar /> */}
          <div className="navbar mb-2 shadow-sm w-full">
            <div className="navbar-start">
              <label htmlFor="main-menu" className="btn btn-square btn-ghost md:mr-1 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
            <div className="px-2 mx-2 navbar-center">
              <button className="">
                <span className="text-lg font-bold">
                  Lissa Accesorios
                </span>
              </button>
            </div> 
            <div className="navbar-end"></div>
          </div>

          <div className="drawer-side">
            <label htmlFor="main-menu" className="drawer-overlay"></label>
          </div>
        </div>
      </main>

      
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        {/* navbar */}
        <div className="flex flex-col drawer-content">
          <div className="navbar shadow-sm rounded-t-box">
            <div className="navbar-start lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div> 
            <div className="navbar-center">
              <button className="">
                <span className="text-lg font-bold">
                  Lissa Accesorios
                </span>
              </button>
            </div> 
            <div className="navbar-end"></div>
            <div className="navbar-end flex-none hidden lg:block">
              <ul className="menu horizontal">
                <li>
                  <a className="rounded-btn">Item 1</a>
                </li> 
                <li>
                  <a className="rounded-btn">Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div> 
        {/* mobile side menu */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
          <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
            <li>
              <a>Item 1</a>
            </li> 
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
  </>
)

export default Navbar