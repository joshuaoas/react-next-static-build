import React from "react";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";


const thanks = () => {
    const router = useRouter()


    return (
        <>
            <Head>
                <title>Thank You | Skylight Aparments</title>
                <meta name="description" content="Skylight Apartments on State street in Madison, WI feature sizable floorplans, as well as easy access to campus and unique shopping. It is a fantastic, secure, and meticulously kept property for off-campus UW Madison student living." />
            </Head>
            <Layout>
                <div id="content-main-wrap" className="is-clearfix">
                    <div id="content-area" className="site-content-area">
                        <div id="content-area-inner" className="site-content-area-inner">
                            <section className="section works-list is-clearfix" style={{ color: "#3aa1ce", backgroundColor: "#f5f6fa" }}>
                                <div className="container">
                                    <br />
                                    <br />
                                    <div className="columns is-vcentered is-mobile is-centered">
                                        <div className="column is-half has-text-centered">
                                            <div className="content-404 content">
                                                <h1 style={{ color: "#3aa1ce", fontSize: "6em", marginBottom: "0" }}>Thank You!</h1>
                                                <p >

                                                    <AiOutlineMail style={{ fontSize: "4em" }} />

                                                </p>
                                                <h2 style={{ marginTop: "0" }}>We will be in contact soon!</h2>


                                                <Link href="/">
                                                    <a className="button">
                                                        <span className="icon" style={{ marginRight: "5px" }} >
                                                            <AiOutlineHome />
                                                        </span>
                                                        <span style={{ marginLeft: "5px" }}>Homepage</span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br /> </div>
                            </section>
                        </div>
                        {/* #content-area-inner */}
                    </div>
                    {/* #content-area */}
                </div>
            </Layout>
            <style jsx>{`
        .bg1{
            background-color: #25b0cc;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cg fill='%23219eb8' fill-opacity='.5'%3E%3Cpath transform='rotate(-93.6 0 600)' d='M431.9 536.25c-13.67-52.13-68.32-47.42-145.37-136.3c-59.25-68.34-56.96-105.75-101.31-120.92 c-42.46-14.52-70.11 11.02-147.27 37.93c-152.39 53.17-192.12 5.05-266.43 55.26c-68.91 46.56-120.87 146.13-99.55 236.14 c23.27 98.25 123.76 142.58 180.12 167.44c153.61 67.76 356.96 52.81 485.34-61.53C355.3 698.36 451.86 612.36 431.9 536.25z'/%3E%3Cpath transform='rotate(93.6 0 600)' d='M196.55 465.84c-90.54-17.3-113.94 38.74-193.99 14.2c-67.21-20.61-83.96-70.31-148.47-67.95 c-9.24 0.34-50.97 1.86-72.38 30.92c-27.81 37.74-5.68 100.66 23.88 135.11c42.11 49.07 110.39 53.32 132.86 54.72 c32.39 2.01 33.13-5.17 57.45-0.65c25.2 4.68 50.32 17.22 109.52 74.64c66.56 64.56 153.43 44.1 200-18.76 c32.59-43.98 48.88-65.97 48.42-89.36C352.63 538.31 272.56 480.37 196.55 465.84z'/%3E%3Cpath transform='rotate(-93.6 0 600)' d='M30.75 398.67c-192.12 64.68-304.79 212.97-316.63 360.86c-11.84 147.89 201.82 239.63 456.07 158.53 c155.5-49.6 320.92-126.2 370.79-311.26C590.38 423.5 197.7 342.47 30.75 398.67z'/%3E%3Cpath transform='rotate(93.6 0 600)' d='M236.27 523.63C187.71 453.38 95.85 417.38 64.84 334.17c-13.59-36.49-13.11-79.52-38.09-109.39 c-46.03-55.02-135.49-30.28-190.56-5.01c-64.7 29.7-120.44 81.94-142.66 150.86c-24.44 75.82 5.54 166.65 31.68 239.14 c48.17 133.55 144.62 316.13 315.74 274.25c72.68-17.79 131.33-73.73 170.42-135.43C254.55 680.44 286.92 596.9 236.27 523.63z'/%3E%3C/g%3E%3C/svg%3E");
            background-size: cover;
        }
      
    `}</style>

        </>
    );
};

export default thanks;