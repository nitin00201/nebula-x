"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Large Display",
    description: "Experience the immersive 6.9” Nano-OLED display with ultra clarity and edge-to-edge brilliance.",
    image: "/nebula-front.jpg",
  },
  {
    title: "Side View",
    description: "Engineered with a titanium edge and micro-blasted finish, Nebula looks stunning from every angle.",
    image: "/nebula-side.jpg",
  },
  {
    title: "Nebula App",
    description: "Control everything with the intuitive Nebula companion app. Sync, customize, and elevate your experience.",
    image: "/nano-display.jpg",
  },
  {
    title: "Color Variants",
    description: "Available in four cosmic finishes — including Aurora Blue and Desert Nebula — to match your vibe.",
    image: "/all-variant.jpg",
  },
];

export default function SpecialFeaturesCarousel() {
  return (
    <section className="bg-black py-24 px-6 md:px-16 font-poppins text-[#dee4cf]  text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-semibold mb-12"
      >
        Special Features
      </motion.h2>

      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden">
                <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                  <div className="relative w-full h-[250px]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#ceddaa]">{feature.title}</h3>
                  <p className="mt-2 text-sm text-[#EFF5E9]">{feature.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="text-purple-400" />
        <CarouselNext className=" text-purple-400" />
      </Carousel>
    </section>
  );
}
