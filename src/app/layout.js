import { Poppins } from 'next/font/google';
import "./globals.css";
import { Toaster } from 'sonner';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});



export const metadata = {
  title: "Nebula X Pro",
  description: "Nebula X Pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-black text-[#EFF5E1]`}
      >
        {children}
        <Toaster position="top-center" richColors />

      </body>
    </html>
  );
}
