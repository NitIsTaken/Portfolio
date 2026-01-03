function Header() {
    return(
        <header className="header">
            <h1 className="logo">Portfolio de Martin</h1>
            <nav aria-label="NAvigation principale" className="nav-header">
                <ul className="nav-list">
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="public\Cv Lafuente Martin.pdf">CV</a></li>
                </ul>
            </nav>
        </header>
    );    
}

export default Header;