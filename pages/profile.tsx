import React from "react";
import ProfileCarousel from "../components/ProfileCarousel";
import Head from "next/head";

const Profile = () => {
return (
    <>
    <Head>
        <title>Profile - WIPOD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
        href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400&display=swap"
        rel="stylesheet"
        />
    </Head>
    <ProfileCarousel />
    </>
);
};

export default Profile;