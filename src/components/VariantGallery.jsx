"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const variants = [
  {
    name: "Aurora Gold",
    image: "/gold-variant.jpg",
  },
  {
    name: "Quantum Silver",
    image: "/natural-titanium.jpg",
  },
  {
    name: "Stellar Zinc",
    image: "/black-titanium.jpg",
  },
];

export default function VariantGallery() {
  return (
    <section className="bg-black py-24 px-6 md:px-16 font-poppins text-center text-cream">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-semibold mb-12"
      >
        Take a Closer Look
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 flex-wrap">
        {variants.map((variant, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-auto max-w-[320px]">
              <Image
                src={variant.image}
                alt={variant.name}
                width={600}
                height={900}
                className="rounded-lg w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="mt-4 text-sm text-[#EFF5E1]">{variant.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
