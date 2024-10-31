

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">| Marketplace PPLG2  | </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>              
        </ul>
        <div className="d-flex" role="search">
            <a href="cart.html" className="btn btn-dark">
                <i className="fa-solid fa-cart-shopping text-light"></i>
                <span className="badge text-bg-secondary" id="cart-total"></span>
              </a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar