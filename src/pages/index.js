import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/1222.png";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/Components/Icons";
import HireMe from "@/Components/HireMe";
import bulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import { motion } from "framer-motion";
import TransitionEffect from "@/Components/TransitionEffect";
import styled from "styled-components";
import React, { useState } from "react";
import Modal from "react-modal";

import Hero from "../components/Hero";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default function Home() {
  const FramerImage = motion(Image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleOptionClick = (selectedOption) => {
    // Handle the selected option here
    console.log(`Selected option: ${selectedOption}`);
    closeModal(); // Close the modal after selection
  };

  const modalContent = (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, type: "spring" },
      }}
      className="  min-w-[45vw] gap-4 flex flex-col justify-between z-30  items-center fixed top-1/2 left-1/2 rounded-2xl  -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75  backdrop-blur-md py-10"
    >
      <h2 className="text-4xl dark:text-dark text-light font-semibold mb-4 text-center ">
        {" "}
        Today&apos;s Questionaire!!
      </h2>

      <AnimatedText
        text="What is the purpose of the if statement in Python?"
        className="!text-2xl !text-left !text-center
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!5xl sm:!text-3xl md:relative md:left-1.5 dark:!text-dark !text-light"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => handleOptionClick("Option 1")}
        className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg md:p-2 md:px-4 md:text-base sm:text-sm
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
      >
        A) To define a function
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => handleOptionClick("Option 2")}
        className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg md:p-2 md:px-4 md:text-base sm:text-sm
                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
      >
        B) To loop through a list
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => handleOptionClick("Option 3")}
        className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg md:p-2 md:px-4 md:text-base sm:text-sm
                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
      >
        C) To make decisions and execute code conditionally
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => handleOptionClick("Option 4")}
        className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg md:p-2 md:px-4 md:text-base sm:text-sm
                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
      >
        D) To declare a variable
      </motion.button>
      <button
        onClick={closeModal}
        className="text-light/90 dark:text-dark/90 hover:underline"
      >
        Close
      </button>
    </motion.div>
  );
  return (
    <>
      <Head>
        <title>G-Edu</title>
        <meta
          name="GaneshK's - Portfolio"
          content="Dive into the captivating portfolio of GaneshK"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Container>
                <Hero />
              </Container>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Passion Powers Education: A Gamified Journey"
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!5xl sm:!text-3xl md:relative md:left-1.5"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs md:left-0.5 md:relative">
                Embark on a thrilling educational journey where learning is
                gamified. Dive into interactive lessons, conquer coding
                challenges, and level up your skills with us. Join our vibrant
                community of learners and experience knowledge acquisition like
                never before. Start your quest for expertise today!
              </p>
              <div className=" flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume.pdf"
                  target={"_blank"}
                  className="flex flex-row  items-center bg-dark text-light p-2.5 px-8 rounded-lg md:p-2 md:px-4 md:text-base sm:text-sm
                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Sign In
                  <LinkArrow className={"!w-3 ml-1 sm:!w-5"} />
                </Link>
                <Link
                  href="mailto:ganeshkrishnadoss@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base sm:text-[14.5px]   "
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <Modal
            className=" w-full flex justify-between items-center"
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Quiz Modal"
            ariaHideApp={false} // Disable the aria-hidden attribute
          >
            {modalContent}
          </Modal>
        </Layout>
        {/* <HireMe /> */}
        <div className="absolute right-5 bottom-3 inline-block w-24 md:hidden">
          <button onClick={openModal}>
            <FramerImage
              src={bulb}
              alt="DG7"
              whileHover={{ scale: 1.05, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full h-auto cursor-pointer "
            ></FramerImage>
          </button>
        </div>
      </main>
    </>
  );
}
