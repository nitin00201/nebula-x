"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-between px-6 md:px-16 bg-black font-poppins text-[#EFF5E1]"
    >
      <div className="max-w-xl text-cream space-y-6 z-10">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-semibold leading-tight"
        >
          Discover the <span className="text-purple-400">Future</span><br />
          with Nebula X Pro
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-mint"
        >
          Experience ultra-realistic AR, a nano display, and future-ready performance in your hands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#buy"
            className="inline-block bg-purple-600 text-[#EFF5E1] px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition"
          >
            Pre-order Now
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden md:block"
      >
        <Image
          src="/nebula-pro.jpg" 
          alt="Nebula X Pro"
          width={1000}
          height={500}
          className="object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}
