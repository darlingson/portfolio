const NavBar=()=>{
    return(<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Darlingson</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a id="introBtn" className="nav-link active" aria-current="page">About</a>
        </li>
        <li className="nav-item">
          <a id="toolsBtn"className="nav-link">Tools</a>
        </li>
        <li className="nav-item">
          <a id="projectsBtn" className="nav-link">Projects</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>);
}
export default NavBar;