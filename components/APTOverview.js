import { GiHouseKeys } from "react-icons/gi";
import { GiResize } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { MdKitchen } from "react-icons/md";
import { GiPaintRoller } from "react-icons/gi";
import { GiLargePaintBrush } from "react-icons/gi";
import { GiPaintBrush } from "react-icons/gi";
import { GiPaintBucket } from "react-icons/gi";
import { GoCheck } from "react-icons/go";
import showdown from 'showdown'

import { GiToolbox } from "react-icons/gi";
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSwatchbook } from 'react-icons/fa'
import { motion } from "framer-motion";
import Global from "../content/global_data.json"
import JsxParser from 'react-jsx-parser'

function BgIcon(props) {
    return (
        <>
            {props == 'GiPaintRoller' ? <GiPaintRoller className="is-first" /> : null}
            {props == 'GiLargePaintBrush' ? <GiLargePaintBrush className="is-second" /> : null}
            {props == 'GiPaintBrush' ? <GiPaintBrush className="is-third" /> : null}
            {props == 'GiToolbox' ? <GiToolbox /> : null}
            {props == 'FaSwatchbook' ? <FaSwatchbook /> : null}
            {props == 'FaHardHat' ? <FaHardHat /> : null}
        </>
    );
}

function APTOverview(props) {
    const converter = new showdown.Converter()

    const listItems = props.sellingPoints.map((item, i) =>
        <div index={i} className="icon-group">
            <GoCheck style={{ marginRight: "5px", color: "#39B997" }} />
            <span style={{ fontWeight: "700" }}>{item.feature}</span>
        </div>
    );

    return (
        <>
            <section className="top-info-wrap section" style={{ paddingTop: "100px", paddingBottom: "50px" }}>

                <div className="container is-reverse-skewed-sm">
                    {/* Title */}
                    <div className="section-title-wrapper has-text-centered">

                        <div className="bg-number">{BgIcon(props.icon)}</div>

                        <h2 className="section-title-landing">
                            {props.heading}
                        </h2>
                        <h4>{props.subtitle}</h4>
                    </div>
                    {/* Content */}
                    <div className="content-wrapper">
                        <div className="columns is-vcentered">
                            <div className="column is-7">
                                <div className="side-feature-text">
                                    <h2 className="feature-headline is-clean">{props.contentTitle}</h2>
                                    <div id="bodyCopy" dangerouslySetInnerHTML={{ __html: converter.makeHtml(props.contentBody) }}></div>
                                </div>
                            </div>
                            {/* Card with icons */}
                            <div className="column is-4 is-offset-1">
                                <div className="flex-card company-types">
                                    {listItems}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <style jsx>{`
         .button {
             border-radius: 0!important;
             border: none;
             transition: all .3s ease-out;

         }
         .button:hover{
             transform: scale(1.05);
         }
         .button:active{
             transform: scale(1.05);
         }
         .button-wrap{
             text-align: center;
         }
         @media only screen and (max-width: 768px) {
            .button-wrap{
                text-align: left;
                display: block;
            }
        }
        .icon-container{
            text-align: center;
            font-size: 4em;
            height: 90px;
            width: 90px;
            border-radius: 50%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin: 0 auto;
            background: #f5f6fa;  
        }
        .section-title-wrapper .section-title-landing {
            color: #363636;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;
        }
        .section-title-wrapper h4 {
            font-family: "Nexa Light",sans-serif;
            font-weight: 300;
            font-size: 1.2rem;
            color: #999;
        }
        .side-feature-text {
            padding-top: 10px;
        }

        .section .feature-headline {
            color: #3BABE0 !important;
            line-height: 1;
            padding: 5px 0;
            margin-bottom: 0 !important;
            font-weight: 700;
        }
        .side-feature-text p {
            color: #444f60;
            margin-bottom: 12px;
        }
        .button.primary-btn {
            outline: none;
            border-color: #8c8cf9;
            background-color: #8c8cf9;
            color: #fff;
            -webkit-transition: all .5s;
            transition: all .5s;
        }

.section-title-wrapper .bg-number, .section-title-wrapper .bg-symbol {
    position: absolute;
    text-align: center;
    font-weight: bolder;
    top: -20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    font-size: 160px;
    z-index: 0;
    opacity: .1;
    color: #636262;
    width: 160px;
    height: 160px;
    line-height: 160px;
}
         
  `}</style>
            <img className="hero-shape-footer" src="/cut-shape-v8.svg" alt="" style={{ marginBottom: '-10px' }}></img>
        </>
    );
}


export default APTOverview