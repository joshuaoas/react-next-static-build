import { BiBuildingHouse } from "react-icons/bi";
import { motion } from "framer-motion";
import { GiPaintRoller } from "react-icons/gi";
import { GiLargePaintBrush } from "react-icons/gi";
import { GiPaintBrush } from "react-icons/gi";
import { GiPaintBucket } from "react-icons/gi";
import { GiToolbox } from "react-icons/gi";
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSwatchbook } from 'react-icons/fa'
import { FaPhoneAlt } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import Global from "../content/global_data.json"

function SecondBanner(props) {
    return (
        <>
            <div
                className="hero full-width-image-container margin-top-0 bg-center mb0 has-animated-waves waves-bottom waves-primary"

                style={{ backgroundImage: `url(/${props.featuredimage})`, backgroundPosition: 'center', position: 'relative', display: 'block', minHeight: '600px' }}
            >
                <div className="color-overlay" ></div>

                <img className="hero-shape-footer" src="/cut-shape-v3.svg" alt="" style={{ position: 'absolute', bottom: '-10px' }}></img>

                {props.available ? (
                    <span className="tag" style={{
                        marginLeft: "auto", background: "#cc543beb", color: "#fff", fontSize: "1rem", position: "absolute", top: "10px", right: "10px"
                    }}>
                        Available
                    </span>
                ) : null
                }
                <div
                    className="mx-auto relative"
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                        background:
                            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "100px 0",
                    }}
                >
                    <section className="banner-content">
                        <div className="container has-text-centered">
                            <div className="columns is-vcentered">
                                <div className="column is-7 signup-column has-text-left">
                                    <h1 className="title main-title text-bold is-1 white"
                                        style={{ textTransform: "uppercase!important", textShadow: "rgb(24 110 128) 3px 2px!important", overflowWrap: "break-word" }}>
                                        {props.title}
                                    </h1>
                                    <h2 className="subtitle is-5 no-margin-bottom body-color white">
                                        {props.subtitle}
                                    </h2>

                                    <div className="buttons">
                                        <a id="contact1" href={"tel:" + Global.contact.phone} className="button button-cta btn-align primary-btn z-index-2 scroll-link">
                                            <FaPhoneAlt style={{ marginRight: "5px" }} />{" "}{props.cta1title}
                                        </a>
                                        <a id="contact2" href={props.cta2target} className="button button-cta btn-align z-index-2">
                                            <GrServices style={{ marginRight: "5px" }} />{" "}{props.cta2title}
                                        </a>
                                    </div>

                                </div>
                                <div className="column is-5">
                                </div>
                            </div>
                        </div>

                    </section>
                </div>



            </div>

            <style jsx>{`
            @media(max-width: 1023px) {
                .banner-content{
                    padding: 1.5rem!important;
                }
            }
             .color-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
                background: rgba(37, 176, 204, 0.3);
            }
    .apt-title{
        text-transform: uppercase;
        text-shadow: rgb(24 110 128) 3px 2px;
        overflow-wrap: break-word;
    }  
    .button{
        margin-right: 10px!important;
    }
    .has-animated-waves.waves-bottom .animated-waves {
        bottom: 0;
    }  
    .has-animated-waves .animated-waves {
        position: absolute;
        left: 0;

        width: 100%;
    } 
    .has-animated-waves {
        position: relative;
        z-index: 10;
    }
    .animated-waves .waves {
        position: relative;
        width: 100%;
        height: 15vh;
        margin-bottom: -7px;
        min-height: 100px;
        max-height: 250px;
    }
    .has-shape-layer-1 {
        overflow: hidden
    }
    
    .has-shape-layer-1 .shape-layer {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        z-index: 0
    }
    
    .has-shape-layer-2 {
        overflow: hidden
    }
    
    .has-shape-layer-2 .shape-layer {
        position: absolute;
        bottom: 0;
        right: 0;
        display: block;
        z-index: 0
    }
    
    .has-animated-waves {
        position: relative;
        z-index: 10
    }
    
    .has-animated-waves.waves-top .animated-waves {
        top: 0
    }
    
    .has-animated-waves.waves-bottom .animated-waves {
        bottom: 0
    }
    
    .has-animated-waves .animated-waves {
        position: absolute;
        left: 0;
        width: 100%
    }
    
    .has-animated-waves .animated-waves.is-reversed {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }
    
    .waves-primary .animated-waves .parallax > use:first-child {
        fill: rgba(255, 255, 255, .7) !important
    }
    
    .waves-primary .animated-waves .parallax > use:nth-child(2) {
        fill: rgba(255, 255, 255, .5) !important
    }
    
    .waves-primary .animated-waves .parallax > use:nth-child(3) {
        fill: rgba(255, 255, 255, .3) !important
    }
    
    .waves-primary .animated-waves .parallax > use:nth-child(4) {
        fill: #fff !important
    }
    
    .waves-primary .animated-waves .parallax > use:last-child {
        fill: rgba(255, 255, 255, .7) !important
    }
    
    .animated-waves .waves {
        position: relative;
        width: 100%;
        height: 15vh;
        margin-bottom: -7px;
        min-height: 100px;
        max-height: 250px
    }
 /* 
    .animated-waves .parallax > use {
        -webkit-animation: move-forever 60s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
        animation: move-forever 60s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite
    }
 */
    .animated-waves .parallax > use:nth-child(1) {
        -webkit-animation-delay: -2s;
        animation-delay: -2s;
        -webkit-animation-duration: 7s;
        animation-duration: 7s
    }
    
    .animated-waves .parallax > use:nth-child(2) {
        -webkit-animation-delay: -3s;
        animation-delay: -3s;
        -webkit-animation-duration: 10s;
        animation-duration: 10s
    }
    
    .animated-waves .parallax > use:nth-child(3) {
        -webkit-animation-delay: -4s;
        animation-delay: -4s;
        -webkit-animation-duration: 13s;
        animation-duration: 13s
    }
    
    .animated-waves .parallax > use:nth-child(4) {
        -webkit-animation-delay: -5s;
        animation-delay: -5s;
        -webkit-animation-duration: 20s;
        animation-duration: 20s
    }
    
    @-webkit-keyframes move-forever {
        0% {
            -webkit-transform: translate3d(-90px, 0, 0);
            transform: translate3d(-90px, 0, 0)
        }
    
        100% {
            -webkit-transform: translate3d(85px, 0, 0);
            transform: translate3d(85px, 0, 0)
        }
    }
    
    @keyframes move-forever {
        0% {
            -webkit-transform: translate3d(-90px, 0, 0);
            transform: translate3d(-90px, 0, 0)
        }
    
        100% {
            -webkit-transform: translate3d(85px, 0, 0);
            transform: translate3d(85px, 0, 0)
        }
    }
    
    @media(max-width: 768px) {
        .animated-waves .waves {
            height: 40px;
            min-height: 40px
        }
    
        .animated-waves .content {
            height: 30vh
        }
    
        .animated-waves h1 {
            font-size: 24px
        }
    }
    
    @-webkit-keyframes gradientBG {
        0% {
            background-position: 0% 50%
        }
    
        50% {
            background-position: 100% 50%
        }
    
        100% {
            background-position: 0% 50%
        }
    }
    
    @keyframes gradientBG {
        0% {
            background-position: 0% 50%
        }
    
        50% {
            background-position: 100% 50%
        }
    
        100% {
            background-position: 0% 50%
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
        #apt-title{
            font-size: 6em!important;
            line-height: 1;
        }
        .main-title{
            text-transform: uppercase!important;
        text-shadow: rgb(24 110 128) 3px 2px!important;
        overflow-wrap: break-word;
        }
        #contact1{
            margin-right: 10px!important;
        }
        #contact2{
            margin-right: 10px!important;
        }
        
        
       
    }
    `}</style>



        </>
    );
}


export default SecondBanner