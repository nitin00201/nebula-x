"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function EmailSubscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("🎉 You're subscribed!");
    setEmail("");
  };

  return (
    <section className="bg-black py-20 px-6 md:px-16 font-poppins text-center text-[#EFF5E1]">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold mb-6"
      >
        Stay Updated with Nebula
      </motion.h2>
      <p className="text-gray-400 mb-8">
        Subscribe for product updates, launch offers, and more.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg focus:outline-none ring-2 ring-purple-500 text-[#EFF5E1]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-purple-600 text-[#EFF5E1] hover:bg-purple-700 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
