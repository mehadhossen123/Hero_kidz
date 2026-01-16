import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-mu.vercel.app"),
  title: {
    default: "HeroKidz | Best Shop for Kids",
    template: "%s | HeroKidz",
  },
  description:
    "HeroKidz - বাচ্চাদের জন্য সেরা সব খেলনা ও পোশাকের সংগ্রহ। আজই ভিজিট করুন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
     
        <NextAuthProvider>
          <header className="md:w-11/12 mx-auto my-2">
            <Navbar />
          </header>

          <main className="md:w-11/12 mx-auto my-2 min-h-[calc(100vh-235px)]">
            {children}
          </main>

          <footer>
            <Footer />
          </footer>
        </NextAuthProvider>
      </body>
    </html>
  );
}
