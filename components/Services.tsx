"use client";

import React from "react";
import { motion } from "framer-motion";

import { MdOutlinePsychology, MdFamilyRestroom } from "react-icons/md";
import { FaHandsHelping, FaChild } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { GiHealing } from "react-icons/gi"; 

const services = [
  {
    icon: <MdOutlinePsychology className="w-10 h-10 text-primary" />,
    title: "Anxiety & Stress Management",
    desc: "Personalized techniques to help you regain calm, clarity, and emotional balance.",
  },
  {
    icon: <FaHandsHelping className="w-10 h-10 text-accent" />,
    title: "Depression Care",
    desc: "Compassionate support designed to help you heal and rediscover hope.",
  },
  {
    icon: <MdFamilyRestroom className="w-10 h-10 text-primary" />,
    title: "Relationship & Family Support",
    desc: "Guidance to improve communication, understanding, and healthy connections.",
  },
  {
    icon: <FaChild className="w-10 h-10 text-accent" />,
    title: "Children & Teen Counseling",
    desc: "A safe environment for young minds to express, grow, and feel supported.",
  },
  {
    icon: <TbTargetArrow className="w-10 h-10 text-primary" />,
    title: "Personal Growth Coaching",
    desc: "Empowering you to build confidence, resilience, and your best self.",
  },
  {
    icon: <GiHealing className="w-10 h-10 text-accent" />,
    title: "Trauma & Healing Support",
    desc: "Gentle, supportive therapy to help you heal emotionally and restore inner peace.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Professional Support for Every Need
          </h2>
          <p className="text-soft max-w-2xl mx-auto">
            Compassionate mental health services designed to guide and support your well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="
                bg-white 
                rounded-3xl 
                p-6 
                shadow-md 
                hover:shadow-[0_8px_25px_rgba(121,180,169,0.35)]
                transition-all 
                border 
                border-primary/20 
                hover:border-primary
                text-center
              "
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-dark mb-2">
                {service.title}
              </h3>

              <p className="text-soft text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
