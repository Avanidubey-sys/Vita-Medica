"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Stethoscope, HeartPulse, Users, ShieldCheck } from "lucide-react";
import Navbar from "./components/Navbar"; // ✅ Include Navbar

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient from-blue-50 to-indigo-100 text-gray-800">
      {/* ✅ Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4 py-20 mt-10">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-6 text-indigo-700"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-blue-600">VitaMedica</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Revolutionizing hospital management with seamless digital healthcare
          for patients, doctors, and administrators.
        </motion.p>

        <motion.div
          className="flex gap-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link href="/get-started">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose VitaMedica?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-6xl mx-auto">
          {[
            {
              icon: <HeartPulse className="w-10 h-10 text-blue-500" />,
              title: "Smart Patient Care",
              desc: "Streamlined patient data, history, and prescriptions in one place.",
            },
            {
              icon: <Stethoscope className="w-10 h-10 text-indigo-500" />,
              title: "Doctor Management",
              desc: "Easy scheduling, record access, and doctor-patient interaction.",
            },
            {
              icon: <Users className="w-10 h-10 text-blue-600" />,
              title: "Staff & Admin Tools",
              desc: "Simplify internal hospital operations and improve efficiency.",
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
              title: "Secure & Reliable",
              desc: "HIPAA-grade data encryption and cloud reliability.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                {f.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-black from-indigo-100 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            About VitaMedica
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            VitaMedica is an all-in-one hospital management system built to
            connect doctors, patients, staff, and administrators seamlessly.
            Manage appointments, records, and billing — all from one secure and
            intuitive platform.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-6 mt-auto text-center">
        <p className="mb-2 text-sm">
          © {new Date().getFullYear()} VitaMedica. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </footer>
    </main>
  );
}


