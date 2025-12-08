'use client';

import Image from "next/image";
import heroImg from "../public/images/heroImg.jpg";
import { CalendarCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] w-full flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImg}
          alt="Counseling Support"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-bg/95 via-bg/80 to-transparent -z-10"></div>

      {/* Hero Content */}
      <div className="text-center space-y-6 px-6 max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-dark">
          Your Mental Well-Being <br /> Matters The Most 💚
        </h1>

        <p className="text-dark/85 text-lg max-w-xl mx-auto">
          A confidential space to breathe, heal, and become
          the best version of yourself. We are here to listen and help.
        </p>

        <a
          href="#appointment"
          className="inline-flex items-center justify-center bg-primary hover:bg-accent text-black font-medium px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <CalendarCheck className="w-5 h-5 mr-2 text-black" />
          Book a Private Session
        </a>
      </div>
    </section>
  );
}
