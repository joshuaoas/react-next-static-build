import { ImLocation } from "react-icons/im";
import { HiPhoneOutgoing } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import Global from "../content/global_data.json"

function ContactBlocks(props) {
    return (
        <div>
            <section className="section get-in-touch contact-page is-clearfix gray-bg">
                <div className="container">

                    <div className="columns is-variable is-4 is-multiline ">
                        <div className="column is-4 aos-init aos-animate" data-aos="fade">
                            <div className="box-item ">
                                <a

                                    href="https://goo.gl/maps/39WMsnSFPS2Ti8gk8"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <span className="circle-link icon">
                                        <ImLocation />
                                    </span>
                                </a>
                                <h3>
                                    <a
                                        href="https://goo.gl/maps/39WMsnSFPS2Ti8gk8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Address</a>
                                </h3>
                                <p>{Global.contact.address1}</p>
                            </div>
                            {/* .box-item */}
                        </div>
                        <div className="column is-4 aos-init aos-animate" data-aos="fade">
                            <div className="box-item ">
                                <a

                                    title="Phone"
                                    href={'tel:' + Global.contact.phone}>
                                    <span className="circle-link icon">
                                        <HiPhoneOutgoing />
                                    </span>
                                </a>
                                <h3>
                                    <a
                                        title="Phone"
                                        href={'tel:' + Global.contact.phone}>Phone</a>
                                </h3>
                                <p>{Global.contact.phonepretty}</p>
                            </div>
                            {/* .box-item */}
                        </div>
                        <div className="column is-4 aos-init aos-animate" data-aos="fade">
                            <div className="box-item ">
                                <a
                                    href={'mailto:' + Global.contact.email + '?subject=Apartment Inquiry'}>
                                    <span className="circle-link icon">
                                        <MdEmail />
                                    </span>
                                </a>
                                <h3>
                                    <a href={'mailto:' + Global.contact.email + '?subject=Apartment Inquiry'}>Email</a>
                                </h3>
                                <p>{Global.contact.email}</p>
                            </div>
                            {/* .box-item */}
                        </div>
                    </div>
                    {/* .columns */}
                </div>
            </section>

            <style jsx>{`
            .get-in-touch {
                
                background-color: #f9f9f9;
                background-color: #efefef;
	background-image:
	linear-gradient(127deg, rgba(239, 239, 239, 0.62), rgba(239, 239, 239, 0.20)),
	url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23ececec' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%23ececec' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E");
            }
            .heading-title.style-1 {
                font-family: Roboto,sans-serif;
                padding-bottom: 0;
                margin-bottom: 2rem!important;
                font-weight: 500;
                font-size: 36px;
                font-size: 2.25rem;
                letter-spacing: 0;
            }
            .box-item {
                background-color: #fff;
                padding: 60px 30px 50px;
                text-align: center;
                -webkit-transition: all .4s ease;
                transition: all .4s ease;
            }
            a {
                color: #f05b29;
                cursor: pointer;
                text-decoration: none;
            }
            .box-item .icon {
                width: 85px;
                height: 85px;
                border-radius: 100%;
                background-color: rgb(37, 176, 204);
                color: #fff;
                margin-bottom: 32px;
                -webkit-transition: all .4s ease;
                transition: all .4s ease;
            }
            .box-item h3 {
                font-size: 24px;
                font-size: 1.5rem;
                font-weight: 500;
                text-transform: capitalize;
                letter-spacing: 0;
                -webkit-transition: all .4s ease;
                transition: all .4s ease;
                color: #2fdbff;
            }
            .box-item h3:not(:last-child), .subtitle:not(:last-child), .title:not(:last-child) {
                margin-bottom: 1.5rem;
            }
            .box-item p {
                color: #a6a6a6;
                font-size: 15px;
                font-size: .9375rem;
                margin-bottom: 28px;
            }
            .get-in-touch .box-item p {
                margin-bottom: 15px;
            }
            .box-item h3 a {
                color: rgb(24, 110, 128); 
            }
            .circle-link{
                transition: all 0.3s ease;
            }
            .circle-link:hover, .circle-link:active{
                transform: scale(1.1);
            }
         `}</style>
        </div>
    );
}


export default ContactBlocks