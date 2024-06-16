/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 99994 27547",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "pushp123kushwaha@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "New Delhi, Delhi 110019",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    setSubmitted(true);
    // You can replace the above line with a call to your backend API to store the data
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-2"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            {!submitted ? (
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">dhgsd jhgdjashgd jhsagdjhad jasgdasdas djhasjha sdjdgja sdhajhdg ahsgd</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" name="firstName" placeholder="FirstName" value={formData.firstName} onChange={handleChange} />
                  <Input type="text" name="lastName" placeholder="LastName" value={formData.lastName} onChange={handleChange} />
                  <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                  <Input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
                </div>
                <Textarea className="h-[200px]" placeholder="Type your message here." name="message" value={formData.message} onChange={handleChange} />
                <Button type="submit" size="md" className="max-w-40">
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="p-10 bg-[#27272c] rounded-xl text-white">
                <h3 className="text-4xl text-accent">Thank you!</h3>
                <p className="text-white/60 mt-4">Your message has been sent. We will get back to you soon.</p>
              </div>
            )}
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
