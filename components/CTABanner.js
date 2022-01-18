import ContactButtonsWhite from './ContactButtonsWhite';
import { motion } from "framer-motion";


function CTABanner(props) {
    return (
        <section className="section call-to-action style-5 has-background-secondary-2 is-clearfix orangeBG5">
            <div className="container">
                <div className="level">
                    <div className="level-left">
                        <motion.div
                            style={{ originY: 1 }}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: 1,
                                    opacity: 0,
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 1.4,
                                    },
                                },
                            }}
                        >
                            <div>
                                <h1 style={{ marginBottom: "0", textTransform: "uppercase" }} className="title">{props.heading}</h1>
                                <p className="ctatext" style={{ color: "#fff", textTransform: "capitalize" }}>{props.firstsubheading}</p>
                                <p className="ctatext" style={{ color: "#fff", textTransform: "capitalize", textDecoration: "none" }}>{props.secondsubheading}</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="level-right">
                        <motion.div
                            style={{ originY: 1 }}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: 1,
                                    opacity: 0,
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 1.6,
                                    },
                                },
                            }}
                        >
                            <ContactButtonsWhite />
                        </motion.div>
                    </div>
                    {/* .level-right */}
                </div>
                {/* .level */}
            </div>
            <style jsx>{`
                .call-to-action.style-5 {
                    padding-top: 6rem;
                    padding-bottom: 6rem;
                }
                .has-background-secondary-2 {
                    background-color: #CC543B!important;
                }
                .call-to-action.style-5 .heading {
                    font-size: 120px;
                    font-size: 7.5rem;
                    letter-spacing: 0;
                    color: #d39e56;
                    margin-right: 50px;
                    margin-top: -30px;
                    font-family: 'Playfair Display',serif;
                    line-height: 1;
                    line-height: 0;
                    font-weight: 600;
                }
                .call-to-action.style-1 .heading, .call-to-action.style-2 .heading, .call-to-action.style-5 .heading {
                    text-transform: uppercase;
                }
                .call-to-action.style-5 .heading span {
                    font-size: 75px;
                    margin-left: -20px;
                }
                .call-to-action.style-5 .title {
                    color: #fff;
                    letter-spacing: 0;
                    font-size: 35px;
                    font-size: 2.1875rem;
                    font-weight: 600;
                }
                .call-to-action.style-1 .title, .call-to-action.style-2 .title, .call-to-action.style-5 .title {
                    text-transform: capitalize;
                }
                .call-to-action.style-5 .button {
                    background-color: #d39e56;
                }
                .button {
                    font-family: Oswald,sans-serif;
                    border: none;
                    -webkit-box-shadow: none;
                    box-shadow: none;
                    letter-spacing: 1px;
                    -webkit-transition: all .5s ease;
                    transition: all .5s ease;
                    color: #fff;
                    background-color: #ca9b5b;
                    outline: 0;
                    border-radius: 290486px;
                    font-weight: 500;
                }
                .orangeBG2{
                    background-color: #cc543b;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' width='100%25' height='200' viewBox='0 0 1600 100'%3E%3Cpath fill='%23bf4f37' d='M0 100 0 0 1600 0Z'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-size: 100% 200px;
                    background-position: top center;
                }
                .orangeBG3{
                    background-color: #cc543b;
                    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b84c35' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
                }
                .orangeBG4{
                    background-color: #cc543b;
background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23b24a34' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
                }
                .orangeBG5{
                    background-image:
                    linear-gradient(to bottom, rgba(204, 84, 59, 0.92), rgba(204, 84, 59, 0.2)),
                    url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b84c35' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
                }
                .ctatext a{
                    text-decoration: none!important;
                    color:#fff!important;
                }
            `}</style>
        </section>
    );
}


export default CTABanner