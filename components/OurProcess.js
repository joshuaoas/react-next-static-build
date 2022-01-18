import { BiTimer } from "react-icons/bi"
import { MdDetails } from "react-icons/md"
import { BsAward } from "react-icons/bs"


function OurProcess(props) {
    return (
        <div>
            <div className="section is-app-grey is-medium">
                <div className="container">
                    {/* Title */}
                    <div className="centered-title">
                        <h2>{props.heading}</h2>
                    </div>
                    {/* Process steps */}
                    <div className="content-wrapper">
                        <div className="columns is-vcentered">
                            {/* Process step */}
                            <div className="column is-4">
                                <div className="process-block has-line">
                                    <div className="process-icon is-icon-reveal">
                                        <div className="icon-wrapper">
                                            <BsAward />
                                            <div className="process-number">1</div>
                                        </div>
                                    </div>
                                    <div className="process-info">
                                        <div className="step-number">1</div>
                                        <div className="details">
                                            <div className="motto"><h3>{props.title1}</h3></div>
                                            <p className="description">{props.copy1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Process step */}
                            <div className="column is-4">
                                <div className="process-block has-line">
                                    <div className="process-icon is-icon-reveal">
                                        <div className="icon-wrapper">
                                            <BiTimer />

                                            <div className="process-number">2</div>
                                        </div>
                                    </div>
                                    <div className="process-info">
                                        <div className="step-number">2</div>
                                        <div className="details">
                                            <div className="motto"><h3>{props.title2}</h3></div>
                                            <p className="description">{props.copy2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Process step */}
                            <div className="column is-4">
                                <div className="process-block">
                                    <div className="process-icon is-icon-reveal">
                                        <div className="icon-wrapper">
                                            <MdDetails />
                                            <div className="process-number">3</div>
                                        </div>
                                    </div>
                                    <div className="process-info">
                                        <div className="step-number">3</div>
                                        <div className="details">
                                            <div className="motto"><h3>{props.title3}</h3></div>
                                            <p className="description">{props.copy3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .section.is-app-grey {
                background-color: #f5f6fa;
            }
            .centered-title {
                text-align: center;
            }
            .section .content-wrapper {
                padding-top: 40px;
            }
            .process-block {
                position: relative;
                text-align: center;
            }
            .process-block .process-icon {
                position: relative;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                font-size: 5rem;
            }
            .process-block .process-icon .icon-wrapper {
                position: relative;
                width: 180px;
                height: 180px;
                border-radius: 50%;
                background: #fff;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            .process-block .process-number {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                font-size: 14px;
                font-weight: bolder;
                position: absolute;
                top: 13px;
                right: 0;
                background: #3BABE0;
                color: #fff;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            .process-block .process-info {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            .process-block .process-info .step-number {
                font-size: 8rem;
                font-weight: bolder;
                color: #ededed;
                margin-right: 15px;
            }
            .process-block .process-info .details {
                text-align: left;
            }

         `}</style>
        </div>
    );
}


export default OurProcess



