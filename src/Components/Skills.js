import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold  flex items-center justify-center rounded-full absolute font-semibold cursor-pointer py-3 px-6 bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark dark:shadow-light "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 pb-4 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold cursor-pointer bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>

        <Link href="https://g-code-production.vercel.app" target={"_blank"}>
          {" "}
          <Skill name="Code & Learn" x="25vw" y="-15vw" />
        </Link>
        <Skill name="PostgreSQL" x="17vw" y="-15vw" />
        <Skill name="Tailwind" x="30vw" y="3vw" />
        {/* <Skill name="Machine Learning" x="19vw" y="5vw" /> */}
        <Skill name="Git" x="20vw" y="20vw" />
        <Skill name="HTML" x="-20vw" y="-2vw" />
        <Skill name="CSS" x="-7vw" y="-11vw" />
        <Skill name="REST Api" x="-5vw" y="23vw" />
        <Link href="https://react.dev/learn" target={"_blank"}>
          {" "}
          <Skill name="ReactJS" x="0vw" y="12vw" />
        </Link>

        <Link href="https://nextjs.org/docs" target={"_blank"}>
          <Skill name="NextJS" x="-30vw" y="-14vw" />
        </Link>
        {/* <Skill name="Web Design" x="-40vw" y="-5vw" /> */}
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        {/* <Skill name="Tailwind CSS" x="-7vw" y="-11vw" /> */}
      </div>
    </>
  );
};

export default Skills;
