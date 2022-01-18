import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from "next/head"
import TopCallBanner from './TopCallBanner'




import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";




const Layout = ({ children }) => (
  <div>
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/static/img/favicon.ico" />
        <meta charSet="utf-8" />
        <meta property="og:url" content="https://site.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Website" />

        <meta property="og:description" content="" />

        <meta property="og:image" content="" />
        {/*
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://skylightapts.com/" />
      <meta name="twitter:title" content="Skylight Apartments" />
      <meta name="twitter:description" content="Spacious 3 and 4 Bedroom Student Apartments on State Street in Madison, WI with a Variety of Floor Plans and Sizes" />
      <meta name="twitter:image" content="https://skylightapts.com/static/img/skylight-student-apartments-madison-wi-state-street-og.jpg" />
      */}
        <meta name="format-detection" content="telephone=no" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
      </Head>
      <TopCallBanner />
      <Navbar />

      <main>{children}</main>
      <Footer />
      {
        process.browser ? (
          <div className="social-share-buttons">
            <EmailShareButton className="social-button" url={window.location.href}><EmailIcon size={32} round={true} /></EmailShareButton>
            <FacebookShareButton className="social-button" url={window.location.href}><FacebookIcon size={32} round={true} /></FacebookShareButton>
            <TwitterShareButton className="social-button" url={window.location.href}><TwitterIcon size={32} round={true} /></TwitterShareButton>
            <WhatsappShareButton className="social-button" url={window.location.href}><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
          </div>

        ) : null}
      <style jsx>{`
    .social-share-buttons{
      z-index: 900;
      background: #fff;
      border-radius: 5px;
      width: 42px;
      height: auto;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      padding: 5px 5px 0;
    }
    @media only screen and (min-width: 1025px) {
      .social-share-buttons{
        position: fixed;
        right: 5px;
        top: calc(50% - 100px);
        
        
      }
    }
    @media only screen and (max-width: 1024px) {
      .social-share-buttons{
        position: fixed;
        bottom: 5px;
        left: calc(50% - 95px);
        height: 42px;
        width: 190px; 
        display: flex;   
        justify-content: space-between;  
      }
      .social-share-buttons .social-button{
        margin-right: 5px!important;      
      }

    }
      
    `}</style>
    </html>
  </div>
)

export default Layout
