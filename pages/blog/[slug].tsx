import { useRouter } from "next/router";
import {
  parsePost,
  getAllSlugs,
  Post,
  getPreviousPost,
  getAllTags,
} from "@/components/postApi";
import { PostComponent } from "@/components/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { Sidebar } from "@/components/sidebar";
import Head from "next/head";
import { useEffect, useState } from "react";
import { StaticProps } from "..";
import { Container } from "@/components/container";

export const getStaticPaths: GetStaticPaths = async function () {
  return {
    fallback: false,
    paths: getAllSlugs().map((slug) => ({ params: { slug } })),
  };
};

export const getStaticProps: GetStaticProps<
  Partial<StaticProps>,
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
  const prev: { prevPost?: Post; allTags?: string[] } = {};
  if (prevPost != null) {
    prev.prevPost = prevPost;
  }
  prev.allTags = getAllTags();
  return { props: { post, ...prev } };
};

export default function PostPage(props: {
  post: Post;
  prevPost?: Post;
  allTags?: string[];
}) {
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
      {/* <div className="container mx-auto mt-0 lgx:w-[900px]">
      <h1 className="text-3xl font-bold py-0 text-center">{props.post.title}</h1>
      </div> */}
      <Container style={{ borderTopWidth: 0 }}>
        <div
          className="px-4 pt-8 pb-10 text-black"
          style={{ colorScheme: "light" }}
        >
          <PostComponent post={props.post} {...{ prevPost }} />
        </div>
        <Sidebar allTags={props.allTags} />
      </Container>
    </>
  );
  return <div>{JSON.stringify(props)}</div>;
  //   let post = parsePostFile(slug);
  //     if(!post) return <div>Not found</div>

  //   return <PostComponent post={post }/>
}
