import "./Header.css";

function Header() {
    return(
        <header className="header">
            <div className="header-container">
                <div className="Logo">
                    <img src="/Header-Logo.png" alt="Logo" />
                </div>
           
            <nav className="nav-menu">
                <a href="#home">Home</a>
                <a href="#about">Pages</a>
                <a href="#blog">Blog</a>
                <a href="#shop">Shop</a>
                <a href="#elements">Elements</a>
            </nav>
            <div className="phone-box">
                <span className="phone-icon">
                    <i className="fa-solid fa-phone"></i>
                </span>

                <span>+1235 455 677</span>
            </div>
            </div>
        </header>
    )
}
export default Header;