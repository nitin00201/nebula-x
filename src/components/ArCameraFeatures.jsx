"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "AR Engine",
    description: "Real-time spatial rendering with gesture control and advanced object tracking.",
    image: "/chip.jpg",
  },
  {
    title: "Ultra Cam Pro",
    description: "108MP triple-lens system with NightVision and 8K ProRes video recording.",
    image: "/camera1.jpg",
  },
  {
    title: "Cinematic Mode",
    description: "Auto-focus and depth adjustment for film-quality shots on the fly.",
    image: "/camera2.jpg",
  },
  {
    title: "AI Powered Zoom",
    description: "AI-enhanced zoom and periscope lens zoom across multiple frames.",
    image: "/camera3.jpg",
  },
];

export default function ArCameraFeatures() {
  return (
    <section className="bg-black py-24 px-6 md:px-16 font-poppins text-cream">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-semibold mb-16"
      >
        Special AR & Camera Features
      </motion.h2>

      <div className="flex flex-col items-center gap-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full max-w-3xl flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-full overflow-hidden rounded-xl mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-xl object-contain"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-2xl font-semibold text-center">
                {feature.title}
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-mint text-sm text-center max-w-2xl"
            >
              {feature.description}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
}
