"use client";

import React, { useState, ChangeEvent } from "react";
import { FaUser, FaPhone, FaChevronRight } from "react-icons/fa";
import { MdEmail, MdCalendarMonth } from "react-icons/md";
import { HeartHandshake } from "lucide-react";

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  service: string;
  therapist: string;
  sessionType: string;
  date: string;
  time: string;
}

interface ErrorType {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  therapist?: string;
  sessionType?: string;
  date?: string;
  time?: string;
}

export default function BookAppointment() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    service: "",
    therapist: "",
    sessionType: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState<ErrorType>({});

  const services = [
    "Anxiety & Stress Management",
    "Depression Care",
    "Relationship Counseling",
    "Family Support",
    "Children & Teen Counseling",
    "Personal Growth Coaching",
  ];

  const therapists = ["Dr. Rachel Lewis", "Dr. Aaron Smith", "Ms. Nila Fernando"];

  const sessionTypes = ["Online Session", "In-Person Session"];

  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ];

  // Handle input
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation
  const validateStep = () => {
    let newErrors: ErrorType = {};

    if (activeStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Valid email required.";
      if (!/^[0-9]{10}$/.test(formData.phone))
        newErrors.phone = "Phone number must be 10 digits.";
    }

    if (activeStep === 2) {
      if (!formData.service) newErrors.service = "Select a service.";
      if (!formData.therapist) newErrors.therapist = "Choose a therapist.";
      if (!formData.sessionType)
        newErrors.sessionType = "Select a session type.";
      if (!formData.date) newErrors.date = "Choose a date.";
      if (!formData.time) newErrors.time = "Choose a time.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateStep()) setActiveStep((prev) => prev + 1);
  };

  const back = () => setActiveStep((prev) => prev - 1);

  return (
    <section id="appointment" className="py-20 scroll-mt-20 bg-bg">
      <div className="max-w-4xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark">
            Schedule a Confidential Session
          </h2>
          <p className="text-soft max-w-xl mx-auto mt-2">
            Your mental well-being matters. Fill in your details to book a session.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-16 w-full flex flex-col items-center">

          {/* Track Container */}
          <div className="relative w-[90%] flex items-center justify-between">

            {/* Background Line */}
            <div className="absolute left-0 right-0 h-2 bg-white rounded-full shadow-sm"></div>

            {/* Filled Line */}
            <div
              className="absolute h-2 bg-primary rounded-full shadow-md transition-all duration-500"
              style={{
                width:
                  activeStep === 1
                    ? "0%"
                    : activeStep === 2
                      ? "50%"
                      : "100%",
              }}
            ></div>

            {/* Step Circles */}
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative flex flex-col items-center">
                <div
                  className={`
            w-12 h-12 flex items-center justify-center rounded-full border-2 font-semibold transition-all
            ${activeStep >= step
                      ? "bg-primary text-white border-primary shadow-lg"
                      : "bg-white border-primary text-primary shadow-sm"
                    }
          `}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>

          {/* Labels */}
          <div className="mt-3 w-[90%] flex justify-between text-xs text-dark">
            <span>Your Info</span>
            <span>Session Details</span>
            <span>Confirm</span>
          </div>
        </div>



        {/* ---------------------------- */}
        {/* MAIN CARD CONTENT */}
        {/* ---------------------------- */}
        <div className="bg-white shadow-xl rounded-3xl p-8">

          {/* -------------------- STEP 1 -------------------- */}
          {activeStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark flex items-center">
                <FaUser className="mr-2 text-primary" /> Personal Information
              </h3>

              {/* NAME */}
              <div>
                <div className="relative">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full p-4 pl-12 border rounded-xl focus:border-primary outline-none"
                  />
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-soft" />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <div className="relative">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-4 pl-12 border rounded-xl focus:border-primary outline-none"
                  />
                  <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-soft" />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <div className="relative">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-4 pl-12 border rounded-xl focus:border-primary outline-none"
                  />
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-soft" />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>
          )}

          {/* -------------------- STEP 2 -------------------- */}
          {activeStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark flex items-center">
                <MdCalendarMonth className="mr-2 text-primary" /> Session Details
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                {/* SERVICE */}
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl focus:border-primary outline-none"
                  >
                    <option value="">Select Service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm">{errors.service}</p>
                  )}
                </div>

                {/* THERAPIST */}
                <div>
                  <select
                    name="therapist"
                    value={formData.therapist}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl focus:border-primary outline-none"
                  >
                    <option value="">Choose Therapist</option>
                    {therapists.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.therapist && (
                    <p className="text-red-500 text-sm">{errors.therapist}</p>
                  )}
                </div>

                {/* SESSION TYPE */}
                <div>
                  <select
                    name="sessionType"
                    value={formData.sessionType}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl focus:border-primary outline-none"
                  >
                    <option value="">Select Session Type</option>
                    {sessionTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.sessionType && (
                    <p className="text-red-500 text-sm">
                      {errors.sessionType}
                    </p>
                  )}
                </div>

                {/* DATE */}
                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl focus:border-primary outline-none"
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm">{errors.date}</p>
                  )}
                </div>

                {/* TIME */}
                <div>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl focus:border-primary outline-none"
                  >
                    <option value="">Select Time</option>
                    {availableTimes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-sm">{errors.time}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* -------------------- STEP 3 -------------------- */}
          {activeStep === 3 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <HeartHandshake className="text-primary w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-dark">
                Confirm Your Appointment
              </h3>

              <div className="bg-bg p-6 rounded-xl shadow-sm max-w-md mx-auto">
                {(Object.keys(formData) as (keyof FormDataType)[]).map((key) => (
                  <div
                    key={key}
                    className="flex justify-between border-b border-soft/20 py-2"
                  >
                    <span className="text-soft capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="text-dark font-medium">
                      {formData[key]}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full max-w-xs py-4 bg-primary hover:bg-primary/80 text-white font-bold rounded-xl shadow-lg transition">
                Confirm & Book Appointment
              </button>
            </div>
          )}

          {/* -------------------- NAV BUTTONS -------------------- */}
          <div className="mt-8 flex justify-between">
            {activeStep > 1 && (
              <button
                onClick={back}
                className="px-6 py-3 text-soft border border-soft/30 rounded-lg hover:bg-bg"
              >
                Back
              </button>
            )}

            {activeStep < 3 && (
              <button
                onClick={next}
                className="ml-auto px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/80 flex items-center gap-2"
              >
                Next <FaChevronRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
