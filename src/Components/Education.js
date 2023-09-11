import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl text-dark mb-32 w-full text-center dark:text-light md:text-5xl xs:4xl md:mb-16">
        RoadMap
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-items-start  xs:ml-2">
          <Details
            type="Frontend"
            time="2-3 months"
            
            info="Front-end development involves creating the user interface and experience. Required skills include proficiency in HTML, CSS, JavaScript, responsive design, and familiarity with front-end frameworks like React or Angular."
          />
          <Details
            type="Backend"
            time="1-2 months"
            
            info="Backend development involves server-side programming, database management, and server infrastructure setup. Key skills include proficiency in server-side languages (e.g., Node.js, Python), databases (SQL/NoSQL), and server management (e.g., AWS, Docker)."
          />
          <Details
            type="DevOps"
            time="3 months"
      
            info="DevOps is a software development approach that combines development and IT operations. Skills required include automation, containerization, continuous integration/continuous deployment (CI/CD), and collaboration for efficient software delivery and infrastructure management.
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
