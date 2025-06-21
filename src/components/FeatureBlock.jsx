"use client";

import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function FeatureBlock({ title, description, images = [], flip = false }) {
  return (
    <section className="py-16 px-6 md:px-16 bg-black text-cream font-poppins">
      <div className={`flex flex-col md:flex-row ${flip ? "md:flex-row-reverse" : ""} items-center gap-10`}>
        <motion.div
          initial={{ opacity: 0, x: flip ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">{title}</h2>
          <p className="text-mint text-lg">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: flip ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 w-full"
        >
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {images.map((src, idx) => (
                <CarouselItem key={idx}>
                  <Card className="bg-neutral-900 border border-neutral-700">
                    <CardContent className="p-4 flex justify-center items-center">
                      <Image
                        src={src}
                        alt={`${title} image ${idx + 1}`}
                        width={400}
                        height={400}
                        className="object-contain rounded-md"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
