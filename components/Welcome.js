import { AiOutlineAntDesign } from 'react-icons/ai'
import Link from 'next/link'
import showdown from 'showdown'


function Welcome(props) {
    const converter = new showdown.Converter()

    return (
        <div style={{ position: "relative", display: "block", marginTop: "-4px", overflow: "hidden" }}>
            <section id="welcome" className="section introduction is-clearfix" style={{ paddingTop: "3rem", paddingBottom: "rem", position: "relative", display: "block" }}>
                <div className="container">

                    <div className="columns">


                        <div className="column is-6-desktop is-12-mobile">
                            <h2 className="heading-title style-3 has-text-left" style={{ marginBottom: "0!important" }}>{props.features.feature1.feature1Headline}.</h2>
                            <p style={{ color: "#fff" }} dangerouslySetInnerHTML={{ __html: converter.makeHtml(props.features.feature1.feature1Copy) }}></p>

                            <div>

                                <Link href={props.features.feature1.feature1CTATarget}>
                                    <a className="button btn-align btn-more is-link service-button" style={{ marginBottom: '10px', width: "184.16px" }}>

                                        <AiOutlineAntDesign />
                                        <span style={{ marginLeft: '5px' }}>{props.features.feature1.feature1CTA}</span>

                                    </a>
                                </Link>

                            </div>
                        </div>
                        <div className="column is-6-desktop is-12-tablet aos-init" data-aos="fade-left">
                            <div style={{ position: "relative", display: "block" }}>


                                <div className="image-wrap">
                                    <img src={"/" + props.features.feature1.feature1Image} alt="" />
                                </div>


                                <div className="everything-shape shape-1"></div>
                                <div className="everything-shape shape-3"></div>



                            </div>

                        </div>


                    </div>
                    <br />
                    <br />

                    <div className="columns reverse-columns">


                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* fix these breaks */}
            </section>
            <style jsx>{`
            .clip-svg {
                /*clip-path: circle(100px at center);*/
                clip-path: url(#myClip);
            }
            #welcome{
                background: #3BABE0; 
                color: #fff;
                position: relative;
                display: block;
            }


                .heading-title {
                    line-height: 1.1;
                    font-size: 34px;
                    letter-spacing: 0;
                    margin-bottom: 1.2rem!important;
                    font-weight: 400;
                }
                p:not(.heading-title-top) {
                    font-size: 18px;
                    padding-bottom: 18px;
                    color: rgba(84,86,89,.7);
                }
                .call-to-action.style-5 {
                    padding-top: 7rem;
                    padding-bottom: 7rem;
                }
                .has-background-secondary-2 {
                    background-color: #212121!important;
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
                .call-to-action.style-1 .title, .call-to-action.style-2 .title, .call-to-action.style-5 .title {
                    text-transform: capitalize;
                }
                .call-to-action.style-5 .heading span {
                    font-size: 75px;
                    margin-left: -20px;
                }
                .call-to-action.style-5 .button {
                    background-color: #d39e56;
                }
                .masked-image {
                    position: relative;
                    max-width: 450px;
                    margin: 0 auto;
                    mask-mode: alpha;
                }
                .masked-image .main-image {
                    display: block;
                }
                .masked-image .image-mask {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    width: 100%;
                    height: 100%;
                }
                .everything-shape.shape-1 {
                    width: 288px;
                    height: 288px;
                    background-color: rgba(255,255,255,0.1);
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
                    bottom: -30%;
                    right: 10%;
                }
                .everything-shape.shape-3 {
                    width: 288px;
                    height: 288px;
                    background-color: rgba(255,255,255,0.1);
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
                    bottom: -50%;
                    right: 30%;
                }
                .everything-shape.shape-2 {
                    width: 288px;
                    height: 288px;
                    background-color: rgba(255,255,255,0.1);
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
                    top: -30%;
                    left: 0;
                }
                .everything-shape.shape-4 {
                    width: 288px;
                    height: 288px;
                    background-color: rgba(255,255,255,0.1);
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
                    top: -50%;
                    left: 30%;
                }
                .everything-shape {
                    position: absolute;
                }
                .image-wrap{
                    max-height: 400px;
                    overflow: hidden;
                    border-radius: 8px;
                    position: relative;
                    z-index: 1000;
                }
                .button.is-link.btn-more {
                    text-decoration: none !important;
                    line-height: 1.8;
                    min-height: 38px;
                    font-weight: 500;
                }
                .button.is-link {
                    background: #39B997!important;
                    color: #39B997;
                }
                .service-button{
                    text-transform: capitalize;
                    background-image: linear-gradient(90deg, #2DB3CD 0%, #54B960 100%)!important;
                    color: #fff;
                    border: none;
                }
                .service-button:hover, .service-button:active {
                    background-image: linear-gradient(45deg, #2DB3CD 0%, #54B960 100%)!important;
                    color: #fff;
                }
                @media(max-width: 767px) { /* <== You can change this break point as per your  needs */
                    .reverse-columns {
                      flex-direction: column-reverse;
                      display: flex;
                    }
                  }      
               
            `}</style>

            <img className="hero-shape-commerce" src="/cut-shape-v5.svg" alt="" style={{ position: "absolute", bottom: "-4px", width: "100%" }} />
        </div>
    );
}


export default Welcome


