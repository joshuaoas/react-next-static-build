function ContactMap(props) {
    return (
        <div>
            <section className="hero google-maps is-clearfix">
                <div>
                    <div style={{ overflow: "hidden", position: "relative", height: "600px" }}>
                        <iframe style={{ border: '0', height: "104%", position: "absolute", top: "-1%", left: "-1%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.419985762567!2d-89.39285848404914!3d43.074664979145616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88065337ba37d2c7%3A0x851a8f9d35d3fe9!2sSkylight%20Apartments%2C%20311%20State%20St%2C%20Madison%2C%20WI%2053703!5e0!3m2!1sen!2sus!4v1625196787438!5m2!1sen!2sus" width="100%" height="600" loading="lazy"></iframe>

                    </div>
                </div>
            </section>

            <style jsx>{`
            .google-maps{
                margin-bottom: 0;
            }
         `}</style>
        </div>
    );
}


export default ContactMap