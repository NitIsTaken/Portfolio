function Skills () {
    const skills =["HTML","CSS","JavaScript", "ReactJs", "ReactNative"] 
    return(
        <section id="skills" className="skills-section">
            <h2>Compétences</h2>
            <ul className="skill-list">
                {skills.map((skills, index)=> (
                    <li key={index}>{skills}</li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;