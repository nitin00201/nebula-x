import FeatureBlock from "@/components/FeatureBlock";

export default function Features() {
  return (
    <section className="bg-black py-16 px-6 md:px-16 text-center font-poppins ">
      <h2 className="text-4xl md:text-5xl font-semibold mb-12">
        Product Highlights
      </h2>

      <div className="space-y-24">
        <FeatureBlock
          title="Titan AI Chip"
          description="Powered by next-gen neural processing for blazing speed, stunning graphics, and zero lag."
          images={["/titan-chip.jpg", "/titan-chip.jpg"]}
          flip={false}
        />

        <FeatureBlock
          title="Nano Display"
          description="A display so vibrant, you’ll forget it’s not real. 8K Nano-OLED, 1000 nits brightness."
          images={["/nano-display.jpg"]}
          flip={true}
        />
      </div>
    </section>
  );
}
