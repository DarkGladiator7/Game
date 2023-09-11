import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilepic from "../../public/images/profile/profile.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import Education from "@/Components/Education";
import TransitionEffect from "@/Components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title>Ganesh K | About Page</title>
        <meta name="About Me" content="Explore about me" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 relative pr-20 sm:gap-8">
            <div className="md:relative col-span-3 gap-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 md:-right-9">
              <h2 className=" text-lg font-bold uppercase text-dark/75 dark:text-light/75 md:text-center md:relative md:w-full">
                Job Title:
              </h2>
              <p className="text-3xl md:text-center mb-3">Full Stack Developer</p>
              <h2 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75 md:text-center md:relative md:w-full">
                Job Description
              </h2>
              <p className="font-medium md:text-center">
              A full-stack developer is a versatile professional proficient in both front-end and back-end web development. They possess expertise in programming languages like JavaScript, HTML, and CSS for creating visually appealing and interactive user interfaces. Additionally, they are skilled in server-side scripting, databases, and server management, enabling them to design and implement the server infrastructure, manage databases, and handle data storage and retrieval. Full-stack developers bridge the gap between user experience and server functionality, making them capable of developing end-to-end web applications independently or as part of a team, with a comprehensive understanding of the entire development stack.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 md:p-4 md:-right-9">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilepic}
                alt="GaneshK"
                className="w-full rounded-2xl h-auto "
                priority
                sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,50vw"
              />
            </div>
            <div className="md:relative col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 md:-right-9 ">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={8} />
                  L+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Average Salary
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center md:mx-6">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={200} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Companies Recruting
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={500} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Users Working with Us
                </h2>
              </div>
            </div>
          </div>
          <Skills />

          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
