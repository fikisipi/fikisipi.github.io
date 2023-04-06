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
          "container px-4 mx-auto my-6 text-center text-lg font-light text-gray-200 " +
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
      </Container>
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
