import React from "react";
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import Global from "../content/global_data.json"





const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: "",
        };

    }

    componentDidMount() {
        //console.log(this.props.path)
    }

    pageLoad(e) {
        this.setState({
            active: false,
            navBarActiveClass: "",
        });
    }


    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                        navBarActiveClass: "is-active",
                    })
                    : this.setState({
                        navBarActiveClass: "",
                    });
            }
        );
    };



    render() {


        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link href="/" aria-label="Homepage" onClick={this.pageLoad}>
                            <a className="navbar-item">
                                <img src="/static/img/PaintWorkspw-blue.svg" width={112} height={28} alt="paintworks professional painting services gilbert arizona" />
                            </a>
                        </Link>
                        <a role="button"
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                            className="navbar-burger"
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbarBasicExample">
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </a>
                    </div>


                    <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>

                        <div className="navbar-end">
                            <div className="navbar-item has-text-centered has-dropdown is-hoverable">
                                <a className="navbar-link" tabIndex="-1">Our Services</a>
                                <div className="navbar-dropdown">
                                    <ActiveLink activeClassName="active" href="/services/residential-interior-painting-services" onClick={this.pageLoad}>
                                        <a className="navbar-item" aria-label="Residential Interior Painting page">Residential Interior Painting</a>
                                    </ActiveLink>
                                    <ActiveLink activeClassName="active" href="/services/residential-exterior-painting-services" onClick={this.pageLoad}>
                                        <a className="navbar-item" aria-label="Residential Exterior Painting page">Residential Exterior Painting</a>
                                    </ActiveLink>
                                    <ActiveLink activeClassName="active" href="/services/commercial-painting-services" onClick={this.pageLoad}>
                                        <a className="navbar-item" aria-label="Commercial Painting page">Commercial Painting</a>
                                    </ActiveLink>
                                    <ActiveLink activeClassName="active" href="/services/cabinet-refinishing" onClick={this.pageLoad}>
                                        <a className="navbar-item" aria-label="Cabinet Refinishing page">Cabinet Refinishing</a>
                                    </ActiveLink>
                                    <ActiveLink activeClassName="active" href="/services/stucco-and-drywall-repair" onClick={this.pageLoad}>
                                        <a className="navbar-item" aria-label="Stucco/Drywall Repair page">Stucco/Drywall Repair</a>
                                    </ActiveLink>
                                    <ActiveLink activeClassName="active" href="/services/color-consultation" onClick={this.pageLoad}>
                                        <a className="navbar-item" aria-label="color consultation page">Color Consultation</a>
                                    </ActiveLink>

                                </div>
                            </div>





                            <div className="navbar-end has-text-centered">
                                <a
                                    title="Phone"
                                    href={'tel:' + Global.contact.phone}
                                    className="navbar-item navbar-icons"
                                    aria-label="Phone"
                                >
                                    <FaPhoneAlt />
                                </a>
                                <a
                                    title="Facebook"
                                    href={Global.social.fb} target="_blank" rel="noopener noreferrer"
                                    className="navbar-item navbar-icons"
                                    aria-label="Facebook"
                                >
                                    <IoLogoFacebook style={{ fontSize: "1.4rem" }} />
                                </a>
                                <a
                                    title="Instagram"
                                    href={Global.social.insta} target="_blank" rel="noopener noreferrer"
                                    className="navbar-item navbar-icons"
                                    aria-label="Instagram"
                                >
                                    <IoLogoInstagram style={{ fontSize: "1.4rem" }} />
                                </a>
                            </div>




                        </div>
                    </div>
                </nav>
                <style jsx>{`
                .navbar-burger{
                    margin-right: 0;
                    margin-left: auto;
                }
                .active{
                    background-color: rgba(0,0,0,.05);
                }
                @media only screen and (max-width: 1024px) {
                .navbar-menu {
                    display: block;
                    opacity: 0;
                
                    position: absolute;   /* or float: left; width: 100%;*/
                    left: 0;
                    right: 0;
                
                    transform: translateY(-50%);
                    transition: all .4s ease-in-out;
                    pointer-events: none;
                }
                
                .navbar-menu.is-active {
                    opacity: 1;
                    transform: none;
                    pointer-events: auto;
                }
            }
            
            @media (max-width: 1023px) {
                .navbar-end {
                    display: block!important;
                    text-align: center;
                }
            }
            
                `}</style>
            </div>
        );
    }
};

export default Navbar;
