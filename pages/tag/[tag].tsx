import { GetStaticPaths, GetStaticProps } from "next";
import Index, { StaticProps } from "../index";
import { Post, getAllTags, getPosts } from "@/components/postApi";

export type ParamType = { tag: string };

export const getStaticPaths: GetStaticPaths<ParamType> = async function (x) {
  return {
    fallback: false,
    paths: getAllTags().map((x) => ({ params: { tag: x } })),
  };
};

export const getStaticProps: GetStaticProps<StaticProps, ParamType> =
  async function (x) {
    let posts: Post[] = [];
    if (x.params) {
      posts = getPosts([x.params.tag]);
    }
    return {
      props: {
        posts,
        extraTitle: `🔍 All posts tagged as "${x.params?.tag}"`,
        allTags: getAllTags(),
      },
    };
  };

export default Index;
