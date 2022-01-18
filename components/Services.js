

import { AiOutlineAntDesign } from 'react-icons/ai'
import Link from 'next/link'
import showdown from 'showdown'





function Services(props) {
    const converter = new showdown.Converter()

    return (
        <div>
            <section id="services" className="section watch-video is-clearfix">
                <div className="container">
                    <br />
                    <div className="columns is-8 is-multiline is-12-mobile">
                        <div className="column is-6-desktop is-12-mobile aos-init aos-animate" data-aos="fade">
                            <div className="image-wrap">

                                <img alt="PaintWorks Interior and Exterior Painting services Gilbert Arizona" src={"/" + props.features.feature2.feature2Image} />


                            </div>


                        </div>
                        <div className="column is-6-desktop is-12-mobile has-text-centered aos-init aos-animate" data-aos="fade-up">
                            <h2 className="heading-title style-3 has-text-left darkgreen" style={{ marginBottom: "0!important" }}>{props.features.feature2.feature2Headline}</h2>
                            <p className="has-text-left" dangerouslySetInnerHTML={{ __html: converter.makeHtml(props.features.feature2.feature2Copy) }}></p>
                            <div className="has-text-left">
                                <div className="pt-10 pb-10" style={{ textAlign: "left" }}>
                                    <a href={props.features.feature2.feature2CTATarget} className="button btn-align btn-more is-link service-button" style={{ marginBottom: '10px', width: "184.16px" }}>
                                        <AiOutlineAntDesign style={{ marginRight: "10px" }} /> {props.features.feature2.feature2CTA}
                                    </a>
                                </div>
                            </div>




                        </div>
                    </div>


                </div>
            </section >

            <style jsx>{`
        .heading-title-top {
            padding-bottom: 10px;
            font-size: 17px;
            font-size: 1.0625rem;
            text-transform: capitalize;
            color: #f05b29;
            letter-spacing: 0;
            font-weight: 400;
        }
        .heading-title {
            line-height: 1.1;
            font-size: 34px;
            letter-spacing: 0;
            margin-bottom: 1.2rem!important;
            font-weight: 400;
        }
        .watch-video p:not(.heading-title-top) {
            font-size: 18px;
            padding-bottom: 18px;
            color: rgba(84,86,89,.7);
        }
     
        .watch-video .works-latest {
            position: relative;
        }
        .works-latest .works-latest-item img {
            position: relative;
            -webkit-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
            display: block;
        }
        .watch-video .works-latest .works-latest-item .works-latest-item-icon {
            top: 57%;
            left: 57%;
        }
        .works-latest .works-latest-item .works-latest-item-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            width: auto;
            color: #fff;
        }
        a {
            color: #f05b29;
            cursor: pointer;
            text-decoration: none;
        }
        .watch-video .boxes-style-5 .box-item {
            padding: 10px 0 10px;
            text-align: left;
        }
        a {
            color: #f05b29;
            cursor: pointer;
            text-decoration: none;
        }
        .watch-video .boxes-style-5 .box-item h3 {
            font-size: 22px;
            margin-bottom: .8rem;
        }
        .watch-video .boxes-style-5 .box-item p {
            font-size: 17px;
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
            cursor: ponter;
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

         `}</style>
        </div >
    );
}


export default Services