//@ts-ignore
import blog from "blog";

export type Post = {
  title: string;
  image: string;
  desc: string;
  markdown: string;
  url: string;
  slug: string;
  time: number;
};

export const blogPosts = blog as Post[];
import { useTitle, useMeta } from "hoofd/preact";
import * as React from "preact";
import * as marked from "marked";

export function renderPost(post) {
  return <div
  dangerouslySetInnerHTML={{
    __html: marked.parse(post.markdown),
  }}
  className="ppost"
/>
}

export default function (props: { post: Post }) {
  let v = props.post;
  useTitle(v.title);
  useMeta({
    name: "description",
    content: v.desc,
  });
  useMeta({
    name: "og:title",
    content: v.title,
  });
  useMeta({
    name: "og:description",
    content: v.desc,
  });
  return (
    <>
      <style>{`.ppost ul {list-style-type: square; margin-left: 20px;} `}</style>
      <div tw="py-8">
        <div tw="container !max-w-[1200px] mx-auto px-8">
          <div tw="grid lg:grid-cols-aa justify-items-center lg:justify-items-start">
            <img src={v.image} tw="w-full max-w-[400px] rounded-xl" />
            <div tw="text-center pt-10">
              <h1 tw="text-3xl font-bold mt-4">{v.title}</h1>
              <div tw="uppercase tracking-wide text-gray-400 my-2">
                {v.time} minute read
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="bg-white font-serif text-black">
        <div tw="container !max-w-[1200px] mx-auto px-8 text-xl leading-relaxed py-8 pb-14">
          <h2 tw="text-gray-500 my-6">{v.desc}</h2>

          <div
            dangerouslySetInnerHTML={{
              __html: marked.parse(v.markdown),
            }}
            className="ppost"
          />
        </div>
      </div>
    </>
  );
}
