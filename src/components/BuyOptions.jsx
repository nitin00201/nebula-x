"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import {  Truck, CreditCard, Gift, Zap } from "lucide-react";

const variants = [
  {
    name: "Nebula X Pro",
    image: "/natural-titanium.jpg",
    price: "₹1,09,999",
    originalPrice: "₹1,19,999",
    discount: "Save ₹10,000",
    storage: "256GB",
    color: "Natural Titanium",
    offers: [
      { icon: CreditCard, text: "10% off with HDFC/ICICI Cards" },
      { icon: Zap, text: "No-cost EMI for 9 months" },
      { icon: Gift, text: "₹5000 Cashback on UPI" },
      { icon: Truck, text: "Cash on Delivery Available" },
    ],
    features: ["6.7″ Display", "A18 Pro Chip", "Triple Camera", "Titanium Build"],
  },
  {
    name: "Nebula X Pro Max",
    image: "/gold-variant.jpg",
    price: "₹1,29,999",
    originalPrice: "₹1,39,999",
    discount: "Free Nebula AR Glasses",
    storage: "512GB",
    color: "Gold Titanium",
    offers: [
      { icon: CreditCard, text: "₹7000 off with Axis Cards" },
      { icon: Zap, text: "EMI starting ₹4999/mo" },
      { icon: Gift, text: "Exchange bonus up to ₹8000" },
      { icon: Truck, text: "Free delivery within 48 hrs" },
    ],
    features: ["6.9″ Display", "A18 Pro Max Chip", "Pro Camera System", "Exclusive Features"],
  },
];

export default function BuyOptions() {
  return (
    <section className="bg-black py-24 px-6 md:px-16 font-poppins text-[#EFF5E1]">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold mb-4"
        >
          Buy Nebula X Pro
        </motion.h2>
        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
          Choose the perfect model and payment plan that suits your lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {variants.map((variant, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-neutral-900 border border-neutral-700 rounded-xl">
              <CardContent className="p-6">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden bg-neutral-800 mb-6">
                  <Image
                    src={variant.image}
                    alt={variant.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-1 text-[#EFF5E1]">{variant.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-[#EFF5E1]">{variant.price}</span>
                    <span className="line-through text-sm text-red-500">
                      {variant.originalPrice}
                    </span>
                  </div>
                  <span className="text-sm text-purple-400 font-medium">
                    {variant.discount}
                  </span>
                </div>

                <div className="flex gap-3 text-sm text-[#EFF5E1] mb-6">
                  <span className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                    {variant.storage}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                    {variant.color}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-[#EFF5E1] font-semibold text-sm mb-2">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-[#EFF5E1]">
                    {variant.features.map((feature, i) => (
                      <li key={i} className="bg-gray-800 px-3 py-2 rounded-lg">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-[#EFF5E1] font-semibold text-sm mb-2">
                    Buying Options
                  </h4>
                  <div className="space-y-2 text-sm text-[#EFF5E1]">
                    {variant.offers.map((offer, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <offer.icon className="w-4 h-4 text-purple-400" />
                        <span>{offer.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-[#EFF5E1] rounded-lg">
                    Buy Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border border-gray-600 text-black hover:border-purple-500 rounded-lg"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
