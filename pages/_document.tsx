import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
export { Header, Footer, Sidebar };

export default function Document() {
  return (
    <Html lang="en">
      {"\n"}
      <Head>
        {"\n"}
        </Head>
      {"\n"}
      <body>
        {"\n"}
        <div className={`min-h-[100vh] text-white `}>
          <Header />
          <Main />
          <Footer />
        </div>
        <NextScript />
        {"\n"}
      </body>
    </Html>
  );
}
