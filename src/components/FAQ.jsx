"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section className="bg-black py-24 px-6 md:px-16 font-poppins text-cream text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-semibold mb-12"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto text-left">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="q1">
            <AccordionTrigger className="text-lg font-medium text-cream">
              What is the battery life of Nebula X Pro?
            </AccordionTrigger>
            <AccordionContent className="text-mint text-sm">
              Nebula X Pro offers up to 36 hours of normal usage and up to 20 hours of high-performance AR usage with adaptive battery optimization.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger className="text-lg font-medium text-cream">
              Does it support 5G & Wi-Fi 6E?
            </AccordionTrigger>
            <AccordionContent className="text-mint text-sm">
              Yes, Nebula X Pro supports 5G Dual-SIM and the latest Wi-Fi 6E for ultra-fast connectivity and lower latency.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger className="text-lg font-medium text-cream">
              Can I transfer data from iPhone or Android easily?
            </AccordionTrigger>
            <AccordionContent className="text-mint text-sm">
              Absolutely! The Nebula Migration app allows you to securely move your contacts, apps, photos, and settings from both iOS and Android.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger className="text-lg font-medium text-cream">
              Is there a warranty or replacement policy?
            </AccordionTrigger>
            <AccordionContent className="text-mint text-sm">
              Every Nebula X Pro comes with a 1-year international warranty and an optional Nebula Care+ plan that covers accidental damage.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger className="text-lg font-medium text-cream">
              Can I use AR apps from Google Play?
            </AccordionTrigger>
            <AccordionContent className="text-mint text-sm">
              Yes, the NebulaOS is Android-based and fully supports ARCore and Play Store apps optimized for spatial interaction.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
