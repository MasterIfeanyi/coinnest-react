

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-white py-3 navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    <h2 className="logo">CoinsNest</h2> 
                </a>

                <button className="navbar-toggler nav-collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    {/* <span className="close py-1"><i className="ri ri-close-line"></i></span>  */}
                    <span className="close py-1"><i className="bi bi-x-lg"></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <a href="#home" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item me-4">
                            <a href="#markets" className="nav-link">Markets</a>
                        </li>
                        <li className="nav-item me-4">
                            <a href="#exchange" className="nav-link">Exchange</a>
                        </li>
                        <li className="nav-item me-4">
                            <a href="#news" className="nav-link">News</a>
                        </li>
                        <li className="nav-item me-4">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <a href="" className="btn btn-primary ms-4">Language</a>
                    </ul>
                </div>
            </div>
        </nav>  
    )
}

export default Header