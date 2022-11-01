import * as React from "preact";
import { useContext } from "preact/hooks";
import type { Post } from "./post";

export const BlogContext = React.createContext<Post[]>([]);

function Chev() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#fff"
      tw="w-4 h-4 inline-block absolute left-[-25px] top-[7px]"
    >
      <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
      <path
        fill-rule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
function Ico(props: { h: string }) {
  return (
    <img
      src={props.h}
      tw="border-2 border-gray-600 w-5 h-5 rounded-full inline-block absolute left-[-25px] top-[5px]"
    />
  );
}
import { useTitle, useMeta } from "hoofd/preact";

export default function () {
  let [desc, title] = [
    "distributed programming & product development",
    "fikisipi",
  ];
  useTitle(title);
  useMeta({
    name: "description",
    content: desc,
  });
  useMeta({
    name: "og:title",
    content: title,
  });
  useMeta({
    name: "og:description",
    content: desc,
  });
  useMeta({
    name: "og:image",
    content: "https://fikisipi.github.io/blog/opengraph.png"
  })
  useMeta({
    name: "twitter:image",
    content: "https://fikisipi.github.io/blog/opengraph.png"
  })
  useMeta({
    name: "twitter:card",
    content: "summary"
  })
  useMeta({
    name: "twitter:site",
    content: "@fikisipi"
  })
  useMeta({
    name: "twitter:title",
    content: title
  })
  useMeta({
    name: "twitter:description",
    content: desc
  })
  let posts = useContext(BlogContext);
  let firstPost = posts[0];

  posts.map((x) => {
    x.url += "/";
  });

  return (
    <>
      {" "}
      <div tw={"container px-4 mx-auto mt-6"}>
        <div
          tw={
            "grid lg:grid-cols-3 gap-4 font-light text-[#ffffffc0] text-xl leading-loose"
          }
        >
          <div
            tw={
              "mt-10 py-5 px-4 rounded-lg border-[1px] border-[#ffffff28] shadow-lgx"
            }
            style={{
              "--tw-shadow":
                "0 10px 15px -3px rgba(138,101,191,0.1), 0 4px 6px -2px rgba(138,101,191,0.05)",
            }}
          >
            <h1
              tw={
                "font-semibold tracking-wide text-xl mb-4 flex items-center text-[#fff]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                tw="w-12 h-12 rounded-full border-2 border-[#ffffff28] p-2"
              >
                <path d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" />
              </svg>
            </h1>
            I'm a software engineer living in Skopje. I'm interested in
            distributed programming and web development, mostly using{" "}
            <strong tw={"font-bold"}>Go, Python and TypeScript</strong>.
            <br />
            <br />I ocassionally{" "}
            <strong tw={"font-bold"}>do graphics/UX work</strong> and product
            development.
          </div>
          <div
            tw={
              "mt-10 py-5 px-4 rounded-lg border-[1px] border-[#ffffff28] shadow-lgx"
            }
            style={{
              "--tw-shadow":
                "0 10px 15px -3px rgba(138,101,191,0.1), 0 4px 6px -2px rgba(138,101,191,0.05)",
            }}
          >
            <h1
              tw={
                "font-semibold tracking-wide text-xl mb-4 flex items-center text-[#fff]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                tw="w-12 h-12 rounded-full border-2 border-[#ffffff28] p-2"
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
            <div tw={"xax"}>
              <a href={"https://polartask.com"}>
                <Chev />
                <strong tw="font-bold">PolarTask</strong>: a task tracker
              </a>
              <br />
              <a
                href={"https://twitter.com/mkrobot/status/1165955815389433856"}
              >
                <Chev />
                Live <strong tw="font-bold">
                  vehicle tracker/counter
                </strong>{" "}
                with YOLOv3
              </a>{" "}
              <br />
              <a href={"https://github.com/fikisipi/elkai"}>
                <Chev />
                <strong tw={"font-bold"}>elkai</strong>: Travelling Salesman
                approximator for Python
              </a>{" "}
              <br />
            </div>
          </div>
          <div
            tw={
              "mt-10 py-5 px-4 rounded-lg border-[1px] border-[#ffffff28] shadow-lgx"
            }
            style={{
              "--tw-shadow":
                "0 10px 15px -3px rgba(138,101,191,0.1), 0 4px 6px -2px rgba(138,101,191,0.05)",
            }}
          >
            <h1
              tw={
                "font-semibold tracking-wide text-xl mb-4 flex items-center text-[#fff]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                tw="w-12 h-12 rounded-full border-2 border-[#ffffff28] p-2"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </h1>
            A list of sites I like: <br />
            <style>{`.xax a{margin-left: 30px; position: relative; border-bottom: 2px solid #ffffff40;} .xax a:hover{color: #999;}`}</style>
            <div tw={"xax"}>
              <a href="https://metaculus.com">
                <Ico h="https://d3s0w6fek99l5b.cloudfront.net/static/icon128.b1632c72a01c.png" />
                Metaculus
              </a>
              <br />
              <a href="https://theoatmeal.com">
                <Ico h="https://s3.amazonaws.com/theoatmeal-img/favicons/favicon-96x96.png" />
                The Oatmeal
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
                <Ico h="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/8c00a032-defa-44b7-9ab7-b7cc6d88db75/apple-touch-icon-60x60.png" />
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
                <Chev h="https://www.youtube.com/s/desktop/f06ee14b/img/favicon_48x48.png" />
                Jonathan Blow game programming vlogs
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),linear-gradient(to right, #4F46E5F0, #7C3AEDF0)`, backgroundRepeat: "repeat,no-repeat"}}
      tw="mt-20 pt-10 pb-[130px]">
        <div tw="container mx-auto px-2">
          <div
            title={firstPost.title}
            onClick={() => (window.location.href = firstPost.url)}
            tw="p-4 rounded-2xl grid grid-cols-1 lg:grid-cols-aa justify-items-center lg:justify-items-start cursor-pointer hover:bg-[#ffffff20]"
          >
            <img
              src={firstPost.image}
              tw="rounded-xl bg-white mb-10 block"
              style={{
                boxShadow: `0 20px 25px -5px rgba(0,0,0,0.3), 0 10px 10px -5px rgba(0,0,0,0.09)`,
                width: "100%",
                maxWidth: 400,
              }}
            />
            <div>
              <h2
                tw="text-4xl font-bold mb-2"
                style={{ textShadow: "2px 2px 0px #00000050" }}
              >
                <a href={firstPost.url}>{firstPost.title}</a>
              </h2>
              <div tw="uppercase tracking-wide">
                {firstPost.time} minute read
              </div>
              <div
                tw="mt-6 max-w-[600px] h-[82px] overflow-hidden font-light text-lg"
                style={{
                  textOverflow: "fade",
                  textShadow: "2px 2px 1px #00000020",
                }}
              >
                <a href={firstPost.url}>{firstPost.desc}</a>
              </div>
              <form action={firstPost.url}>
                <button
                  style={{ textShadow: "2px 2px 0px #00000030" }}
                  tw="rounded-lg border-2 border-white p-2 px-4 mt-6 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    tw="w-5 h-5 mr-2"
                  >
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path
                      fill-rule="evenodd"
                      d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Read
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div tw="bg-white py-10 pb-20 text-black">
        <div tw="px-8 mx-auto container grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative top-[-100px]">
          {posts.map((post) => {
            return (
              <div
                onClick={() => (window.location.href = post.url)}
                title={post.title}
                tw="cursor-pointer rounded-2xl p-4 bg-white hover:bg-gray-200"
                style={{
                  boxShadow: `0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.09)`,
                }}
              >
                <a href={post.url}>
                  <img
                    src={post.image}
                    tw="rounded-xl block mx-auto"
                    style={{ width: "100%", maxWidth: 400 }}
                  />
                  <h2 tw="uppercase tracking-wide font-regular text-gray-500 mt-4 text-sm">
                    {post.time} minute read
                  </h2>
                  <h1 tw="text-indigo-800 my-4 text-xl font-semibold">
                    {post.title}
                  </h1>
                </a>
                <a href={post.url}>{post.desc}</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
