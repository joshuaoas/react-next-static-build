import React, { useState, useEffect } from "react";
import Layout from '../components/layout'
import { attributes, html } from '../content/home.md'
import { motion } from "framer-motion";
import Head from "next/head";
import Welcome from "../components/Welcome";
import Services from "../components/Services";
import HomeBanner from "../components/HomeBanner"
import Start from "../components/Start"
import HomeBlogPosts from "../components/HomeBlogPosts";


const importBlogPosts = async () => {
  const markdownFiles = require
    .context('../content/blogPosts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/blogPosts/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}


function Home({ postsList }) {
  //const Home = ({ postsList }) => (
  useEffect(() => {
    //console.log('This only runs once');
    //console.log(attributes.servicesSection);
  }, [])

  return (
    < >
      <Head>
        <title>{attributes.title} | Site</title>
        <meta name="description" content={attributes.pageDesc} />
      </Head>
      <Layout style={{ overflow: "hidden" }}>
        <HomeBanner image={attributes.homebanner.homeBannerImage} logo={attributes.homebanner.homeBannerLogo} tagline={attributes.homebanner.homeBannerSubtitle} slogan={attributes.homebanner.homeBannerTagline} cta1title={attributes.homebanner.cta1title} cta2title={attributes.homebanner.cta2title} cta2target={attributes.homebanner.cta2target} />
        <Start features={attributes.features} serviceData={attributes.servicesSection} />
        <Welcome features={attributes.features} />
        <motion.div
          style={{ originY: 1 }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1.6,
              },
            },
          }}
        >
          <Services features={attributes.features} details={attributes.details} />



        </motion.div>
        <HomeBlogPosts postsList={postsList} testimonials={attributes.testimonials} />
        <style jsx>{`
      h1,
      div {
        text-align: center;
      }
      #business-types{
        background: #25b0cc;
        color: #fff;
      }
      .absolute-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 580px;
        background: #8c8cf9;
        background: linear-gradient(
    -45deg
    , #ad5cff, #8c8cf9, #8c8cf9, #ad5cff);
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        -webkit-transition: all .3s;
        transition: all .3s;
    }
      .absolute-header .header-inner {
        position: relative;
        height: 100%;
        width: 100%;
      }
      .absolute-header .header-inner .cut-circle {
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: auto;
      }
      .section .feature-headline {
        line-height: 1.2;
        padding: 5px 0;
        margin-bottom: 0 !important;
      }
      #business-types{
        background-color: #25b0cc;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' width='100%25' height='200' viewBox='0 0 1600 100'%3E%3Cpath fill='%2322a3bd' d='M1600 100 0 0 1600 0Z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 100% 200px;
      background-position: top center;
      }
      @media only screen and (min-width: 1025px) {
        .top-banner-inside{
          padding: 250px 0;
        }
      }
      @media only screen and (max-width: 1024px) {
        .top-banner-inside{
          padding: 150px 0;
        }
      }
    `}</style>
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const postsList = await importBlogPosts()
  const sortedPosts = postsList.slice().sort((a, b) => new Date(a.date) - new Date(b.date)).reverse().slice(0, 3);

  return {
    props: {
      postsList: sortedPosts
    }
  }
}

export default Home
