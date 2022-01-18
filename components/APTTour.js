import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import Link from 'next/link'
import Global from "../content/global_data.json"

function APTTour(props) {
    return (
        <>
            <section className="tour section">
                <div className="container content">
                    <section>
                        <div className="container">
                            <div className="columns">
                                <div className="column is-12">
                                    <div className="columns is-vcentered">
                                        <div className="column is-4">
                                            <h2
                                                className="title is-spaced mb0"
                                                style={{ color: "rgb(24, 110, 128)" }}
                                            >
                                                We are now offering video and virtual tours!
                                            </h2>
                                            <p className="subtitle">
                                                Don't forget to ask about our awesome specials for
                                                students! Call or text 608.270.3575 to schedule a showing today!
                                            </p>



                                            <div >
                                                <a
                                                    className="button showing-btn"
                                                    href={'tel:' + Global.contact.phone}
                                                    style={{ marginBottom: "10px", color: "#fff" }}
                                                >
                                                    <FiPhone />{" "}
                                                    <span style={{ marginLeft: "5px" }}>
                                                        Schedule a Showing
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="button is-primary">
                                                <FiMail />{" "}

                                                <a href={'mailto:' + Global.contact.email + '?subject=Apartment Inquiry'}>
                                                    <span style={{ marginLeft: "5px", color: "#fff", textDecoration: "none" }}>
                                                        Schedule a Showing
                                                    </span>
                                                </a>

                                            </div>
                                        </div>
                                        <div className="column is-8">


                                            <div
                                                className="video-container"
                                                dangerouslySetInnerHTML={{ __html: props.walkthrough }}
                                            ></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
         
  `}</style>
        </>
    );
}


export default APTTour