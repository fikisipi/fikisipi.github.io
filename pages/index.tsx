// import LogoSvg from "./logo2.svg";
import {renderPost} from "./post"
import type { GetStaticProps } from "next"
import { Inter } from 'next/font/google'
import {getPosts} from "@/posts"

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps: GetStaticProps = async function () {
  return {props: {
    posts: getPosts()
  }}
}

function Ico(props: { h: string }) {
  return (
    <img
      src={props.h}
      className="border-0 border-gray-600 w-5 h-5 rounded-full inline-block relative fleft-[-25px] ftop-[5px] mr-1 my-2"
    />
  );
}

export default function A(props) {
  let [desc, title] = [
    "distributed programming & product development",
    "fikisipi",
  ];
  // useTitle(title);
  // useMeta({
  //   name: "description",
  //   content: desc,
  // });
  // useMeta({
  //   name: "og:title",
  //   content: title,
  // });
  // useMeta({
  //   name: "og:description",
  //   content: desc,
  // });
  // useMeta({
  //   name: "og:image",
  //   content: "https://fikisipi.github.io/blog/opengraph.png",
  // });
  // useMeta({
  //   name: "twitter:image",
  //   content: "https://fikisipi.github.io/blog/opengraph.png",
  // });
  // useMeta({
  //   name: "twitter:card",
  //   content: "summary",
  // });
  // useMeta({
  //   name: "twitter:site",
  //   content: "@fikisipi",
  // });
  // useMeta({
  //   name: "twitter:title",
  //   content: title,
  // });
  // useMeta({
  //   name: "twitter:description",
  //   content: desc,
  // });
  let posts: any[] = props.posts;
  let firstPost = posts[0];

  posts.map((x) => {
    x.url += "/";
  });

  return (
    <>
      {" "}
      <div
        className={
          "container px-4 mx-auto mt-6 text-center text-lg font-light text-gray-400 " + inter.className
        }
      >
        <div className="text-3xl font-bold mt-4 pb-2 text-white">I build software</div>
        especially web development & distributed computing using{" "}
        <span className={"font-bold2"}>Go, Python and TypeScript</span>.<br />I also
        care about building "user-first" stuff & product design.
        <div className="text-sm mt-5 tracking-wide font-normal flex flex-colx md:flex-row mx-auto justify-center">
          <a
            href=""
            className="block text-blue-300 mr-2 align-middle p-2 border-[1px] border-gray-600 rounded-xl"
          >
            @fikisipi on
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="inline-block align-middle mx-1"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
            twitter
          </a>
          <a
            href=""
            className="block text-blue-300 mr-2 align-middle p-2 border-[1px] border-gray-600 rounded-xl"
          >
            @fikisipi on
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="inline-block mx-1 align-middle"
            >
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
      
      <div className="bgd-white text-gray-800 mt-5 bg-gradient-to-r from-white from-30% via-black via-40% to-black">
        <div className="mx-auto container grid md:grid-cols-bb">
          <div className="px-4 py-10 bg-white" style={{colorScheme: "light"}}>
            {posts.map((post) => {
              return (
                <>
                  <div
                    title={post.title}
                    onClick={() => (window.location.href = post.url)}
                    className="px-0 rounded-2xl grid grid-cols-1 lg:grid-cols-aa justify-items-center lg:justify-items-start cursor-pointer hover:bg-[#ffffff20]"
                  >
                    <img
                      src={post.image}
                      className="rounded-xl bg-white mb-10 block shadow-lg shadow-[#55555580]"
                      style={{
                        width: "150px",
                        height: "150px",
                        // maxWidth: 400,
                      }}
                    />

                    <div>
                      <h2
                        className="text-4xl font-bold mb-2"
                        style={{
                          textShadow: "2px 2px 0px #00000050f",
                        }}
                      >
                        <a href={post.url}>{post.title}</a>
                      </h2>
                      <div className="uppercase tracking-wide text-gray-400">
                        {post.date}
                      </div>
                      <div
                        className="mt-6 max-w-[600px] h-[82px] overflow-hidden font-light text-lg"
                        style={{
                          textOverflow: "fade",
                        }}
                      >
                        {post.tags.map(x => {
                          return <a href={x} className="text-sm p-2 bg-gray-200 text-black rounded-xl mr-2">{x}</a>
                        })}
                      </div>
                    </div>
                  </div>

                  {renderPost(post)}
                </>
              );
            })}
          </div>
          <div className="px-2 relative top-[0px] bg-gradient-to-r from-[#4D3575] to-black" style={{boxShadow2: `5px 0px 10px #000 inset`, back2ground: "url(https://images.hdqwalls.com/wallpapers/dark-abstract-blur-4k-on.jpg) no-repeat", backgroundSize: "cover"}}>
            <div className={"py-4 pl-4 sidebar text-purple-100 text-sm"}>
            <h3 className="font-medium border-b-0 border-gray-200 mb-2 bg-[#00000040] p-2 rounded-md">
                My projects
              </h3>
              <a href="https://github.com/fikisipi/elkai">
                <Ico h="https://github.com/fluidicon.png" />
                elkai - a TSP solver {/*<small>a travelling salesman solver</small>*/}
              </a>
              <a href="https://twitter.com/mkrobot/status/1165955815389433856">
              <Ico h="https://github.com/fluidicon.png" />
                vkh - video feed car tracking
              </a>
              <h3 className="mt-2 font-medium border-b-0 border-gray-200 mb-2 bg-[#00000040] p-2 rounded-md">
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
        </div>
      </div>
      <div>
        
        <div className="bg-white py-10 pb-20 text-black hidden">
          <div className="px-8 mx-auto container grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative top-[-100px]">
            {posts.map((post) => {
              return (
                <div
                  onClick={() => (window.location.href = post.url)}
                  title={post.title}
                  className="cursor-pointer rounded-2xl p-4 bg-white hover:bg-gray-200"
                  style={{
                    boxShadow: `0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.09)`,
                  }}
                >
                  <a href={post.url}>
                    <img
                      src={post.image}
                      className="rounded-xl block mx-auto"
                      style={{
                        width: "100%",
                        maxWidth: 400,
                      }}
                    />
                    <h2 className="uppercase tracking-wide font-regular text-gray-500 mt-4 text-sm">
                      {post.time} minute read
                    </h2>
                    <h1 className="text-indigo-800 my-4 text-xl font-semibold">
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

export function NotFound() {
  return (
    <div className="container mx-auto px-8 py-6 rounded-lg bg-white text-black mt-10">
      Not found.
    </div>
  );
}