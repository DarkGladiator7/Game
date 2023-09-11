import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import Layout from "@/Components/Layout";
import Link from "next/link";
import { LinkArrow } from "@/Components/Icons";
import AnimatedText from "@/Components/AnimatedText";
import styled from "styled-components";
import Hero1 from "@/Components/Hero1";
import TransitionEffect from "@/Components/TransitionEffect";

const Container = styled.div`
  height: 80vh;
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
const codeandlearn = () => {
  return (
    <Layout className=" ">
      <TransitionEffect />
      <Container className="relative top-2">
        <Hero1 className=" w-1/2 top-2" />
      </Container>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className=" absolute ml-36 flex flex-col  items-center justify-center  top-20 pt-20 mt-36 text-center"
      >
        <AnimatedText
          className=" 2xl:!text-7xl md:!text-7xl s:!text-6xl xs:!text-5xl"
          text="Welcome to Our G-Code"
        />

        <AnimatedText
          className="!text-base !font-medium  2xl:!text-small md:!text-7xl s:!text-6xl xs:!text-5xl"
          text="Click the button to navigate"
        />
        <button>
          <Link
            href="https://leet-rust.vercel.app/"
            target={"_blank"}
            className=" flex items-center text-center mt-3 mb-36 bg-dark text-light p-2.5 px-4 rounded-lg md:p-2 md:px-4 md:text-base sm:text-sm
                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
          >
            Jump Around
            <LinkArrow className={"w-3 ml-1 sm:!w-5"} />
          </Link>
        </button>
      </motion.div>
    </Layout>
  );
};

export default codeandlearn;
