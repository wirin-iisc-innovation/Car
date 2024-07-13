import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import MainContent from '../components/alert_comp';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="container">
            <Head>
                <title>Car Dashboard</title>
                <meta name="description" content="Car dashboard interface" />
            </Head>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default Home;