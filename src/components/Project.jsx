const projects = [
    {title: "Charlotte", description: "Un Portfolio de danseuse", link: "https://www.charlotte-brossard.fr/"},
    {title: "CodePen", description:"Une liste d'animation pour le web", link:"https://codepen.io/NitWasTaken"}
]; 

function Projects() {
    return(
        <section id="projects" className="projects-section fade-in">
            <h2>Mes projets</h2>
            <div className="project-grid">
                {projects.map((p, index)=> (
                    <div key={index} className="project-card">
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <a href={p.link}>Voir le projet</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;