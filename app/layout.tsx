import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.fastwebtoolshub.com"),

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
         <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-4D9183ECNJ"
      strategy="afterInteractive"
    />

    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4D9183ECNJ');
      `}
    </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}