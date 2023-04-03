import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";

let social: any[] = [];

function Ico(props: { h: string }) {
  return (
    <img
      src={props.h}
      className="border-0 border-gray-600 w-5 h-5 rounded-full inline-block relative fleft-[-25px] ftop-[5px] mr-2 my-2"
    />
  );
}

export function Sidebar() {
  return (
    <div
      className="relative top-[0px] lg:border-l-[1px] border-zinc-200 !text-zinc-600"
      style={{
        // boxShadow2: `5px 0px 10px #000 inset`,
        // back2ground:
        //   "url(https://images.hdqwalls.com/wallpapers/dark-abstract-blur-4k-on.jpg) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={"py-4 pl-4 sidebar text-sm"}>
        <h3 className="font-medium border-b-0 border-gray-200 mb-2 rounded-l-md">
          Me elsewhere
        </h3>
        <a href="https://twitter.com/fikisipi">
          <Ico h="https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png" />
          @fikisipi on Twitter
        </a>
        <a href="https://github.com/fikisipi">
          <Ico h="https://github.com/fluidicon.png" />
          fikisipi on Github
        </a>
        <h3 className="font-medium border-b-0 border-gray-200 mb-2 rounded-l-md">
          My projects
        </h3>
        <a href="https://twitter.com/mkrobot/status/1165955815389433856">
          <Ico h="/vl3.png" />
          VL3 - car tracking via video feed
        </a>
        <a href="https://github.com/fikisipi/elkai">
          <Ico h="https://github.com/fluidicon.png" />
          elkai - a TSP solver {/*<small>a travelling salesman solver</small>*/}
        </a>
        <a href="https://polartask.com">
          <Ico h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlQTFRFAAAAUFBQn5+fz8/P////T09P39/fgICAf39/sLCwr6+v4ODg8PDw0NDQEBAQoKCgYGBg7+/vMDAwQqu2ygAAALBJREFUeJzVkkESgyAMRaOkWkpD1PsftkQHQhC67fRvnPE9ICQA/Fum2SGimx8DvGDOMnX4inWeN+7R5vV1vWS15984oqkjWBbeUul4A4qR7BbccICY9mAVxEfPyiGmpjgV5H/yN+XSUjQCyXcz3Ar7cRo1rwQqBlScmltkI/P6FlcfLqNw08pQDOWhM4v9UG5nUaa5F85g074HD23si2jXn3XozEPvTYrC0jHiAf5ZPveFCLnbWGr3AAAAAElFTkSuQmCC" />
          PolarTask
        </a>
        <h3 className="font-medium border-b-0 border-gray-200 mb-2 rounded-l-md">
          Blogs/sites I like
        </h3>
        <a href="https://metaculus.com">
          <Ico h="https://d3s0w6fek99l5b.cloudfront.net/static/icon128.b1632c72a01c.png" />
          Metaculus
        </a>
        <a href="https://theoatmeal.com">
          <Ico h="https://s3.amazonaws.com/theoatmeal-img/favicons/favicon-96x96.png" />
          The Oatmeal
        </a>
        <a href="https://gwern.net">
          <Ico h="https://www.gwern.net/static/img/logo/logo-favicon-small.png" />
          gwern.net
        </a>
        <a href="https://xkcd.com">
          <Ico h="https://xkcd.com/s/919f27.ico" />
          xkcd.com
        </a>
        <a href="https://news.ycombinator.com/news">
          <Ico h="https://news.ycombinator.com/favicon.ico" />
          Hacker News
        </a>
        <a href="https://astralcodexten.substack.com/">
          <Ico h="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8c00a032-defa-44b7-9ab7-b7cc6d88db75%2Ffavicon-32x32.png" />
          AstralCodexTen (SSC)
        </a>
        <a href="https://scottaaronson.blog/">
          <Ico h="https://149663533.v2.pressablecdn.com/wp-content/uploads/2021/10/cropped-Jacket-192x192.gif" />
          Shtetl-Optimized
        </a>
        <a href="https://www.youtube.com/c/georgehotzarchive">
          <Ico h="https://www.youtube.com/s/desktop/f06ee14b/img/favicon_48x48.png" />
          George Hotz hacking vlogs
        </a>
        <a href="https://www.youtube.com/user/jblow888/videos">
          <Ico h="https://www.youtube.com/s/desktop/f06ee14b/img/favicon_48x48.png" />
          Jonathan Blow
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6 text-indigo-200">
          <a className="px-3" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block align-middle w-3 h-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
            Go to top
          </a>
          {null &&
            social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} @fikisipi
        </p>
      </div>
    </footer>
  );
}

export function Header() {
  return (
    <div
      className={
        "sticky py-4 w-full top-0 border-b-[1px] border-[#ffffff28] z-40 bg-[#00000090]"
      }
      style={{
        // backgroundf:
        //   "radial-gradient(at center top, #4e4363a0, #1D1726A0, #000000a0)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
      }}
    >
      <div
        className={
          "container mx-auto px-4 font-semibold text-slate-300 text-xl grid grid-cols-2"
        }
      >
        <div className="flex justify-end">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              document.location = "/";
            }}
            className="relative left-[50px]"
          >
            <img src={"/logo2.svg "} className="h-[35px]" />
          </a>
        </div>
        <div className="flex justify-end">
          <div className="flex text-sm font-normal items-center">
            <form className="relative" action="/">
              <input
                name="q"
                placeholder="Search"
                className="w-[140px] max-[400px]:w-[100px] md:w-[180px] text-white outline-none placeholder-[#888] border-2 md:border-[1px] border-[#66666680] ring-2 ring-[#000]/[0.5] px-2 pl-7 bg-[#00000050] py-1 rounded-xl"
              />
              <button className="absolute top-[7px] left-[7px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#999]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </form>
            <a
              href=""
              className="ml-1 bg-blue-500 text-white rounded-xl py-1 px-2 font-light hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block align-middle mr-1 w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Document() {
  return (
    <Html lang="en">
      {"\n"}
      <Head>{"\n"}</Head>
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
