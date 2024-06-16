"use client";

import React from "react";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a passionate and experienced software developer with a strong foundation in web and mobile development. Skilled in modern technologies and frameworks, I am dedicated to delivering high-quality solutions and continuously learning new skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Pushpender",
    },
    {
      fieldName: "Experience",
      fieldValue: "3 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English & Hindi",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9999427547",
    },
    {
      fieldName: "Email",
      fieldValue: "pushp123kushwaha@gmail.com",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Experienced Web Developer skilled in advanced web development, testing, and debugging with a strong foundation in React.js, React Native, and Node.js. Proven ability to deliver high-quality solutions through seamless API integration, performance optimization, and adherence to best coding practices.",
  items: [
    {
      company: "Pie Infosystems",
      position: "Software Developer",
      duration: "2 Years 6 Months",
      responsibilities: [
        "Conducted reviews of application requirements and API integration requirements for various projects, ensuring seamless execution.",
        "Deepened understanding of best practices and emerging trends in React.js development through continuous learning and application in real-world projects.",
        "Worked on the Toywala Project, implementing new functionality and integrating new APIs across three distinct e-commerce and administration platforms.",
        "Led the development of projects at Grist India, designing, implementing, and testing various features while maintaining high-quality code standards.",
        "Worked on the Dailly Project, implementing new functionality and integrating new APIs across three distinct websites for customers, vendors, and administrators.",
        "End-to-end development of the Pepfuels React Native mobile application for iOS and Android, successfully integrating the back-end and implementing the Razorpay payment gateway.",
        "Demonstrated proficiency in React Native in the Vosita Project, designing the application and integrating APIs while optimizing performance through the Redux Toolkit.",
        "Worked on .NET for an asset management project, utilizing microservices and developing APIs for the backend, gaining basic knowledge in Angular for the front-end.",
      ],
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Detail-oriented and dedicated academic journey with a strong foundation in computer applications and software development.",
  items: [
    {
      institution: "Amity University",
      degree: "Master of Computer Applications (MCA)",
      duration: "2021-2023",
    },
    {
      institution: "Guru Gobind Singh Indraprastha University (GGSIPU)",
      degree: "Bachelor of Computer Applications (BCA)",
      duration: "2018-2021",
    },
    {
      institution: "Kalka Public School",
      degree: "High School Diploma",
      duration: "2018",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Proficient in a wide range of modern web development technologies and frameworks, ensuring high-quality and efficient solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-2 xl:py:0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx:0 gap-6">
            <TabsTrigger value="experience">Experince</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flx flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((items, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{items.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{items.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{items.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flx flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((items, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{items.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{items.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{items.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-cnter xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx:0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* About */}
            </TabsContent>
          </div>
        </Tabs>
      </div>{" "}
    </motion.div>
  );
};

export default Resume;
