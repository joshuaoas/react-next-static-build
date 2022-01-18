import { BsCheckAll } from "react-icons/bs";

function APTFeatures(props) {
    return (
        <>
            <section className="features section" style={{ background: "rgb(24, 110, 128)", paddingTop: "50px", paddingBottom: "50px" }}>
                <div className="container content">
                    <div className="columns">
                        <div className="column is-12">
                            <div className="container content">
                                <h1 style={{ color: "#fff" }}>Features</h1>
                                <div className="columns is-multiline">

                                    {props.features.map((feature, index) => (
                                        <div className="column is-4 flex-class" key={index}>
                                            <div className="feature">
                                                <BsCheckAll style={{ color: "rgb(24, 110, 128)" }} />
                                                <p>{feature.feature}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
         @media only screen and (max-width: 768px) {
            .column{
                padding: 5px;
            }
        }
         
  `}</style>
        </>
    );
}


export default APTFeatures