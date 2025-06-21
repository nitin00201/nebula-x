"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SwitchToNebula() {
  return (
    <section className="bg-black py-24 px-6 md:px-16 font-poppins text-cream">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 w-full"
        >
          <div className="relative w-full h-[400px] sm:h-[500px]">
            <Image
              src="/switch-nebula.jpg" 
              alt="Switch to Nebula"
              fill
              className="object-contain rounded-md"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 w-full space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Switch to Nebula
          </h2>
          <ul className="list-disc list-inside text-mint text-lg space-y-2">
            <li>Move your data in minutes with one tap</li>
            <li>Keep your apps, messages & photos safe</li>
            <li>Enjoy a seamless experience from the start</li>
            <li>Access Nebula-exclusive AR features instantly</li>
            <li>Get real-time support during the switch</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
