import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Car Dashboard</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400&display=swap" rel="stylesheet" />
            </Head>
            <div className="container">
                <Header />
                <MainContent />
                <Footer />
            </div>
        </>
    );
}
