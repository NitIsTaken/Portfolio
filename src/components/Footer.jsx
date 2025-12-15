function Footer() {
  return(
    <footer className="site-footer">
      <div className="footer-inner">
        <p>@{new Date().getFullYear()} - Martin Lafuente</p>
        <nav className="socials">
            <a href="https://github.com/NitIsTaken" aria-label="Github">GitHub</a>
            <a href="https://codepen.io/NitWasTaken" aria-label="Codepen">Codepen</a>
            <a href="www.linkedin.com/in/martin-lafuente-30b1a9350" aria-label="Linkedin">Linkedin</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;