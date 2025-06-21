"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductDesign() {
  return (
    <section className="bg-black text-cream py-24 px-6 md:px-16 font-poppins text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-5xl mx-auto h-[300px] md:h-[500px]"
      >
        <Image
          src="/nebula-front.jpg" 
          alt="Nebula X Pro front View"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-12 max-w-4xl mx-auto  text-lg md:text-xl leading-relaxed"
      >
        Nebula X Pro features a precision-engineered Grade 5 Titanium frame with a refined micro-blasted matte texture. Titanium is one of the strongest metals by weight, making Nebula incredibly durable while remaining ultralight. It’s available in four breathtaking finishes — including the all-new Desert Nebula.
        <br /><br />
        Internal advancements like a 100% recycled aluminium thermal core and redesigned back panel help dissipate heat more effectively — delivering up to 20% better sustained performance compared to its predecessor. Whether you're gaming or creating, Nebula X Pro stays cool, fast, and efficient — all day long.
      </motion.p>
    </section>
  );
}
