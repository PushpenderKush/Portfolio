/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`.trim(),
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again or email directly.");
    }
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
            {status === "success" ? (
              <div className="p-10 bg-[#27272c] rounded-xl text-white">
                <h3 className="text-4xl text-accent">Thank you!</h3>
                <p className="text-white/60 mt-4">Your message has been sent successfully. I'll get back to you soon.</p>
                <Button
                  className="mt-6"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">I'd love to hear from you! Whether you have a project in mind, a question, or just want to connect — feel free to reach out.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required />
                  <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                  <Input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required />
                  <Input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
                </div>
                <Textarea className="h-[200px]" placeholder="Type your message here. *" name="message" value={formData.message} onChange={handleChange} required />

                {/* Error message */}
                {status === "error" && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                <Button
                  type="submit"
                  size="md"
                  className="max-w-40"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
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
