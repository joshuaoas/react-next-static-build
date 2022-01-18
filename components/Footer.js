import React from "react";
import Link from 'next/link'
import Global from "../content/global_data.json"
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";


const Footer = class extends React.Component {

    render() {
        return (
            <div style={{ position: "relative", display: "block", background: "#f5f6fa" }}>
                <a href="/">
                    <img className="hero-shape-footer" src="/cut-shape-v6.svg" alt="professional painting services" />
                </a>

                <section className="footer footer-dark-left section" style={{ marginTop: "-10px" }}>



                    <div className="container">

                        <div className="columns">
                            <div className="column is-3 is-6-mobile">

                                <div className="mb-20">
                                    <img style={{ maxWidth: "100%" }} className="small-footer-logo switcher-logo" src="/static/img/PaintWorks-white3.svg" alt="" />
                                </div>


                            </div>
                            <div className="column is-3 is-12-mobile">


                                <h4 className="blue-head">Contact</h4>


                                <div>
                                    <p className="moto"><a href={"tel:" + Global.contact.phone}>{Global.contact.phonepretty}</a></p>
                                    <p className="moto"><a href={"mailto:" + Global.contact.email}>{Global.contact.email}</a></p>
                                    <p className="moto" style={{ marginBottom: "10px" }}>{Global.contact.address2}</p>


                                    <nav className="level is-mobile mt-20">

                                    </nav>

                                </div>

                            </div>
                            <div className="column is-6 is-12-mobile">

                                <div className="">


                                    <h4 className="blue-head">Links</h4>
                                    <div className="columns">
                                        <div className="column is-6 is-6-mobile">
                                            <Link href="/">
                                                <a className="footer-navigation-links">
                                                    Home
                                                </a>
                                            </Link>
                                            <Link href="/services/residential-interior-painting-services">
                                                <a className="footer-navigation-links">Residential Interior Painting</a>
                                            </Link>
                                            <Link href="/services/residential-exterior-painting-services">
                                                <a className="footer-navigation-links">Residential Exterior Painting</a>
                                            </Link>
                                            <Link href="/services/stucco-and-drywall-repair">
                                                <a className="footer-navigation-links">Stucco/Drywall Repair</a>
                                            </Link>

                                        </div>
                                        <div className="column is-6 is-6-mobile">

                                            <Link href="/services/color-consultation">
                                                <a className="footer-navigation-links">Color Consultation</a>
                                            </Link>
                                            <Link href="/services/commercial-painting-services">
                                                <a className="footer-navigation-links">Commercial Painting</a>
                                            </Link>
                                            <Link href="/services/cabinet-refinishing">
                                                <a className="footer-navigation-links">Cabinet Refinishing</a>
                                            </Link>


                                        </div>
                                    </div>





                                </div>
                            </div>

                        </div>

                        <div style={{ textAlign: "center", width: "70px", margin: "0 auto", paddingBottom: "10px", display: "flex" }}>
                            <div className="level-left level-social" style={{ display: "flex", flexDirection: "row" }}>

                                <a href={Global.social.fb} target="_blank" rel="noopener noreferrer" className="level-item" style={{ marginLeft: '0', marginBottom: ".75rem" }}>
                                    <span className="icon"><IoLogoFacebook /></span>
                                </a>
                                <a href={Global.social.insta} target="_blank" rel="noopener noreferrer" className="level-item" style={{ marginLeft: '10px', marginBottom: ".75rem" }}>
                                    <span className="icon"><IoLogoInstagram /></span>
                                </a>


                            </div>
                        </div>
                        <p className="moto mt-8" style={{ textAlign: "center", color: "#fff" }}>
                            &copy; {new Date().getFullYear()} Copyright All rights reserved.
                        </p>
                        <p className="moto mt-8" style={{ textAlign: "center", fontSize: "14px", color: "#cecece" }}>
                            Site by <a href="https://kloud9creative.com" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>Kloud 9 Creative</a>
                        </p>

                    </div>
                </section>
                <style jsx>{`
                section.footer-dark-left {
                    padding-top: 50px;
                    padding-bottom: 30px;
                    background-color: #1A2352;
                    position: relative;
                    overflow: hidden;
               
                }
                section.footer-dark-left .footer-nav-right {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: end;
                    -ms-flex-pack: end;
                    justify-content: flex-end;
                    -ms-flex-line-pack: center;
                    align-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                }
                section.footer-dark-left .footer-nav-right .footer-nav-link {
                    margin: 0;
                    padding: 20px 0;
                    border-bottom: 2px solid transparent;
                }


                .level.is-mobile {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                }


                .level.is-mobile .level-left, .level.is-mobile .level-right {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                }

                .level.is-mobile .level-item:not(.is-narrow) {
                    -webkit-box-flex: 1;
                    -ms-flex-positive: 1;
                    flex-grow: 1;
                }

                .level.is-mobile .level-item:not(:last-child) {
                    margin-bottom: 0;
                    margin-right: .75rem;
                }

                @media only screen and (max-width: 768px) {
                    .footer-nav-right{
                        justify-content: flex-start!important;
                    }
                    .footer-nav-link{
                        display: block;
                        padding: 5px 0!important;
                    }
                }
                @media only screen and (min-width: 769px) {
                    .footer-nav-link{

                        padding: 5px 10px!important;*/
                    }
                }

                @media only screen and (min-width: 992px) and (max-width: 1199px){
                    .blog-shape.shape-1 {
                        width: 388px;
                        height: 388px;
                    }
                }
                .blog-shape.shape-1 {
                    width: 488px;
                    height: 488px;
                    background-color: #fff;
                    border-radius: 50px;
                    -webkit-transform: rotate(
                45deg
                );
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(
                45deg
                );
                    top: -25%;
                    left: 3%;
                }
                .blog-shape {
                    position: absolute;
                }
                .hero-shape-footer {
                   
                    margin: 0 auto;
                    width: 100%;
                    z-index: 1 !important;
                }
                .icon{
                    color:#fff;
                }
                .moto{
                    color: #fff;
                }
                .footer-nav-link{
                    color:#fff;
                }
                @media(max-width: 767px) { /* <== You can change this break point as per your  needs */
                    .reverse-columns {
                      flex-direction: column-reverse;
                      display: flex;
                    }
                  }
                .blue-head{
                    color: #3aa1ce;
                    margin-bottom: 10px;
                }
                .footer-navigation-links{
                    display: block;
                    background: linear-gradient(90deg, #26A8C5 0%, #4AAE4C 100%);


                    transition: color .5s ease;
                    position: relative;
                    display: block;
                    color:#fff;
                }
                .footer-head {
                    padding-bottom: 3rem;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    border-bottom: 1px solid #e3e3e3;
                }
                .buttons {
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    -webkit-box-pack: start;
                    -ms-flex-pack: start;
                    justify-content: flex-start;
                }
                a {
                    color: #fff;
                    transition: color .5s ease-out;
                }
                a:hover{
                    color: #3eace1;
                }
                a:active{
                    color: #3eace1;
                }
                a .icon{
                    color: #fff;
                    transition: color .5s ease-out;
                }
                a .icon:hover{
                    color: #3eace1;
                }
                a .icon:active{
                    color: #3eace1;
                }
            `}</style>
            </div>
        );
    }
};

export default Footer;




