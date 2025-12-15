function Contact () {
    return(
        <section id="contact" className="contact-section">
            <h2>Contact</h2>
            <form>
                <input type="text" placeholder="Votre nom" />
                <input type="email" placeholder="Votre email"/>
                <input type="text" placeholder="Sujet"/>
                <textarea placeholder="Votre message"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    )
}

export default Contact;