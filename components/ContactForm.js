function ContactForm(props) {
    return (
        <div>
            <section className="section contact-form is-clearfix">
                <div className="container">
                    <h1 className="heading-title style-1">Get in touch</h1>

                    {/* successful form message */}

                    <div className="overhang-message-content is-hidden success">
                        <span className="icon">
                            <i className="ion-md-notifications" />
                        </span> Thank You! Your message was sent successfully. </div>
                    {/* error form message */}
                    <div className="overhang-message-content is-hidden error">
                        <span className="icon">
                            <i className="ion-md-notifications" />
                        </span> Oops! Something went wrong, we couldn't send your message. </div>
                    {/* ajax contact form */}
                    <form
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        name="contact"
                        acceptCharset="UTF-8"
                        className="ajax-contact-form"
                        action="/thank-you/"
                        method="POST"
                    >
                        <div hidden>
                            <label>
                                Don’t fill this out: <input name="bot-field" type="hidden" />
                            </label>
                        </div>
                        <input type="hidden" name="form-name" value="contact" />

                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field" style={{ marginLeft: "0" }}>
                                    <div className="control is-expanded">
                                        <input className="input" type="text" name="name" placeholder="Your Name" required /> </div>
                                </div>
                                {/* .field */}
                                <div className="field">
                                    <div className="control is-expanded">
                                        <input className="input" type="text" name="subject" placeholder="Your Subject" required /> </div>
                                </div>
                                {/* .field */}
                            </div>
                            {/* .field-body */}
                        </div>
                        {/* .field */}
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field" style={{ marginLeft: "0" }}>
                                    <div className="control is-expanded">
                                        <input className="input" type="tel" name="phone" placeholder="Your Phone" required /> </div>
                                </div>
                                {/* .field */}
                                <div className="field">
                                    <div className="control is-expanded">
                                        <input className="input" type="email" name="email" placeholder="Your Email" required /> </div>
                                </div>
                                {/* .field */}
                            </div>
                            {/* .field-body */}
                        </div>
                        {/* .field */}
                        <div className="field ">
                            <div className="control is-expanded">
                                <textarea className="textarea" name="textarea" placeholder="Your Message" required defaultValue={""} />
                            </div>
                        </div>
                        {/* .field */}
                        <div className="field ">
                            <div className="control has-text-centered">
                                <button className="button" type="submit">Send message</button>
                            </div>
                        </div>
                        {/* .field */}
                    </form>
                </div>
            </section>


            <style jsx>{`
            .contact-form {
                background-color: #fff;
            }
            .heading-title.style-1 {
                font-family: Roboto,sans-serif;
                padding-bottom: 0;
                margin-bottom: 2rem!important;
                font-weight: 500;
                font-size: 36px;
                font-size: 2.25rem;
                letter-spacing: 0;
            }
            .is-hidden {
                display: none!important;
            }
            .icon {
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                display: -webkit-inline-box;
                display: -ms-inline-flexbox;
                display: inline-flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                height: 1.5rem;
                width: 1.5rem;
            }
            
            .field:not(:last-child) {
                margin-bottom: 1rem;
            }
            .field-body>.field:not(:last-child) {
                margin-right: 1.6rem;
            }
            
            .control {
                font-size: 1rem;
                position: relative;
                text-align: left;
            }
            .input, .input.is-medium, .select.is-medium, .textarea, .textarea.is-medium, input[type=email], input[type=number], input[type=tel], input[type=text], select, textarea {
                font-size: 15px;
                font-size: .9375rem;
                padding-left: calc(1em - 1px);
                padding-right: calc(1em - 1px);
                height: 3.06em;
            }
            .checkbox, .radio, input[type=email], input[type=number], input[type=tel], input[type=text], select, textarea {
                font-family: Roboto,sans-serif;
            }
         `}</style>
        </div>
    );
}


export default ContactForm