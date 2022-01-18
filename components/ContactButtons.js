import Global from "../content/global_data.json"

function ContactButtons(props) {
    return (
        <div>
            <div className="dflex h100 dflex-center dflex-middle">
                <div style={{ textAlign: 'center' }}>
                    <div>
                        <a href={'tel:' + Global.contact.phone} className="button is-primary" style={{ marginBottom: '10px' }}>
                            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span style={{ marginLeft: '5px' }}>Schedule a Showing</span>
                        </a>
                    </div>

                    <div>
                        <a href={'mailto:' + Global.contact.email + '?subject=Apartment Inquiry'} className="button is-primary" style={{ marginBottom: '10px' }}>
                            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span style={{ marginLeft: '5px' }}>Schedule a Showing</span>
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .button {
                    transition: all .3s ease-out;  
                }
                .button:hover{
                    transform: scale(1.05);
                }
                .button:active{
                    transform: scale(1.05);
                }
         `}</style>
        </div>
    );
}


export default ContactButtons