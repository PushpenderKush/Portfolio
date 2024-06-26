"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/assets/cv.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-20">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>

            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Pushpender Kushwaha</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Experienced Web Developer skilled in advanced web development, testing, and debugging with a strong foundation in React.js, React Native, and Node.js. Proven ability to deliver
              high-quality solutions through seamless API integration, performance optimization, and adherence to best coding practices. Collaborative team player with a passion for continuous
              learning and staying up-to-date with emerging technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* btn and socials */}
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" onClick={handleDownloadCV}>
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
