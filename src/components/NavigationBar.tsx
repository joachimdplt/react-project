const  NavigationBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">


            <a className="btn btn-ghost text-xl">Home</a>
            
            <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a>Movie</a></li>
      <li>
        <details>
          <summary>My list</summary>
          
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    )
}; 
export default NavigationBar
