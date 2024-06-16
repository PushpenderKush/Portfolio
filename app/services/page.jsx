"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const lists = [
  {
    num: "01",
    title: "Full-Stack Development",
    description: "Utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) for building dynamic and robust web applications",
    href: "",
  },
  {
    num: "02",
    title: "Front-End Development",
    description: "Specializing in React.js for creating interactive user interfaces using Redux, React Hooks, and React Router",
    href: "",
  },
  {
    num: "03",
    title: "Back-End Development",
    description: "Proficient in Node.js and Express.js for developing server-side logic and RESTful APIs.",
    href: "",
  },
  {
    num: "04",
    title: "React Native Development",
    description: "Building cross-platform mobile applications for both iOS and Android using React Native.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80h] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {lists.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
