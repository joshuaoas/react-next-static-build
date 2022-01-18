import React from "react";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineCoffee } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";


const NotFoundPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.push("/");
    }, []);

    return (
        <>
            <Head>
                <title>404 | Paint</title>
                <meta name="description" content="" />
            </Head>
            <Layout>
                <div id="content-main-wrap" className="is-clearfix">
                    <div id="content-area" className="site-content-area">
                        <div id="content-area-inner" className="site-content-area-inner">
                            <section className="section works-list is-clearfix" style={{ background: "rgb(37, 176, 204)", color: "#fff" }}>
                                <div className="container">
                                    <br />
                                    <br />
                                    <div className="columns is-vcentered is-mobile is-centered">
                                        <div className="column is-half has-text-centered">
                                            <div className="content-404 content">
                                                <h1 style={{ color: "#fff", fontSize: "6em", marginBottom: "0" }}>404!</h1>
                                                <h2 style={{ color: "#fff", marginTop: "0" }}>PAGE NOT FOUND</h2>
                                                <p>The page you are looking for, doesn't seem to exist. take a coffee break with me , or back to Homepage. </p>
                                                <p>
                                                    <span className="icon">
                                                        <AiOutlineCoffee />
                                                    </span>
                                                </p>
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
        </>
    );
};

export default NotFoundPage;