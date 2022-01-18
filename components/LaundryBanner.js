function LaundryBanner(props) {
    return (
        <div>
            <section className="section" style={{ position: "relative", display: "block", background: "#fff" }}>
                <div className="container">


                    <div className="columns" style={{ position: 'relative' }}>
                        <div className="column is-4 aos-init aos-animate" data-aos="fade-up">
                            <div className="work-item">
                                <img src={"/" + props.image} />
                            </div>
                        </div>
                        <div className="column is-8 aos-init aos-animate" data-aos="fade-up">
                            <div className="work-item">
                                <br />
                                <h2>{props.title}</h2>
                                <p>{props.body}</p>
                            </div>
                        </div>

                    </div>

                </div></section>

            <style jsx>{`

            img{
                box-shadow: 11px 10px 0px -4px rgb(37 176 204);
            }
         `}</style>
        </div>
    );
}


export default LaundryBanner