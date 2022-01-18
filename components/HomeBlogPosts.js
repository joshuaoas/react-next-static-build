import ContactButtonsWhite from './ContactButtonsWhite';
import { motion } from "framer-motion";
import Link from 'next/link'
import Slider from "react-slick";




function HomeBlogPosts(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <img className="hero-shape-footer" src="/cut-shape-v7.svg" alt="" style={{ width: "100%" }} />
            <div className="section is-small" style={{ background: "#f5f6fa", marginTop: "-20px" }}>
                <div className="container">
                    {/* Title */}
                    <div className="section-title-wrapper has-text-centered">
                        <div className="bg-number">&bdquo;</div>
                        <h2 className="section-title-landing">
                            Our Clients love us.
                        </h2>
                        {/*
                        <h4>Check out what they say about us</h4>
                        */}
                    </div>


                    <div className="content-wrapper">
                        <div className="columns">
                            <div className="column" />
                            <div className="column is-6">

                                <Slider {...settings}>
                                    {props.testimonials.map((quote, index) => (
                                        <div key={index} className="flex-card card-overflow raised">
                                            <h5>{quote.quote}</h5>
                                            <h6 style={{ textAlign: "right" }}>- {quote.customer}</h6>
                                        </div>


                                    ))}



                                </Slider>



                            </div>
                            <div className="column" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .section-title-wrapper {
                    padding: 20px 0 20px 0;
                }
                .section-title-wrapper .bg-number {
                    top: -55px;
                }
                .section .title.section-title {
                    font-size: 2.7rem;
                    color: #a9abac;
                    font-weight: bold;
                    font-family: "Nexa Bold",sans-serif;
                }
                .section-title-wrapper .section-title {
                    font-family: "Nexa Bold",sans-serif;
                    margin-bottom: 1.5rem;
                }
                section-title-wrapper .section-title-landing {
                    font-family: "Nexa Bold",sans-serif;
                    font-size: 2.7rem;
                    color: #444f60;
                }
                .section-title-wrapper h4 {
                    font-family: "Nexa Light",sans-serif;
                    font-weight: 300;
                    font-size: 1.2rem;
                    color: #999;
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
                .flex-card{
                    /*box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);*/
                    position: relative;
                    background-color: #fff;
                    border: 1px solid #fcfcfc;
                    border-radius: 4px;
                    display: inline-block;
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    margin-bottom: 20px;
                    -webkit-transition: all .5s;
                    transition: all .5s;
                    padding: 20px;
                    height: 100%;
                }
           
                
            `}</style>


            {/*

            <section className="section" style={{ background: "#f5f6fa", marginTop: "-10px" }}>
                <div className="blog-section">
                    <div className="container">

                        <h3 style={{ lineHeight: "1.2", color: "#1A2352", marginBottom: "0" }}>Paintworks Blog</h3>
                        <p style={{ marginBottom: "20px" }}>Keep up with painting tips and recent updates on how we’ve helped our clients!</p>
           
                        <div >
                     
                            <motion.ul variants={container} initial="hidden" animate="show" className="columns is-multiline">
                                {props.postsList.map((post) => (
                                    <motion.li key={post.slug} variants={listItem} className="column is-4">
                                        <div>
                                          
                                            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                                                <div className="card blog-grid-item is-masonry masonry-size-2">
                                                    <div className="card-image" style={{ minHeight: "200px", maxHeight: "200px", overflow: "hidden" }}>
                                                        <img className="item-featured-image" src={post.attributes.thumbnail} alt="skylight student apartments madison wisconsin state street" />

                                                    </div>
                                                    <div className="card-content">
                                                        <div className="featured-post-title">

                                                            <div className="title-meta">
                                                                <h5 className="post-title" style={{
                                                                    display: "flex", alignItems: "center",
                                                                }}>
                                                                    {truncateTitle(post.attributes.title)}

                                                                </h5>
                                                            </div>
                                                        </div>



                                                        <p style={{ display: "flex" }}>
                                                            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                                                                <a className="read-more-link" style={{ marginLeft: "auto" }}>
                                                                    View Details <span>⟶</span>
                                                                </a>
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </motion.li>


                                ))}
                            </motion.ul>

                        </div>
                    </div>
            
                </div>
                <style jsx>{`
                a{
                    color: #38B997;
                }
           
                
            `}</style>
            </section>
            */}
        </div>
    );
}


export default HomeBlogPosts


