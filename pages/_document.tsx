import { Html, Head, Main, NextScript } from "next/document";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
export { Header, Footer, Sidebar };

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/jvr1gjm.css" />
      </Head>
      <body>
        <div className={`min-h-[100vh] text-white `}>
          <Header />
          <Main />
          <Footer />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
