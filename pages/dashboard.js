import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent2";
import Head from "next/head";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the Profile Screen ("/profile") after 7 seconds
    const timer = setTimeout(() => {
      router.push("/profile");
    }, 7000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Head>
        <title>Dashboard - WIPOD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container3">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
