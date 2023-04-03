import { useRouter } from "next/router";
import {
  parsePost,
  getAllSlugs,
  Post,
  getPreviousPost,
} from "@/components/postApi";
import { PostComponent } from "@/components/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { Sidebar } from "../_document";
import Head from "next/head";
import { useEffect, useState } from "react";

export const getStaticPaths: GetStaticPaths = async function () {
  return {
    fallback: false,
    paths: getAllSlugs().map((slug) => ({ params: { slug } })),
  };
};

export const getStaticProps: GetStaticProps<
  { post?: Post; prevPost?: Post },
  { slug: string }
> = async function (c) {
  if (!c.params || !c.params.slug) {
    return { redirect: "/", props: {} };
  }
  const { slug } = c.params;
  const post = parsePost(slug);
  const prevPost: Post | null = getPreviousPost(slug);
  if (!post) {
    return { redirect: "/", props: {} };
  }
  const prev: { prevPost?: Post } = {};
  if (prevPost != null) {
    prev.prevPost = prevPost;
  }
  return { props: { post, ...prev } };
};

export default function PostPage(props: { post: Post; prevPost?: Post }) {
  const { prevPost } = props;

  return (
    <>
      <Head>
        <title>{props.post.title + " - fikisipi"}</title>
        <meta content={props.post.title} name="og:title" />
        <meta content={props.post.desc} name="twitter:description" />
        <meta content={props.post.desc} name="description" />
        <meta content={props.post.desc} name="og:description" />
      </Head>
      <div className="container mx-auto mt-5 lgx:w-[900px]">
        <PostComponent post={props.post} renderContent={false} />
      </div>
      <div className="text-gray-800 bg-white lg:bg-gradient-to-r from-white from-[40%] to-zinc-200 border-t-[1px] border-zinc-800">
        <div className="mx-auto container grid lg:grid-cols-bb">
          <div
            className="px-4 py-10 bg-white text-black"
            style={{ colorScheme: "light" }}
          >
            <PostComponent
              post={props.post}
              renderTitle={false}
              {...{ prevPost }}
            />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
  return <div>{JSON.stringify(props)}</div>;
  //   let post = parsePostFile(slug);
  //     if(!post) return <div>Not found</div>

  //   return <PostComponent post={post }/>
}
