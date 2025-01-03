// import LogoSvg from "./logo2.svg";
import type { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import { getAllTags, getPosts, Post } from "@/components/postApi";
import { PostComponent } from "@/components/post";
import { Sidebar } from "./_document";
import Head from "next/head";
import { Container } from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export type StaticProps = {
  posts: Post[];
  extraTitle?: string;
  allTags?: string[];
};

export const getStaticProps: GetStaticProps<StaticProps> = async function () {
  return {
    props: {
      posts: getPosts(),
      allTags: getAllTags()
    },
  };
};

function Ico(props: { h: string }) {
  return (
    <img
      src={props.h}
      className="border-2 border-gray-600 w-5 h-5 rounded-full inline-block absolute left-[-25px] top-[5px]"
    />
  );
}

  function Chev() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#fff"
        className="w-4 h-4 inline-block absolute left-[-25px] top-[7px]"
      >
        <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

function BoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mr-2 align-middle w-12 h-12 inline-block p-2 rounded-full border-2 border-white/[0.2]"
    >
      <path
        fillRule="evenodd"
        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default function A(props: StaticProps) {
  let [desc, title] = [
    "distributed programming & product development",
    "fikisipi",
  ];
  let posts: Post[] = props.posts;

  return (
    <>
      <Head>
        <title>Filip Dimitrovski - fikisipi</title>
        <meta content="fikisipi" name="twitter:title" />
        <meta content="@fikisipi" name="twitter:site" />
        <meta content="summary" name="twitter:card" />
        <meta
          content="https://fikisipi.github.io/opengraph.png"
          name="twitter:image"
        />
        <meta
          content="https://fikisipi.github.io/opengraph.png"
          name="og:image"
        />
        <meta
          content="Computer and data science"
          name="twitter:description"
        />
        <meta
          content="Computer and data science"
          name="description"
        />
        <meta
          content="Computer and data science"
          name="og:description"
        />
        <meta content="Filip Dimitrovski - fikisipi" name="og:title" />
      </Head>{" "}
      <div
        className={
          "container px-4 mx-auto my-6 text-center text-lg font-light text-gray-200 " +
          inter.className
        }
      >
         <div className={"text-left text-md container xpx-4 mx-auto mt-6"}>
          <div
          className={
            "grid lg:grid-cols-2 gap-4 font-light text-[#ffffffc0] text-xl leading-loose"
          }
          >
          <div
            className={
              "mt-10 py-5 px-4 rounded-lg border-[1px] border-[#ffffff28] shadow-lgx"
            }
            // style={{
            //   "--tw-shadow":
            //     "0 10px 15px -3px rgba(138,101,191,0.1), 0 4px 6px -2px rgba(138,101,191,0.05)",
            // }}
          >
            <h1
              className={
                "font-semibold tracking-wide text-xl mb-4 flex items-center text-[#fff]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 rounded-full border-2 border-[#ffffff28] p-2"
              >
                <path d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" />
              </svg>
              Filip Dimitrovski
            </h1>
            I'm interested in computer and data science, as well prediction markets and startups.
            <div className="text-center my-8">
              <a href="https://fikisipi.substack.com/" className="inline-block text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2">
              <svg aria-hidden="true" className="inline w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                Visit my blog on Substack</a>
            </div>
            Some of my projects:
            <div className={"xax"}>
            <a href={"https://github.com/fikisipi/elkai"}>
                <Chev />
                <strong className={"font-bold"}>elkai</strong>: Travelling Salesman
                solver for Python
              </a>
              <br/>
              <a
                href={"https://twitter.com/mkrobot/status/1165955815389433856"}
              >
                <Chev />
                <strong className="font-bold">
                  VL3
                </strong>{": "}
                car tracking via ML processing of live cameras
              </a>{" "}
              <br />
              <a href={"https://polartask.com"} className="line-through">
                <Chev />
                <strong className="font-bold">PolarTask</strong>: a task tracker
              </a>
              <br />
            </div>
            <br/>
            Contact:
            <div className="xax">
            <a href="https://github.com/fikisipi">
                <Ico h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFw2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDQtMTJUMTg6MTA6NTArMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTEyVDE4OjExOjQ4KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTEyVDE4OjExOjQ4KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMTUyMzBlOS1lZTRhLTQ3OGEtOWIyZS04NjQwYmUwMTI3YmUiIHhtcE1NOkRvY3VtZW50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" />
                Filip Dimitrovski @fikisipi on GitHub
              </a> <br/>
              <a href="https://twitter.com/fikisipi">
                <Ico h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAB7UExURQAAAByX7xyb8B2b8B2a8B2a8RiX7xCf7xua7xuZ7x6b8RyZ7x2a7x6a8CCX7xua7xyb8Byb8R2c8B6b8Bya8B2c7x2a7xya7xmZ7xmc7yCf7x6b7xyb7xya7yCa7x6c8B6Z7xyb7x6b7x2a7x2a7x2Z7yCf7x2b8P///4AehSoAAAAndFJOUwBAv+/fnyAQYHB/gLDfIDDPf9/vr1BgkFBQIHDgwDDfcECA0MCgEMgbL8UAAAABYktHRCi9sLWyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wQMEAoaY2gqYgAAAMpJREFUOMvVkt0SgiAQhVEkNf9SFMrKNK19/zfMQhGEmi7rXMGej90zOyD0n3JcDB7ZPE++qASh6m9BKApdMpViUIgApJI0E7UdQC6BQvq0LCoJgOdMAUARmx7x183drybAYe5aU1HAZejkCpDOgH8Eq/wZOLmFzccyOLc3OEugsQN8WY49Q6asl10+TRjVcmoATAU6swFBmq5rP0l1ALFeBzrznzT0XQBh53ixqf6+CiKi7Xow5g+abRmP6jbuxwi0v7X37372b+kBHx03HPz+BJEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDQtMTJUMTY6MTA6MjUrMDA6MDAw8+HBAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA0LTEyVDE2OjEwOjI1KzAwOjAwQa5ZfQAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wNC0xMlQxNjoxMDoyNiswMDowMCdTYj8AAAAASUVORK5CYII=" />
                Filip Dimitrovski @fikisipi on Twitter
              </a>
               <br/>
              <a href="https://www.linkedin.com/in/filip-dimitrovski-fikisipi/">
                <Ico h="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PGcgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiNmZmYiIHJ4PSI2MCIvPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjMEE2NkMyIiByeD0iNjAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTg0LjcxNSAyMTcuNjg1aDI5LjI3YTQgNCAwIDAgMCA0LTMuOTk5bC4wMTUtNjEuODQyYzAtMzIuMzIzLTYuOTY1LTU3LjE2OC00NC43MzgtNTcuMTY4Yy0xNC4zNTktLjUzNC0yNy45IDYuODY4LTM1LjIwNyAxOS4yMjhhLjMyLjMyIDAgMCAxLS41OTUtLjE2MVYxMDEuNjZhNCA0IDAgMCAwLTQtNGgtMjcuNzc3YTQgNCAwIDAgMC00IDR2MTEyLjAyYTQgNCAwIDAgMCA0IDRoMjkuMjY4YTQgNCAwIDAgMCA0LTR2LTU1LjM3M2MwLTE1LjY1NyAyLjk3LTMwLjgyIDIyLjM4MS0zMC44MmMxOS4xMzUgMCAxOS4zODMgMTcuOTE2IDE5LjM4MyAzMS44MzR2NTQuMzY0YTQgNCAwIDAgMCA0IDRaTTM4IDU5LjYyN2MwIDExLjg2NSA5Ljc2NyAyMS42MjcgMjEuNjMyIDIxLjYyN2MxMS44NjItLjAwMSAyMS42MjMtOS43NjkgMjEuNjIzLTIxLjYzMUM4MS4yNTMgNDcuNzYxIDcxLjQ5MSAzOCA1OS42MjggMzhDNDcuNzYyIDM4IDM4IDQ3Ljc2MyAzOCA1OS42MjdabTYuOTU5IDE1OC4wNThoMjkuMzA3YTQgNCAwIDAgMCA0LTRWMTAxLjY2YTQgNCAwIDAgMC00LTRINDQuOTU5YTQgNCAwIDAgMC00IDR2MTEyLjAyNWE0IDQgMCAwIDAgNCA0WiIvPjwvZz48L3N2Zz4=" />
                Filip Dimitrovski on LinkedIn
              </a>
            </div>
          </div>
          <div
            className={
              "hidden mt-10 py-5 px-4 rounded-lg border-[1px] border-[#ffffff28] shadow-lgx"
            }
          >
            <h1
              className={
                "font-semibold tracking-wide text-xl mb-4 flex items-center text-[#fff]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 rounded-full border-2 border-[#ffffff28] p-2"
              >
                <path
                  fillRule="evenodd"
                  d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                  clipRule="evenodd"
                />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>
            </h1>
            Some of my projects:
            <br />
            <div className={"xax"}>
            <a href={"https://github.com/fikisipi/elkai"}>
                <Chev />
                <strong className={"font-bold"}>elkai</strong>: Travelling Salesman
                solver for Python
              </a>
              <br />
              <a
                href={"https://twitter.com/mkrobot/status/1165955815389433856"}
              >
                <Chev />
                <strong className="font-bold">
                  VL3
                </strong>{": "}
                car tracking via ML processing of live cameras
              </a>{" "}
              <br />          
              <a href={"https://polartask.com"} className="line-through">
                <Chev />
                <strong className="font-bold">PolarTask</strong>: a task tracker
              </a>
              <br/>
            </div>
          </div>
          <div
            className={
              "mt-10 py-5 px-4 rounded-lg border-[1px] border-[#ffffff28] shadow-lgx"
            }
            // style={{
            //   "--tw-shadow":
            //     "0 10px 15px -3px rgba(138,101,191,0.1), 0 4px 6px -2px rgba(138,101,191,0.05)",
            // }}
          >
            <h1
              className={
                "font-semibold tracking-wide text-xl mb-4 flex items-center text-[#fff]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 rounded-full border-2 border-[#ffffff28] p-2"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </h1>
            Sites/blogs I like:
            <style>{`.xax a{margin-left: 30px; position: relative; border-bottom: 2px solid #ffffff40;} .xax a:hover{color: #999;}`}</style>
            <div className={"xax mt-4"}>
              <a href="https://metaculus.com">
                <Ico h="https://d3s0w6fek99l5b.cloudfront.net/static/icon128.b1632c72a01c.png" />
                Metaculus
              </a>
              <br />
              <a href="https://gwern.net">
                <Ico h="https://www.gwern.net/static/img/logo/logo-favicon-small.png" />
                gwern.net
              </a>
              <br />
              <a href="https://xkcd.com">
                <Ico h="https://xkcd.com/s/919f27.ico" />
                xkcd.com
              </a>
              <br />
              <a href="https://news.ycombinator.com/news">
                <Ico h="https://news.ycombinator.com/favicon.ico" />
                Hacker News
              </a>
              <br />
              <a href="https://astralcodexten.substack.com/">
                <Ico h="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8c00a032-defa-44b7-9ab7-b7cc6d88db75%2Ffavicon-32x32.png" />
                AstralCodexTen (SSC)
              </a>
              <br />
              <a href="https://scottaaronson.blog/">
                <Ico h="https://149663533.v2.pressablecdn.com/wp-content/uploads/2021/10/cropped-Jacket-192x192.gif" />
                Shtetl-Optimized
              </a>
              <br />
              <a href="https://www.youtube.com/c/georgehotzarchive">
                <Ico h="https://www.youtube.com/s/desktop/f06ee14b/img/favicon_48x48.png" />
                George Hotz hacking vlogs
              </a>
              <br />
              <a href="https://www.youtube.com/user/jblow888/videos">
                <Ico h="https://www.youtube.com/s/desktop/f06ee14b/img/favicon_48x48.png" />
                Jonathan Blow vlogs
              </a>
              <br/>
              <a href="https://kitze.io">
                <Ico h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAItmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTEyVDE4OjE2OjQxKzAyOjAwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNC0xMlQxODoxNjoxNSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNC0xMlQxODoxNjo0MSswMjowMCIgZXhpZjpDb2xvclNwYWNlPSIxIiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMzAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMjg4IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmYzI5OTU5MS1jNjNiLTQwZDQtYTY2MC01MDNkNjkyN2YzNGMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0Nzk0NTRjNC04NzQzLTQ1NGQtYWVhNS1jMTRmZTEyNDlmNzgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZGUyNGU1OS02NDYzLTQxNmUtOWVjOS0xYTZkY2EwYTczOTIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZGUyNGU1OS02NDYzLTQxNmUtOWVjOS0xYTZkY2EwYTczOTIiIHN0RXZ0OndoZW49IjIwMjMtMDQtMTJUMTg6MTY6NDErMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy41IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZl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" />
                Kitze.io
              </a>
              <br/>
              <a href="https://www.overcomingbias.com/">
                <Ico h="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb5119a05-d1c6-420f-96f7-07ed5219ad5a%2Fapple-touch-icon-60x60.png" />
                Overcoming Bias
              </a>
              <br/>
              <a href="https://theoatmeal.com">
                <Ico h="https://s3.amazonaws.com/theoatmeal-img/favicons/favicon-96x96.png" />
                The Oatmeal
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      </div>
{/* 
        <div className="text-3xl font-bold mt-6 pb-6 text-white">
          <BoltIcon />
          <div className="inline-block align-middle">I build software</div>
        </div>
        distributed computing & web&nbsp;development in{" "}
        <span className={"font-bold2"}>
          Go,&nbsp;Python&nbsp;and&nbsp;TypeScript
        </span>
        .<br />
        <div className="hidden md:block">
          I also care about building "user-first" stuff & product design.
        </div>
      </div>
      <Container>
        <div className="pt-4" style={{ colorScheme: "light" }}>
          {props.extraTitle ? (
            <h3 className="text-2xl font-light mb-10 text-zinc-400">
              {props.extraTitle}
            </h3>
          ) : null}
          {posts.map((post) => {
            return (
              // <div className="bg-zinc-800 p-4">
              // <div className="mb-10 p-10 bg-white shadow-xl shadow-black/[0.9]" key={post.slug} style={{boxShado2w: `inset 0px 0px 20px #000`}}>
              <PostComponent key={post.slug} post={post} />
              // </div>
              // </div>
            );
          })}
        </div>
        <Sidebar allTags={props.allTags} />
      </Container> */}
    </>
  );
}

export function NotFound() {
  return (
    <div className="container mx-auto px-8 py-6 rounded-lg bg-black text-black mt-10">
      Not found.
    </div>
  );
}
