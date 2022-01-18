function MeetTheTeam(props) {
    return (
        <div>
            <div id="main-hero" className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column is-6 is-offset-3 has-text-centered is-subheader-caption">
                            <h1 className="title is-2">
                                Meet The Team
                            </h1>
                            <h2 className="subtitle">Get to know our company and our team.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="columns is-vcentered is-multiline pb-6">
                        <div className="column is-8 is-offset-2 is-relative is-centered-portrait">
                            {/* 16by9 video */}
                            <img className="has-light-shadow" src="https://via.placeholder.com/1920x1280" data-demo-src="/assets/img/demo/hero-14.jpeg" alt="" />
                        </div>
                        <div className="column is-4 is-offset-2">
                            <div className="side-title mb-10">
                                <h3 className="title is-5">Our Story</h3>
                            </div>
                            <p className="side-paragraph is-size-6 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eodem modo is enim tibi nemo dabit, quod,
                                expetendum sit, id esse laudabile.
                            </p>
                        </div>
                        <div className="column is-4">
                            <div className="side-title mb-10">
                                <h3 className="title is-5">How We Work</h3>
                            </div>
                            <p className="side-paragraph is-size-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eodem modo is enim tibi nemo dabit, quod,
                                expetendum sit, id esse laudabile.
                            </p>
                        </div>
                        <div className="column is-4 is-offset-2">
                            <div className="side-title mb-10">
                                <h3 className="title is-5">Our Process</h3>
                            </div>
                            <p className="side-paragraph is-size-6 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eodem modo is enim tibi nemo dabit, quod,
                                expetendum sit, id esse laudabile.
                            </p>
                        </div>
                        <div className="column is-4">
                            <div className="side-title mb-10">
                                <h3 className="title is-5">Our Values</h3>
                            </div>
                            <p className="side-paragraph is-size-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eodem modo is enim tibi nemo dabit, quod,
                                expetendum sit, id esse laudabile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    {/* Title */}
                    <div className="centered-title">
                        <h2>Leadership Team</h2>
                    </div>
                    {/* Wrapper */}
                    <div className="content-wrapper pb-6">
                        <div className="team-members-wrap">
                            <div className="columns is-multiline is-flex-portrait">
                                {/*User*/}
                                <div className="column is-3">
                                    <div className="rounded-team-member">
                                        <div className="avatar-wrap">
                                            <img className="avatar" src="https://via.placeholder.com/250x250" alt="" data-demo-src="assets/img/avatars/helen.jpg" />
                                        </div>
                                        <h3>Helen Miller</h3>
                                        <p>CEO</p>
                                    </div>
                                </div>
                                {/*User*/}
                                <div className="column is-3">
                                    <div className="rounded-team-member">
                                        <div className="avatar-wrap">
                                            <img className="avatar" src="https://via.placeholder.com/250x250" alt="" data-demo-src="assets/img/avatars/nick.jpg" />
                                        </div>
                                        <h3>Nick Motta</h3>
                                        <p>Founder</p>
                                    </div>
                                </div>
                                {/*User*/}
                                <div className="column is-3">
                                    <div className="rounded-team-member">
                                        <div className="avatar-wrap">
                                            <img className="avatar" src="https://via.placeholder.com/250x250" alt="" data-demo-src="assets/img/avatars/lakisha.jpg" />
                                        </div>
                                        <h3>Lakisha Williams</h3>
                                        <p>Sales Lead</p>
                                    </div>
                                </div>
                                {/*User*/}
                                <div className="column is-3">
                                    <div className="rounded-team-member">
                                        <div className="avatar-wrap">
                                            <img className="avatar" src="https://via.placeholder.com/250x250" alt="" data-demo-src="assets/img/avatars/alex.jpg" />
                                        </div>
                                        <h3>Alex Walsh</h3>
                                        <p>Product Lead</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <style jsx>{`

         `}</style>
        </div>
    );
}


export default MeetTheTeam