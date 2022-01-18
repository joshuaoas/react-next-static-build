




import { GiPaintRoller } from "react-icons/gi";
import { GiLargePaintBrush } from "react-icons/gi";
import { GiPaintBrush } from "react-icons/gi";
import { GiPaintBucket } from "react-icons/gi";
import { GiToolbox } from "react-icons/gi";
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSwatchbook } from 'react-icons/fa'
import { FaHardHat } from 'react-icons/fa'
import Link from 'next/link'



function BgIcon(props) {
    return (
        <div>
            {props == 'GiPaintRoller' ? <GiPaintRoller style={{ fontSize: "4em", color: "rgba(255,255,255,.8)" }} /> : null}
            {props == 'GiLargePaintBrush' ? <GiLargePaintBrush style={{ fontSize: "4em", color: "rgba(255,255,255,.8)" }} /> : null}
            {props == 'GiPaintBrush' ? <GiPaintBrush style={{ fontSize: "4em", color: "rgba(255,255,255,.8)" }} /> : null}
            {props == 'GiToolbox' ? <GiToolbox style={{ fontSize: "4em", color: "rgba(255,255,255,.8)" }} /> : null}
            {props == 'FaSwatchbook' ? <FaSwatchbook style={{ fontSize: "4em", color: "rgba(255,255,255,.8)" }} /> : null}
            {props == 'FaHardHat' ? <FaHardHat style={{ fontSize: "4em", color: "rgba(255,255,255,.8)" }} /> : null}
        </div>
    );
}

function Start(props) {

    return (
        <div style={{ position: "relative", display: "block" }}>


            <div id="start" className="section">

                <div className="container">
                    <div className="columns">
                        <div className="column is-12-desktop is-12-mobile">
                            <h2 className="heading-title style-3 has-text-left" style={{ marginBottom: "0!important" }}>{props.serviceData.heading}.</h2>
                            <p style={{ marginBottom: "20px" }}>{props.serviceData.subtitle}</p>
                        </div>
                    </div>
                    <div className="columns is-multiline is-flex-portrait">
                        {/* Benefit box */}



                        {props.serviceData.services.map((service, index) => (


                            <div className="column is-one-third-widescreen flex-portrait-4 is-half">
                                <div className="flex-card is-feature padding-5 first-start-feature service-cards">
                                    {/* Icon */}
                                    <div className="is-cover is-relative" style={{
                                        backgroundImage: `url(${service.image})`, backgroundPosition: '50% 0px', backgroundSize: "cover", minHeight: '200px', display: 'flex', justifyContent: 'center'
                                        , alignItems: 'center'
                                    }}><div className="parallax-overlay" style={{ backgroundColor: 'rgb(26,35,82)', opacity: '0.5' }} />
                                        <h4 style={{ marginTop: '0', color: "#fff", position: 'absolute', zIndex: '1000', top: "10px", left: "10px", fontWeight: '500' }}>{service.title}</h4>




                                        <div className="icon-container is-first is-icon-reveal" style={{ color: "#fff", position: 'absolute', zIndex: '1000', bottom: "10px", right: "0px" }}>
                                            {BgIcon(service.icon)}
                                        </div>
                                    </div>


                                    <div style={{ padding: "20px" }}>
                                        <div className="content-container padding-20">

                                            <p>{service.subbtitle}</p>
                                        </div>
                                        <p style={{ display: "flex" }}>
                                            <Link href={service.linkTarget} >
                                                <a className="read-more-link" style={{ marginLeft: "auto" }}>
                                                    Show Me How<span>⟶</span>
                                                </a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        ))}









                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>
            </div>

            <style jsx>{`
            h4{
                line - height: 1.2;
                                            min-height: 56px;
                                            margin-top: 20px
            }

                                            .start-icons{
                                                font - size: 4em;              
            }
                                            .is-first{
                                                color: #3EACE1;
            }
                                            .is-second{
                                                color: #0CB1C8;
            }
                                            .is-third{
                                                color: #39B997;
            }
                                            .is-fourth{
                                                color: #40B86E;
            }
                                            .is-fifth{
                                                color: #52B848;
            }
                                            .icon-container{

                                                font - size: 4em;
                                            height: 70px;
                                            width: 70px;
            
            }
                                            .button.is-link.btn-more {
                                                text - decoration: none !important;
                                            line-height: 1.8;
                                            min-height: 38px;
                                            font-weight: 500;
                                            cursor: ponter;
            }
                                            .button.is-link {
                                                background: #39B997!important;
                                            color: #39B997;
            }
                                            .service-button{
                                                text - transform: capitalize;
                                            background-image: linear-gradient(90deg, #2DB3CD 0%, #54B960 100%)!important;
                                            color: #fff;
                                            border: none;
            }
                                            .service-button:hover, .service-button:active {
                                                background - image: linear-gradient(45deg, #2DB3CD 0%, #54B960 100%)!important;
                                            color: #fff;
            }
                                            .first-start-feature{

                                            }
                                            .service-cards{
                                                border - radius: .25rem;
                                            box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
                
            }
                                            a {
                                                color: #38B997;
                                                transition: color .2s ease-in;
            }
            a:hover, a:active{
                color: #3fd2ab;
            }
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
           
         `}</style>
            <img className="hero-shape-commerce" src="/cut-shape-v2.svg" alt="" style={{ position: "absolute", bottom: "0", width: "100%" }} />
        </div>
    );
}


export default Start