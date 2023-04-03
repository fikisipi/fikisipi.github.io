let blog: any[] = [];
import type { Post } from "@/components/postApi";
import { Roboto } from "next/font/google";

const R = Roboto({ weight: ["300", "400"], subsets: ["latin"] });

//@ts-ignore
import * as marked from "marked";
import { useEffect } from "react";

export function PostComponent(props: {
  post: Post;
  prevPost?: Post;
  renderContent?: boolean;
  renderTitle?: boolean;
  footer?: boolean;
}) {
  const { post } = props;

  const singlePage =
    props.renderContent !== false && props.renderTitle === false;
  let footer = <></>;
  useEffect(() => {
    if (singlePage) {
      //@ts-ignore
      // let box = commentBox("5709383216398336-proj", {buttonColor: "blue"})
      // return () => box();
    }
  }, []);
  if (singlePage) {
    footer = (
      <>
        <div id="commenze_commentSection"></div>
        <div className="commentbox"></div>
      </>
    );
  }

  if (props.renderContent === false) {
    return (
      <div className="pb-10 px-4">
        <div className="grid lg:grid-cols-singlePost justify-items-center lg:justify-items-start">
          <img
            src={post.imageLinks!.wide}
            className="block w-full max-w-[400px] rounded-xl"
          />
          <div className="text-center pt-4">
            <h1 className="text-3xl font-bold mt-4">{props.post.title}</h1>
            <div className="my-2">
              <div className="uppercase mb-2 tracking-wide text-gray-400 h-[25px]">
                {post.date}
              </div>

              {post.tags.map((x) => {
                return (
                  <a
                    href={"#"}
                    key={x}
                    className="hover:ring-2 ring-indigo-500 text-sm px-2 py-[4px] text-zinc-400 md:border-[1px] border-2 border-[#ffffff28] font-regular text-black rounded-xl mr-2"
                  >
                    {x}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <article
        title={post.title}
        className={
          "px-0 rounded-2xl flex gap-4 <md:items-center mb-6 " +
          (props.renderTitle === false ? "hidden" : "")
        }
      >
        <img
          src={post.imageLinks!.square}
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-xl bg-white block sshadow-lg shadow-[#55555580]"
        />

        <div className="flex flex-col gap-2 h-full">
          <h2
            className="text-4xl font-bold text-gray-800 hover:text-gray-600"
            style={{
              textShadow: "2px 2px 0px #00000050f",
            }}
          >
            <a
              href={post.url}
              onClick={(e) => {
                e.preventDefault();
                document.location = post.url!;
              }}
            >
              {post.title}
            </a>
          </h2>
          <div className="uppercase tracking-wide text-gray-400 h-[25px]">
            {post.date}
          </div>
          <div
            className="fmax-w-[600px] fh-[82px] foverflow-hidden font-light text-lg"
            style={{
              textOverflow: "fade",
            }}
          >
            {post.tags.map((x) => {
              return (
                <a
                  href={"#"}
                  key={x}
                  className="hover:text-indigo-500 hover:border-indigo-500 text-sm px-2 py-[4px] text-zinc-500 bfg-gray-200 md:border-[1px] border-2 border-zinc-300 font-regular text-black rounded-xl mr-2"
                >
                  {x}
                </a>
              );
            })}
          </div>
        </div>
      </article>
      {
        /* @ts-ignore */
        props.renderContent !== false ? renderMarkdown(post) : null
      }
      {footer}
    </>
  );
}

export const blogPosts = blog as Post[];
export function renderMarkdown(post: Post) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked.parse(post.markdown),
      }}
      className={"ppost " + R.className}
    />
  );
}
