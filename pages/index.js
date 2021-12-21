import Head from "next/head";

import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yunus İNAN | Home</title>
        <link rel="stylesheet" href="/favicon.ico" />
        <meta
          name="description"
          content="frontend developer projects personal website"
        ></meta>
      </Head>
      <div className="section1" id="about">
        <About></About>
      </div>
      <div className="section2" id="projects">
        <Projects></Projects>
      </div>
      <div className="section3" id="contact">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
}
