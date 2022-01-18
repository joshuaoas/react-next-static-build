const APTFloorPlan = (props) => {

    return (

        <section className="floor-plan section" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <div className="container content">
                <div className="columns">
                    <div className="column is-12">
                        <h1 style={{ color: "rgb(24, 110, 128)" }}>
                            Apartment Floor Plan
                        </h1>
                        <div className="layout-wrapper" style={{ textAlign: "center" }}>
                            <img src={"/" + props.image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default APTFloorPlan;