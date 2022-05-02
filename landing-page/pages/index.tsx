import Head from "next/head";
import type { NextPage } from "next";

import HomePage from "../components/containers/home-page";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>intuiguide | Home</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
