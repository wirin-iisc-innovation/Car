// pages/diag.tsx or pages/diag/index.tsx (choose one based on your file structure)
import React from "react";
import Head from "next/head";
import MainContent from "../components/diag/MainContent2";
import Footer from "../components/Footer";

const Diag: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/globals.css" />
        <title>WIPO</title>
      </Head>

      <MainContent />
      <Footer />
    </div>
  );
};

export default Diag; // Export the correct component
