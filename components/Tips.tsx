"use client";

import React, { useState } from "react";
import { WiWindy, WiDaySunny } from "react-icons/wi";
import { MdDoNotDisturbOn } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";

export default function Tips() {
  const [activeTip, setActiveTip] = useState(0);

  const tips = [
    {
      title: "Deep Breathing Exercises",
      content: "Take slow, mindful breaths to calm your nervous system and reduce stress instantly.",
      icon: <WiWindy className="w-10 h-10 text-primary" />,
    },
    {
      title: "Morning Sunlight",
      content: "Expose yourself to gentle sunlight to boost your mood and regulate sleep.",
      icon: <WiDaySunny className="w-10 h-10 text-accent" />,
    },
    {
      title: "Digital Detox",
      content: "Take short breaks from screens to improve focus and emotional clarity.",
      icon: <MdDoNotDisturbOn className="w-10 h-10 text-primary" />,
    },
    {
      title: "Journaling Your Thoughts",
      content: "Express your emotions in writing to gain clarity and emotional release.",
      icon: <LuNotebookPen className="w-10 h-10 text-accent" />,
    },
    {
      title: "Better Sleep Rituals",
      content: "Create a calming nighttime routine to improve sleep quality and mental well-being.",
      icon: <FaMoon className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section id="tips" className="scroll-mt-20 max-w-6xl mx-auto px-4 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Daily Self-Care Tips</h2>
        <p className="text-soft max-w-2xl mx-auto">
          Simple, mindful habits you can practice each day to improve your mental well-being.
        </p>
      </div>

      {/* Tip Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {tips.map((tip, index) => (
          <button
            key={index}
            onClick={() => setActiveTip(index)}
            className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center text-center
              ${activeTip === index ? "bg-white shadow-lg border-b-4 border-primary" : "bg-white/70 hover:bg-white"}
            `}
          >
            <div className="mb-2">{tip.icon}</div>
            <h3 className="font-medium text-dark text-sm md:text-base">{tip.title}</h3>
          </button>
        ))}
      </div>

      {/* Active Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/20">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 bg-white p-6 rounded-xl shadow-md border border-primary/20">
            {tips[activeTip].icon}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dark mb-3">{tips[activeTip].title}</h3>
            <p className="text-soft text-lg leading-relaxed">{tips[activeTip].content}</p>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTip(index)}
              className={`h-3 rounded-full transition-all
                ${
                  activeTip === index
                    ? "bg-primary w-6"
                    : "bg-white border border-primary/30 w-3"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
