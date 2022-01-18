import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import Global from "../content/global_data.json"

function Homebanner(props) {
    return (
        <div>
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
                            delay: 0.2,
                        },
                    },
                }}
            >
                <div className="hero type-1 parallax is-cover is-relative is-fullheight-with-navbar" style={{ backgroundImage: `url(${props.image})`, backgroundPosition: '50% 0px', backgroundSize: "cover" }}><div className="parallax-overlay" style={{ backgroundColor: 'rgb(26,35,82)', opacity: '0.7' }} />
                    {/*Shape*/}
                    <img className="hero-shape-commerce" src="/cut-shape-v3.svg" alt="" />

                    {/* Hero caption */}
                    <div id="main-hero" className="hero-body ">
                        <div className="container has-text-centered">
                            <div className="columns is-vcentered is-centered">
                                <div className="column is-6">

                                    <img src={props.logo} alt="paintworks professional painting services gilbert arizona" />



                                </div>

                                {/*
                                <div className="column is-7">

                                    <h1 className="BannerHeading" style={{ textAlign: "left", color: "#fff" }}>PaintWorks is a full-service painting company that specializes in both residential painting and commercial painting projects.</h1>
                                    <h5 style={{ textAlign: "left", color: "#fff" }}>Located in the East Valley and serving areas ranging from North Scottsdale to Queen Creek, we offer a comprehensive suite of services, including interior painting, exterior painting, color consultations, cabinet refinishing, stucco repair and drywall repair.</h5>


                                </div>
                                */}

                            </div>
                            <div className="columns is-vcentered is-centered">
                                <div className="column is-12">


                                    <h6 className="BannerHeading" style={{ color: "#fff", fontSize: "1.6rem", fontStyle: "italic", marginBottom: "0", fontWeight: '300' }}>{props.tagline}</h6>


                                </div>
                            </div>
                            <div className="columns is-vcentered is-centered">
                                <div className="column is-8  has-text-centered">
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
                                                    delay: 0.4,
                                                },
                                            },
                                        }}
                                    >




                                        <h4 className="light-text" style={{ fontSize: "2rem!important", marginTop: "0", fontWeight: '700' }}>
                                            {props.slogan}
                                        </h4>
                                        <br />

                                        <p className="has-text-centered is-centered buttons">
                                            <a href={"tel:" + Global.contact.phone} className="button button-cta btn-align primary-btn z-index-2 scroll-link">
                                                <FaPhoneAlt style={{ marginRight: "5px" }} /> {" "}{props.cta1title}
                                            </a>
                                            <a href={props.cta2target} className="button button-cta btn-align z-index-2">
                                                <GrServices style={{ marginRight: "5px" }} /> {" "}{props.cta2title}
                                            </a>
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

            <style jsx>{`
                .parallax-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    background-color: #333;
                    opacity: .7;
                }
                .parallax-hero-title.is-smaller {
                    font-size: 4rem !important;
                    line-height: 1;
                }
                .hero.type-1 .hero-shape-commerce {
                    position: absolute;
                    top: unset;
                    bottom: -1px !important;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    width: 100%;
                    z-index: 1 !important;
                }
                .hero-body {
                    position: relative;
                    background-size: cover !important;
                    background-repeat: no-repeat !important;
                    z-index: 6;
                }
                .light-text {
                    color: #fff !important;
                }
                .button.primary-btn {
                    outline: none;
                    border-color: #3eace1;
                    background-color: #3eace1;
                    color: #fff;
                    -webkit-transition: all .5s;
                    transition: all .5s;
                }
                .button {
                    background-color: #fff;
                    border-color: #dbdbdb;
                    border-width: 1px;
                    color: #363636;
                    cursor: pointer;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    padding-bottom: calc(0.5em - 1px);
                    padding-left: 1em;
                    padding-right: 1em;
                    padding-top: calc(0.5em - 1px);
                    text-align: center;
                    white-space: nowrap;
                }
                .navbar-placeholder {
                    z-index: 999;
                }


                .hero .navbar {
                    background: none;
                }
                .navbar-wrapper {
                    width: 100%;
                    height: 4.6rem;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 20;
                    -webkit-transition: all .4s;
                    transition: all .4s;
                }
                @media screen and (min-width: 1024px){
                .navbar {
                    min-height: 3.25rem;
                }
                }
                a, a:active, i, i:active, div, div:active, div:focus, span:focus, span:active {
                    outline: none !important;
                }
                @media screen and (min-width: 1024px){
                    .hero {
                        background-attachment: fixed;
                    }
                }
                .BannerHeading{
                    font-size: 1.2rem;
                    line-height: 1.1;
                    font-weight: 500;
                    font-size: 2.4rem;
                }
         `}</style>
        </div>
    );
}


export default Homebanner