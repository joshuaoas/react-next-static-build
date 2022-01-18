import { BiBuildingHouse } from "react-icons/bi";
import { motion } from "framer-motion";

function DifferenceBanner(props) {
    return (
        <>
            <div
                className="margin-top-0 bg-center mb0"

                style={{ backgroundImage: `url(${props.featuredimage})`, backgroundPosition: 'center', backgroundSize: "cover", backgroundColor: "#197487" }}
            >
                <div
                    className="mx-auto relative gradientOverlay"
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                        background:
                            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <div className="section">
                        <div className="container">
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
                                            delay: 0.2,
                                        },
                                    },
                                }}
                            >
                                <div style={{
                                    background: "rgba(37, 176, 204, 0.3)", padding: "20px"
                                }}>

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
                                                    delay: 0.3,
                                                },
                                            },
                                        }}
                                    >
                                        <h1 style={{
                                            textTransform: "uppercase", textShadow: "3px 2px #186e80", wordWrap: "break-word",
                                        }} className="title is-size-1 has-text-weight-bold is-bold-light white mb0 dflex banner-heading interior-heading"
                                        >
                                            {props.title}
                                        </h1>

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
                                                    delay: 0.4,
                                                },
                                            },
                                        }}
                                    >
                                        <h4 className="white" style={{ wordWrap: "break-word" }}>
                                            {props.subtitle}
                                        </h4>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        @media only screen and (max-width: 1024px) {
            .interior-heading{
                font-size: 2rem!important;
            }
        }
        @media only screen and (min-width: 1025px) {
            .interior-heading{
                font-size: 3rem!important;
            }
        }
        `}</style>
        </>
    );
}


export default DifferenceBanner