import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/ExpenseTracker.png";
import project2 from "../../public/images/projects/Ecommerce.png";
import project3 from "../../public/images/projects/library.jpg";
import project4 from "../../public/images/projects/portfolio.png";
import project5 from "../../public/images/projects/gastro.jpg";
import project6 from "../../public/images/projects/food.png";
import TransitionEffect from "@/Components/TransitionEffect";

const FramerImage = motion(Image);

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
       rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2 "
          href={link}
          target={"_blank"}
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between  ">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg font-semibold hover:underline underline-offset-2 md:text-base"
          >
            Visit
          </Link>
          {/* <Link href={github} className="w-8 md:w-6" target={"_blank"}>
            {" "}
            <GithubIcon />{" "}
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 items-center justify-between rounded-3xl rounded-br-2xl p-12 border border-solid relative border-dark bg-light shadow-2xl dark:border-light dark:bg-dark">
      <div
        className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
       rounded-br-3xl xs:-right-2 sm:h-[101%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 lg:w-full  cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2 "
          href={link}
          target={"_blank"}
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm sm:font-normal ">{summary}</p>
        <div className="mt-2 flex items-center ">
          {/* <Link href={github} className="w-10" target={"_blank"}>
            {" "}
            <GithubIcon />{" "}
          </Link> */}
          <Link
            href={link}
            target={"_blank"}
            className=" rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Resource
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Ganesh K | Projects Page</title>
        <meta name="Projects" content="Explore my Projects" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                img={project1}
                title="TailwindCss Beginner Approach"
                summary="Developed a modern E-commerce website utilizing React JS, Tailwind CSS, and
                Firebase as the database. Implemented a sleek and intuitive user interface to
                enhance the online shopping experience, enabling seamless product browsing,
                secure transactions."
                link="https://ecommerce-website-hazel-three.vercel.app"
                type="Featured Course"
                github="https://github.com/DarkGladiator7/Ecommerce_Website"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                img={project2}
                title="ReactJs Intro"
                link="https://expense-tracker-alpha-ten.vercel.app"
                type="Course"
                github="https://github.com/DarkGladiator7/Expense_Tracker"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={project3}
                title="Gui Tkinter"
                link="https://github.com/DarkGladiator7/MagLibraryManagement"
                type="Course"
                github="https://github.com/DarkGladiator7/MagLibraryManagement"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={project4}
                title="NextJs A New Way"
                summary="Crafted with Next.js for seamless navigation, Tailwind CSS for stunning aesthetics, and Framer Motion for captivating animations, this site embodies the fusion of cutting-edge technology and design finesse. Explore a collection of my projects that exemplify innovation and dedication, as I strive to transform ideas into immersive digital experiences."
                link="https://ganeshkportfolio.vercel.app"
                type="Featured Course"
                github="https://github.com/DarkGladiator7/My-Portfolio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                img={project5}
                title="Deep Learning Module"
                link="https://github.com/DarkGladiator7/gastrointestinaldiseaseprediction"
                type="Course"
                github="https://github.com/DarkGladiator7/gastrointestinaldiseaseprediction"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                img={project6}
                title="Vanilla Javascript"
                link="https://food-order-page.vercel.app"
                type="Course"
                github="https://github.com/DarkGladiator7/FoodOrderPage"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
