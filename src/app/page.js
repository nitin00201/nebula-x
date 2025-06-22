import ArCameraFeatures from '@/components/ArCameraFeatures';
import BuyOptions from '@/components/BuyOptions';
import EmailSubscribe from '@/components/EmailSubscribe';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar'
import ProductDesign from '@/components/ProductDesign';
import QuoteBlock from '@/components/QuoteBlock';
import SpecialFeaturesCarousel from '@/components/SpecialFeaturesCarousel';
import SwitchToNebula from '@/components/SwitchToNebula';
import VariantGallery from '@/components/VariantGallery';
import React from 'react'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 ">
        <HeroSection/>
        <Features/>
        <VariantGallery/>
        <SwitchToNebula />
        <QuoteBlock/>
        <ProductDesign/>
        <SpecialFeaturesCarousel/>
        <ArCameraFeatures/>
        <BuyOptions/>
        <FAQ/>
        <EmailSubscribe/>
        <Footer/>

      </main>
    </>
  );
}