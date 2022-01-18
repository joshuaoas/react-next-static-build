import fs from 'fs'
import path from 'path'
import Layout from '../../components/layout'
import Head from "next/head";


import APTBanner from "../../components/APTBanner"
import APTImages from "../../components/APTImages"
import APTOverview from "../../components/APTOverview"
import { motion } from "framer-motion";
import ContactForm2 from '../../components/Contact2'




const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delay: 0.8,
        }
    }
};

const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};

const Service = ({ aptpost }) => {
    if (!aptpost) return <div>not found</div>

    const { html, attributes } = aptpost


    //console.log(attributes.aptimages.images);

    return (
        <>
            <Head>
                <title>{attributes.title} | PaintWorks</title>
                <meta name="description" content={attributes.pageDesc} />
            </Head>
            <Layout>



                <APTBanner featuredimage={attributes.featuredimage} title={attributes.title} subtitle={attributes.subtitle} available={attributes.available} cta1title={attributes.cta1title} cta2title={attributes.cta2title} cta2target={attributes.cta2target} />


                <APTOverview
                    heading={attributes.serviceOverview.heading}
                    subtitle={attributes.serviceOverview.subtitle}
                    contentTitle={attributes.serviceOverview.contentTitle}
                    contentBody={attributes.serviceOverview.contentBody}
                    icon={attributes.serviceOverview.icon}
                    sellingPoints={attributes.features}
                    html={attributes.serviceOverview.contentBody}
                />



                <section style={{ padding: "0", background: '#3BABE0' }}>

                    <motion.div
                        style={{ originY: 1 }}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                scale: 1,
                                opacity: 0,
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: 0.6,
                                },
                            },
                        }}
                    >

                        {
                            attributes.aptimages.images && attributes.aptimages.images.length ? <APTImages description={html} aptimages={attributes.aptimages} /> : null
                        }


                    </motion.div>


                    { /*
                    {attributes.features.length ? (
                        <motion.div
                            style={{ originY: 1 }}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: 1,
                                    opacity: 0,
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.7,
                                    },
                                },
                            }}
                        >
                            <APTFeatures features={attributes.features} />
                        </motion.div>
                    ) : null}

                    <motion.div
                        style={{ originY: 1 }}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                scale: 1,
                                opacity: 0,
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: 0.8,
                                },
                            },
                        }}
                    >
                        <APTFloorPlan image={attributes.layoutimage} />
                    </motion.div>
                    <motion.div
                        style={{ originY: 1 }}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                scale: 1,
                                opacity: 0,
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: 0.9,
                                },
                            },
                        }}
                    >
                        <APTTour walkthrough={attributes.walkthrough} />
                    </motion.div>
                    */}

                    <motion.div
                        style={{ originY: 1 }}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                scale: 1,
                                opacity: 0,
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: 1,
                                },
                            },
                        }}
                    >
                        <img className="hero-shape-footer" src="/cut-shape-v7.svg" alt="" style={{ marginBottom: '-10px' }}></img>


                        <ContactForm2 formCopy={attributes.formCopy} />
                        {/*
                        <LaundryBanner title={attributes.laundry.laundrytitle} body={attributes.laundry.laundrybody} image={attributes.laundry.laundryimage} />
                         */}
                    </motion.div>
                    {/*
                <PostContent content={content} />
                */}
                </section >




            </Layout >
            <style jsx>{`
                article {
                margin: 0 auto;
                }
                h1 {
                text-align: center;
                }
                .floor-plan{
                    padding: 100px 0 50px;
                }
        `}</style>
        </>
    )
}

export async function getStaticPaths() {
    const paths = fs
        .readdirSync(path.join(process.cwd(), 'content/services'))
        .map((aptName) => {
            const trimmedName = aptName.substring(0, aptName.length - 3)
            return {
                params: { slug: trimmedName },
            }
        })

    return {
        paths,
        fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params

    const aptpost = await import(`../../content/services/${slug}.md`).catch(
        () => null
    )

    return {
        props: {
            aptpost: aptpost.default,
        },
    }
}

export default Service