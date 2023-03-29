import * as React from "preact";
import { useContext } from "preact/hooks";
import type { Post } from "./post";
import {renderPost} from "./post"

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
      tw="border-0 border-gray-600 w-5 h-5 rounded-full inline-block relative fleft-[-25px] ftop-[5px] mr-1 my-2"
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
      <div tw={"container px-4 mx-auto mt-6 text-center text-lg font-light text-gray-400"}>
        <div tw="text-3xl font-bold mt-4 pb-2 text-white">I build software</div>
            especially
            web development & distributed computing using{" "}
            <span tw={"font-bold2"}>Go, Python and TypeScript</span>.<br/>I also care about building "user-first" stuff & product design. 

            <div tw="text-sm mt-5 tracking-wide font-normal flex flex-colx md:flex-row mx-auto justify-center">
              <a href="" tw="block text-blue-300 mr-2 align-middle p-2 border-[1px] border-gray-600 rounded-xl">@fikisipi on
              <svg fill="currentColor" viewBox="0 0 24 24" width={16} height={16} tw="inline-block align-middle mx-1">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
              twitter</a>
              <a href="" tw="block text-blue-300 mr-2 align-middle p-2 border-[1px] border-gray-600 rounded-xl">@fikisipi on
              <svg fill="currentColor" viewBox="0 0 24 24" width={16} height={16} tw="inline-block mx-1 align-middle">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        GitHub
              </a>
            </div>
      </div>
      <div tw="bg-white text-gray-800 mt-5 py-10">
          <div tw="mx-auto container px-4 grid md:grid-cols-bb">
            <div>
              {posts.map((post) => {
            return (
              <>
                        <div
            title={post.title}
            onClick={() => (window.location.href = post.url)}
            tw="px-0 rounded-2xl grid grid-cols-1 lg:grid-cols-aa justify-items-center lg:justify-items-start cursor-pointer hover:bg-[#ffffff20]"
          >
                          <img
              src={post.image}
              tw="rounded-xl bg-white mb-10 block"
              style={{  
                width: "150px",
                height: "150px"
                // maxWidth: 400,
              }}
            />

                          <div>
              <h2
                tw="text-4xl font-bold mb-2"
                style={{ textShadow: "2px 2px 0px #00000050f" }}
              >
                <a href={post.url}>{post.title}</a>
              </h2>
              <div tw="uppercase tracking-wide text-gray-400">
                {post.date}
              </div>
              <div
                tw="mt-6 max-w-[600px] h-[82px] overflow-hidden font-light text-lg"
                style={{
                  textOverflow: "fade",
                }}
              >
                <a href={post.url}>{post.tags.join(", ")}</a>
              </div>
            </div>
            </div>

              {renderPost(post)}
              </>
            )
              })}
            </div>
            <div>
            <div tw={"xax"}>
              <h3 tw="font-bold border-b-1 border-gray-200 mb-2">Blogs/sites I like</h3>
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
                Jonathan Blow
              </a>
            </div>
            </div>
          </div>
      </div>
      <div>
      <div style={{display: "none", background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),linear-gradient(to right, #4F46E5F0, #7C3AEDF0)`, backgroundRepeat: "repeat,no-repeat"}}
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
      <div tw="bg-white py-10 pb-20 text-black hidden">
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
      </div>
    </>
  );
}
