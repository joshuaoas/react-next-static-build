import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Global from "../content/global_data.json"

function ContactForm2(props) {
    return (
        <div id="contactForm">
            <div className="section section-feature-grey is-small">
                <div className="container">
                    {/* Title */}
                    <div className="section-title-wrapper">
                        {/*
                        <div className="bg-number"><FaPhoneAlt /></div>
*/}
                        <h2 className="title section-title has-text-centered dark-text">
                            Get in Touch.
                        </h2>
                        <div className="subtitle section-subtitle has-text-centered">
                            <b>Call us</b>, <b>or send a message</b>.
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <div className="columns">
                            {/* Side content */}
                            <div className="column is-4">
                                <p className="pb-20 body-color">
                                    {props.formCopy}
                                </p>
                                {/* Contact info */}
                                <div className="content">
                                    {/* Card */}
                                    <div className="flex-card contact-card light-bordered hover-inset padding-15">
                                        <div className="icon">
                                            <FaPhoneAlt />
                                        </div>
                                        <div className="contact-info">
                                            <div className="contact-name">Phone</div>
                                            <div className="contact-details">
                                                <span className="details-text"><b><a href={'tel:' + Global.contact.phone}>{Global.contact.phonepretty}</a></b></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card */}
                                    <div className="flex-card contact-card light-bordered hover-inset padding-15">
                                        <div className="icon">
                                            <GrMail />
                                        </div>
                                        <div className="contact-info">
                                            <div className="contact-name">Email</div>
                                            <div className="contact-details">
                                                <span className="details-text"><b><a href={'mailto:' + Global.contact.email}>{Global.contact.email}</a></b></span>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            {/* Contact form */}
                            <div className="column is-7 is-offset-1">
                                <form name="main-contact-form" method="POST" data-netlify="true" action="/thank-you">
                                    <input type="hidden" name="form-name" value="main-contact-form" />
                                    <div className="columns is-multiline">
                                        <div className="column is-6">
                                            {/* Input */}
                                            <div className="field">
                                                <label>First name *</label>
                                                <div className="control">
                                                    <input className="input is-medium" type="text" name="first name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-6">
                                            {/* Input */}
                                            <div className="field">
                                                <label>Last name *</label>
                                                <div className="control">
                                                    <input className="input is-medium" type="text" name="last name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-6">
                                            {/* Input */}
                                            <div className="field">
                                                <label>Email *</label>
                                                <div className="control">
                                                    <input className="input is-medium" type="email" name="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-6">
                                            {/* Input */}
                                            <div className="field">
                                                <label>Company</label>
                                                <div className="control">
                                                    <input className="input is-medium" type="text" name="company" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-12">
                                            {/* textarea */}
                                            <div className="field">
                                                <div className="control">
                                                    <textarea className="textarea is-default-focus" rows={5} placeholder="Your message ..." defaultValue={""} name="message" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-12">
                                            {/* Submit */}
                                            <button type="submit" className="button button-cta btn-align primary-btn startup-contact-button raised no-lh is-fullwidth is-bold">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <style jsx>{`
            .flex-card, .network-grid .network-card, .project-card, .profile-card, .carousel-wrap .testimonials-solo-carousel .testimonial-item {
                position: relative;
                background-color: #fff;
                border: 1px solid #fcfcfc;
                border-radius: .1875rem;
                display: inline-block;
                position: relative;
                overflow: hidden;
                width: 100%;
                margin-bottom: 20px;
                -webkit-transition: all .5s;
                transition: all .5s;
            }
            .flex-card.light-bordered, .network-grid .light-bordered.network-card, .light-bordered.project-card, .light-bordered.profile-card, .carousel-wrap .testimonials-solo-carousel .light-bordered.testimonial-item {
                border: 1px solid #e5e5e5 !important;
            }
            .contact-card {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-line-pack: center;
                align-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            .padding-15 {
                padding: 15px;
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
            .contact-card .contact-info {
                margin: 0 30px;
                font-family: "Roboto",sans-serif;
            }
            .body-color {
                color: #8e9baf !important;
            }
            .pb-20 {
                padding-bottom: 20px;
            }
            .section-title-wrapper .bg-number, .section-title-wrapper .bg-symbol {
                position: absolute;
                text-align: center;
                font-weight: bolder;
                top: -70px;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                font-size: 160px;
                z-index: 0;
                opacity: .1;
                color: #999;
                width: 160px;
                height: 160px;
                line-height: 160px;
            }
            .section .content-wrapper {
                padding-top: 40px;
            }
            .section.section-feature-grey {
                background-color: #f5f6fa;
            }
            a {
                color: #38B997;
            }
         `}</style>
        </div>
    );
}


export default ContactForm2

