let blog: any[] = [];
import { type Post } from "@/components/postApi";
import { postOutLink, domainName } from "@/components/const";
import { Roboto } from "next/font/google";

const R = Roboto({ weight: ["300", "400"], subsets: ["latin"] });

//@ts-ignore
import * as marked from "marked";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function PostComponent(props: {
  post: Post;
  prevPost?: Post;
  renderContent?: boolean;
  renderTitle?: boolean;
  footer?: boolean;
}) {
  const { post } = props;

  // Was previously used for comments:
  // const loadScript = () => {
  //   let script = document.createElement("script");
  //   script.setAttribute("crossOrigin", "anonymous");
  //   script.src =
  //     "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0";
  //   script.setAttribute("nonce", "o8EwTXDy");
  //   script.type = "text/javascript";
  //   document.body.append(script);
  //   return () => script.remove();
  // };

  // useEffect(() => {
  //   loadScript();
  // }, []);

  const singlePage =
    props.renderContent !== false && props.renderTitle === false;
  let footer = <></>;
  if (singlePage) {
    footer = (
      <>
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
                    href={"/tag/" + x}
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
            className="text-3xl font-bold text-gray-800 hover:text-gray-600"
            style={{
              // textShadow: "2px 2px 0px #00000050f",
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
                  href={"/tag/" + x}
                  key={x}
                  className="hover:text-zinc-400 text-xs px-[5px] py-[6px] text-zinc-500 bfg-gray-200 md:border-[1px] border-2 border-zinc-300 font-regular text-zinc-600 rounded-[4px] mr-1"
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
      <div className="mt-6 relative">

        <Share post={post} />

        {/* <div className="inline-block align-top ml-2"> */}
          {/* <div className="fb-share-button" data-href={`${domainName}${postOutLink}/${post.slug}`} data-layout="box_count" data-size=""></div> */}
          {/* <div className="inline-block left-0  bg-gradient-to-r from-zinc-300 via-white to-zinc-200 absolute z-2 w-[120px] h-[25px]" /> */}
        {/* </div> */}
      </div>
      {footer}
    </>
  );
}

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
function Share(props: { post: Post }) {
  const { post } = props;
  return (
    <>
      <a
        href={`https://news.ycombinator.com/submitlink?t=${encodeURIComponent(
          post.title
        )}&u=${encodeURIComponent(domainName + post.url)}`}
        className="text-xs font-semibold px-2 py-1 rounded bg-orange-100 text-orange-500"
      >
        <svg
          className="w-3 h-3 inline-block align-middle mr-2"
          width="16"
          height="16"
          viewBox="0 0 256 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <rect fill="#FB651E" x={0} y={0} width={256} height={256} />
            <path
              d="M119.373653,144.745813 L75.43296,62.4315733 L95.5144533,62.4315733 L121.36192,114.52416 C121.759575,115.452022 122.2235,116.413008 122.753707,117.407147 C123.283914,118.401285 123.747838,119.428546 124.145493,120.48896 C124.410597,120.886615 124.609422,121.251127 124.741973,121.582507 C124.874525,121.913886 125.007075,122.212123 125.139627,122.477227 C125.802386,123.802744 126.39886,125.095105 126.929067,126.354347 C127.459274,127.613589 127.923198,128.773399 128.320853,129.833813 C129.381268,127.580433 130.541078,125.1614 131.80032,122.57664 C133.059562,119.99188 134.351922,117.307747 135.67744,114.52416 L161.92256,62.4315733 L180.612267,62.4315733 L136.27392,145.739947 L136.27392,198.826667 L119.373653,198.826667 L119.373653,144.745813 Z"
              fill="#FFFFFF"
            />
          </g>
        </svg>
        Share
      </a>{" "}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          post.title
        )}&url=${encodeURIComponent(domainName + post.url)}`}
        className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          className="w-3 h-3 inline-block align-middle mr-2"
          viewBox="0 0 248 204"
        >
          <path
            fill="#1d9bf0"
            d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
          />
        </svg>
        Share
      </a>
    </>
  );
}

