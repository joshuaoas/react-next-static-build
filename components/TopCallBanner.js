import Global from "../content/global_data.json"

function TopCallBanner(props) {
    return (
        <div className="bg">
            <h5 style={{ marginBottom: '0' }}><a href={'tel:' + Global.contact.phone}>[ Free Estimates {Global.contact.phonepretty} ]</a></h5>



            <style jsx>{`
                .bg{
                    background-image: linear-gradient(90deg, #3CACE1 0%, #52B848 100%);
                    color: #fff;
                    text-align:center;
                    padding: 10px;
                    background: #1a2352;
                }
                h5 a {
                    color: #fff;
                    transition: color .5s ease-out;
                }
                h5 a:hover{
                    color: #3eace1;
                }
                h5 a:active{
                    color: #3eace1;
                }
         `}</style>
        </div>
    );
}


export default TopCallBanner

