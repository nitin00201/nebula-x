export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 py-12 px-6 md:px-16 font-poppins text-cream text-center text-sm">
      <div className="text-lg font-semibold mb-4 text-[#EFF5E1]">
        Nebula<span className="text-purple-400">X</span> Pro
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-6 text-[#EFF5E1]">
        <a href="#features" className="hover:opacity-80 transition">Features</a>
        <a href="#tech" className="hover:opacity-80 transition">Tech Specs</a>
        <a href="#buy" className="hover:opacity-80 transition">Buy Now</a>
        <a href="#contact" className="hover:opacity-80 transition">Contact</a>
        <a href="#" className="hover:opacity-80 transition">Privacy</a>
        <a href="#" className="hover:opacity-80 transition">Terms</a>
      </div>

      <p className="text-neutral-500 text-xs">
        © {new Date().getFullYear()} Nebula Inc. All rights reserved.
      </p>
    </footer>
  );
}
