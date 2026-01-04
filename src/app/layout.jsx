import {  Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const poppins = Poppins({
  weight: ["100", "200", "300", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
title:{
  default:"Hero Kidz",
  template:"%s | Hero Kidz"
},
  description: "A project for kidz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <header className="md:w-11/12 mx-auto my-2 ">
          <Navbar></Navbar>
        </header>
        <main className="md:w-11/12 mx-auto my-2 min-h-[calc(100vh-235px)]"> {children}</main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
