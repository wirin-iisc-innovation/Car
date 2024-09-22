import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import MainContent from "../components/maincontent6";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container3">
      <Head>
        <title>Car Dashboard</title>
        <meta name="description" content="Car dashboard interface" />
      </Head>
      <Header />
      <div className="main-layout">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
