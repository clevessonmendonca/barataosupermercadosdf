"use client";

import { ReactNode, Suspense, useEffect, useState } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Head } from "./Head";
import React from "react";
import { Footer } from "@/components/footer/Footer";
import Header from "@/components/Header";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [pathName, setPathName] = useState("/");
  const pathname = usePathname();

  const handleRouteChange = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (pathname !== pathName) {
      handleRouteChange();
      setPathName(pathname);
    }
  }, [pathName, pathname]);

  return (
    <html lang="pt-BR">
      <Head />

      <body className={poppins.className}>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
