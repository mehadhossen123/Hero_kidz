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

// export const metadata = {
// title:{
//   default:"Hero Kidz",
//   template:"%s | Hero Kidz"
// },
//   description: "A project for kidz",
// };

export const metadata = {
  // আপনার ডোমেইনটি ভেরিয়েবল হিসেবে রাখলে সুবিধা বেশি
  metadataBase: new URL("https://hero-kidz-mu.vercel.app"),

  title: {
    default: "HeroKidz | Best Shop for Kids",
    template: "%s | HeroKidz",
  },
  description:
    "HeroKidz - বাচ্চাদের জন্য সেরা সব খেলনা ও পোশাকের সংগ্রহ। আজই ভিজিট করুন।",

  // লোগো এবং ফেভিকন
  icons: {
    icon: "/favicon.ico", // public ফোল্ডারে ফাইলটি থাকলে ভালো
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "HeroKidz - বাচ্চাদের জন্য সেরা সব কালেকশন",
    description: "আমাদের প্রিমিয়াম খেলনা ও পোশাকের কালেকশন দেখতে ভিজিট করুন।",
    url: "/", // metadataBase এর সাথে অটোমেটিক যোগ হয়ে যাবে
    siteName: "HeroKidz",
    images: [
      {
        // মনে রাখবেন: এখানে সরাসরি ইমেজের ডাইরেক্ট লিঙ্ক দিতে হবে (যা .jpg বা .png দিয়ে শেষ হয়)
        url: "https://i.ibb.co.com/FkGyTmf3/homepage-preview.jpg",
        width: 1200,
        height: 630,
        alt: "HeroKidz Homepage Preview",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HeroKidz - Kids Online Shop",
    description: "বাচ্চাদের সকল প্রয়োজনীয় পণ্য এখন এক জায়গায়।",
    images: ["https://i.ibb.co.com/FkGyTmf3/homepage-preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${poppins.className}  antialiased`}>
          <header className="md:w-11/12 mx-auto my-2 ">
            <Navbar></Navbar>
          </header>
          <main className="md:w-11/12 mx-auto my-2 min-h-[calc(100vh-235px)]"> 
            {children}
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
