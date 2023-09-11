import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import TransitionEffect from "@/Components/TransitionEffect";
import Head from "next/head";
import React from "react";

const analytics = () => {
  return (
    <>
      <Head>
        <title>Ganesh K | Arictles Page</title>
        <meta name="Articles" content="Explore my Articles" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 min-h-screen flex flex-col">
          <AnimatedText
            className="mb-16 2xl:!text-9xl md:!text-7xl s:!text-6xl xs:!text-5xl"
            text="Under Development:)"
          />
          
        </Layout>
      </main>
    </>
  );
};

export default analytics;
