



function StandardBanner(props) {
    return (
        <div>
            <div className="section is-medium parallax is-cover is-relative" style={{ backgroundImage: `url(/${props.image})`, backgroundAttachment: 'fixed', backgroundPosition: '50% 0px', backgroundSize: 'cover' }}><div className="parallax-overlay" style={{ backgroundColor: 'rgb(26,35,82)', opacity: '.7' }} />
                <div className="container">
                    <div className="py-6">
                        <div className="has-text-centered py-6 max-w-center max-w-740">
                            <h1 className="title is-light text-bold is-bigger" style={{ color: "#fff" }}>

                                Lorem ipsum dolor sit amet</h1>
                            <h2 className="subtitle is-5 no-margin-bottom is-light" style={{ color: "#fff" }}>
                                Ut vel hinc solet tincidunt, nec et iisque placerat pertinax. Ei minim probatus mea.
                            </h2>
                            <div className="buttons is-centered mt-20">
                                <a href="#product" className="button button-cta btn-align is-bold primary-btn">
                                    Talk To Us
                                </a>
                                <a href="#" className="button button-cta btn-align is-bold light-btn">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .parallax-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
                background-color: #333;
                opacity: .7;
            }

         `}</style>
        </div>
    );
}


export default StandardBanner

