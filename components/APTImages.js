import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';



export default class APTImages extends Component {
    constructor(props) {

        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            photos: []
        };
    }

    componentDidMount() {
        if (this.props.aptimages.images && this.props.aptimages.images.length) {
            this.props.aptimages.images.map((pic, index) => (
                this.state.photos.push("/" + pic.image)
            ));
        }
    }


    render(props) {
        const { photoIndex, isOpen } = this.state;

        let images = this.state.photos;

        return (
            <div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}


                <section className="section">
                    <div className="container content">
                        <div className="columns">
                            <div className="column is-12">
                                {/*
                                <div style={{ marginBottom: "3rem", background: "#fff", padding: "50px", fontSize: "1.2em", borderRadius: ".25rem", boxShadow: "0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)" }} dangerouslySetInnerHTML={{ __html: this.props.description }} />
                              
                                    <p style={{ marginBottom: "3rem", background: "#fff", padding: "20px", fontSIze: "1.6rem" }}>{this.props.description}</p>
                        */}
                                {this.props.aptimages.images && this.props.aptimages.images.length ? (
                                    <div className="event-images">
                                        <main style={{ marginBottom: "25px" }}>

                                            {this.props.aptimages.images.map((pic, index) => (
                                                <article key={index} onClick={() => this.setState({ isOpen: true })} style={{ cursor: "pointer" }}>
                                                    <img
                                                        key={index}
                                                        src={"/" + pic.image}
                                                        alt={pic.text}
                                                        className="mb0"
                                                        style={{ boxShadow: "0 0.5em 1em -0.125em rgb(10 10 10 / 2%), 0 0 0 1px rgb(10 10 10 / 2%)" }}
                                                    />
                                                </article>
                                            ))}

                                        </main>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </section>
                
                }
            </div>
        );
    }
}

/*

function APTImages(props) {
    return (
        <section className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-12">
                        <p style={{ marginBottom: "3rem", background: "#fff", padding: "50px", fontSIze: "1.4rem" }}>{props.description}</p>
                        <div className="event-images">
                            <main style={{ marginBottom: "25px" }}>

                                {props.aptimages.images.map((pic, index) => (
                                    <article key={index} >
                                        <img
                                            key={index}
                                            src={pic.image}
                                            alt={pic.text}
                                            className="mb0"
                                            style={{ boxShadow: "0 0.5em 1em -0.125em rgb(10 10 10 / 2%), 0 0 0 1px rgb(10 10 10 / 2%)" }}
                                        />
                                    </article>
                                ))}

                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

*/

//export default APTImages