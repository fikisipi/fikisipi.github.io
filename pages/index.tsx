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
  console.log(props)
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
      <div className="bg-white text-gray-800 mt-5 py-10">
        <div className="mx-auto container px-4 grid md:grid-cols-bb">
          <div>
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
                      className="rounded-xl bg-white mb-10 block"
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
                        <a href={post.url}>{post.tags.join(", ")}</a>
                      </div>
                    </div>
                  </div>

                  {renderPost(post)}
                </>
              );
            })}
          </div>
          <div>
            <div className={"xax"}>
              <h3 className="font-bold border-b-1 border-gray-200 mb-2">
                Blogs/sites I like
              </h3>
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

export function Header() {
  return (
    <div
      className={
        "sticky py-4 w-full top-0 border-b-[1px] border-[#ffffff28] z-40 bg-[#00000080]"
      }
      style={{
        backgroundf:
          "radial-gradient(at center top, #4e4363a0, #1D1726A0, #000000a0)",
        backdropFilter: "blur(3px)",
        "-webkit-backdrop-filter": "blur(3px)",
      }}
    >
      <div
        className={
          "container mx-auto px-4 font-semibold text-slate-300 text-xl flex justify-between"
        }
      >
        <a href="/">
          <img src={"/logo2.svg "} className="h-[35px]" />
        </a>
        <div className="flex text-sm font-normal items-center">
          <form className="relative">
            <input
              placeholder="Search"
              className="w-[120px] md:w-[180px] px-2 border-[0px] bg-[#ffffff40] py-1 border-gray-500 rounded-xl"
            />
            <button className="absolute top-1 right-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
            className="ml-1 bg-blue-500 text-white rounded-xl py-1 px-2 font-light"
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
  );
}

export function NotFound() {
  return (
    <div className="container mx-auto px-8 py-6 rounded-lg bg-white text-black mt-10">
      Not found.
    </div>
  );
}

const navigation = {
  social: [
    {
      name: "Instagram",
      href: "https://instagram.com/fikisipi",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/fikisipi",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/fikisipi",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export  function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
          Privacy | Contact | Go to top
          {null &&
            navigation.social.map((item) => (
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
          &copy; 2022 @fikisipi
        </p>
      </div>
    </footer>
  );
}

// const { hydrate, prerender: P } = withTwind(
//   {
//     theme: {
//       extend: {
//         gridTemplateColumns: {
//           aa: "170px 1fr",
//           bb: "1fr 300px",
//         },
//       },
//     },
//   },
//   (data) => <App {...data} />
// );


async function prerender(data: any): Promise<PrerenderResult> {
  let a: any = await P(data);
  const head = toStatic();
  const elements = new Set([
    ...head.links.map((props) => ({ type: "link", props })),
    ...head.metas.map((props) => ({ type: "meta", props })),
    ...head.scripts.map((props) => ({ type: "script", props })),
  ]);
  a = {
    ...a,
    head: {
      lang: head.lang,
      title: head.title,
      elements,
    },
  };
  return a;
}
