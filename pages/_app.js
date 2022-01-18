// import App from 'next/app'
import "../assets/styles/app.css"
import 'react-image-lightbox/style.css';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp