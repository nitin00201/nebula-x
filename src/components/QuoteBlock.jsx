"use client";

import { motion } from "framer-motion";

export default function QuoteBlock() {
  return (
    <section className="bg-black py-24 px-6 md:px-16 text-center text-cream font-poppins">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight shadow-2xl"
      >
        Strength. 
        Beauty. <br className="hidden md:block" />
        Titanium.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-mint text-lg md:text-xl"
      >
        Crafted with aerospace-grade Titanium for unmatched durability and elegance.
      </motion.p>
    </section>
  );
}
