"use client";

import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import heroImg from "../public/images/heroImg.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Intro Section (Image + Text) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14">

          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={heroImg}
              alt="Therapist Team"
              width={450}
              height={450}
              className="rounded-3xl shadow-lg object-cover w-80 lg:w-[420px]"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <HeartHandshake className="text-primary w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-dark">
                Meet Our Caring Therapists
              </h2>
            </div>

            <p className="text-soft text-lg leading-relaxed">
              Our licensed psychologists and counselors are here to offer
              compassionate guidance in a safe, non-judgmental space. Your
              emotional well-being is our priority, and every session is
              tailored to support your personal journey.
            </p>

            <p className="text-soft text-lg leading-relaxed">
              Whether you’re navigating stress, anxiety, relationships, or personal
              growth, our experienced team ensures you feel heard, understood,
              and supported at every step.
            </p>
          </div>
        </div>

        {/* Therapist Grid */}
        <h3 className="text-2xl font-semibold text-dark text-center mt-20 mb-6">
          Our Licensed Professionals
        </h3>

        <div className="grid md:grid-cols-3 gap-10 mt-10">

          {[
            { name: "Dr. Rachel Lewis", role: "Clinical Psychologist", years: 12 },
            { name: "Dr. Aaron Smith", role: "Family & Relationship Counselor", years: 9 },
            { name: "Ms. Nila Fernando", role: "Child & Teen Therapist", years: 7 },
          ].map((t, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-3xl
                p-8
                text-center
                transition-all
                duration-300
                border
                border-primary/30
                shadow-sm
                hover:shadow-[0_8px_25px_rgba(121,180,169,0.35)]
                hover:border-primary
                hover:-translate-y-2
              "
            >
              
              {/* Profile Image */}
              <div className="relative mx-auto w-28 h-28">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-50"></div>

                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-primary/30">
                  <Image
                    src="/images/heroImg.jpg"
                    alt={t.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <h4 className="mt-6 text-xl font-bold text-dark">{t.name}</h4>
              <p className="text-soft text-sm mt-1">{t.role}</p>

              {/* Divider */}
              <div className="mt-5 h-1px bg-primary/20 mx-auto w-2/3"></div>

              {/* Years of Experience */}
              <p className="text-soft text-sm mt-4">
                {t.years}+ years of compassionate care
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
