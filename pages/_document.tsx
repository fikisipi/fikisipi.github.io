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
        <div className="absolute z-1 left-0 top-0 right-0 overflow-hidden">
          <img
            src="/slopes.png"
            className="animate-pulse"
            style={{
              // width: "auto",
              // height: "600px",
              position: "relative",
              // top: -20,
              top: -250,
              left: "calc( ( 100vw - 1800px ) * 0.5 )",
              width: "1800px",
              minWidth: "1800px",
              height: "auto",
              zIndex: 1,
            }}
          />
        </div>
        <div className={`min-h-[100vh] text-white z-10 relative`}>
          <Header />
          <Main />
          <Footer />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
