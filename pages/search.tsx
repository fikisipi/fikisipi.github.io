import { Post, getPosts } from "@/components/postApi";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import MiniSearch from "minisearch";
import { useEffect, useState } from "react";

export const getStaticProps: GetStaticProps = async function (a) {
  return {
    props: {
      allPosts: getPosts().map((x) => ({ ...x, tags: x.tags.join(" ") })),
    },
  };
};

export default function Search(props: { allPosts: Post[] }) {
  let router = useRouter();
  let [index, setSearch] = useState<null | MiniSearch>(null);
  useEffect(() => {
    let m = new MiniSearch({
      fields: ["title", "markdown", "tags"],
    });
    m.addAll(props.allPosts.map((x) => ({ ...x, id: x.slug })));
    setSearch(m);
  }, [router.asPath]);
  if (index != null && typeof router.query.q == "string") {
    let results = index.search(router.query.q);
    let R: any = results.map((x) => {
      let post = props.allPosts.find((post) => post.slug === x.id);
      return (
        <li key={post?.slug}>
          <a href={`/blog/${post?.slug}`} className="text-blue-500">
            {post?.title} - <small>{post?.date}</small>
          </a>
        </li>
      );
    });
    if (R.length === 0) {
      R = <div className="text-red-400">No results.</div>;
    } else {
      R = <ul style={{ listStyle: "square", marginLeft: 20 }}>{R}</ul>;
    }
    return (
      <div className="container mx-auto text-white px-10 py-10 mt-10">
        <h1 className="text-lg font-bold">
          Search results for "{router.query.q}":{" "}
        </h1>
        {R}
        <div className="text-center py-4 lg:px-4 mt-10">
          <div
            className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              Note
            </span>
            <span className="font-regular mr-2 text-left flex-auto">
              I haven't spent enough time on the search functionality and it
              might suck.
            </span>
          </div>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
}
