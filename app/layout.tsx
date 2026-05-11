import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "FastWebToolsHub - Free Online Tools",
  description:
    "Free online image tools, PDF tools, calculators, AI tools, and converters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}