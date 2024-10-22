import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const MainContent = () => {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <main className="main-content">
                
                <div className="mode-buttons">
                    <Link href="/start1">
                        <div className="mode-button">
                            <img src="/images_mode/Drive Glow.svg" alt="Drive Icon" />
                        </div>
                    </Link>
                    <Link href="/start2">
                    <div className="mode-button">
                        <img src="/images_mode/parked.svg" alt="Parked Icon" />
                    </div>
                    </Link>
                    <Link href="/start">
                        <div className="mode-button">
                            <img src="/images_mode/auto.svg" alt="Auto Icon" />
                        </div>
                    </Link>
                </div>
                
                
            </main>
        </>
    );
};

export default MainContent;