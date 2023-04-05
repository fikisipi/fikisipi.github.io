// import LogoSvg from "./logo2.svg";
import type { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import { getAllTags, getPosts, Post } from "@/components/postApi";
import { PostComponent } from "@/components/post";
import { Sidebar } from "./_document";
import Head from "next/head";

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
      allTags: getAllTags(),
    },
  };
};

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
        <title>fikisipi</title>
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
          content="distributed programming &amp; web development"
          name="twitter:description"
        />
        <meta
          content="distributed programming &amp; web development"
          name="description"
        />
        <meta
          content="distributed programming &amp; web development"
          name="og:description"
        />
        <meta content="fikisipi" name="og:title" />
      </Head>{" "}
      <div
        className={
          "container px-4 mx-auto mt-6 text-center text-lg font-light text-gray-400 " +
          inter.className
        }
      >
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
        <div className="hidden text-sm mt-10 mb-10 tracking-wide font-normal flex flex-colx md:flex-row mx-auto justify-center">
          <a
            href=""
            className="block text-white mr-2 align-middle p-2 border-[1px] border-gray-600 rounded-xl"
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
            className="block text-white mr-2 align-middle p-2 border-[1px] border-gray-600 rounded-xl"
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
      <div className="text-gray-800 mt-5 bg-white lg:bg-gradient-to-r from-white from-[40%] to-zinc-200 border-t-[1px] border-zinc-800">
        <div className="mx-auto container grid lg:grid-cols-bb">
          <div className="px-4 py-10 bg-white" style={{ colorScheme: "light" }}>
            {props.extraTitle ? (
              <h3 className="text-2xl font-light mb-10 border-b-2 border-zinc-300 text-zinc-500">
                {props.extraTitle}
              </h3>
            ) : null}
            {posts.map((post) => {
              return (
                <div className="mb-10" key={post.slug}>
                  <PostComponent post={post} />
                </div>
              );
            })}
          </div>
          <Sidebar allTags={props.allTags} />
        </div>
      </div>
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
