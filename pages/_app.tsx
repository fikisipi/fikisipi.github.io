import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <div className={inter.className} key="inter">
      <Component {...pageProps} />
    </div>
  );
}
