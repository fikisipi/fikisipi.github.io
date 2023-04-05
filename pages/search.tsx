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
    if (typeof router.query.q == "string") {
      //@ts-ignore
      qq.value = router.query.q;
      headerSearch.value = router.query.q;
    }
  }, [router.query]);
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
        <div className="block mb-4">
          <a
            href={post!.url}
            className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              {post!.date}
            </span>
            <span className="font-regular mr-2 text-left flex-auto">
              {post!.title}
            </span>
          </a>
        </div>
      );
    });
    if (R.length === 0) {
      R = (
        <div
          className="p-4 mb-4 text-sm text-red-300 rounded-lg bg-red-900 inline-block"
          role="alert"
        >
          <span className="font-medium">Sorry!</span> No results were found.
        </div>
      );
    } else {
      R = <div>{R}</div>;
    }
    return (
      <div className="container mx-auto text-white px-10 py-10 mt-4">
        <div className="xtext-lg xfont-bold pb-10 pl-2">
          <form
            action="/search"
            className="block relative mx-auto max-w-[500px]"
          >
            <input
              id="qq"
              name="q"
              className="z-20 outline-blue-700/[0.5] rounded-lg w-full block bg-white/[0.1] py-[9px] px-4 font-normal text-sm"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 !bg-blue-600 !hover:bg-blue-700 !focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 !text-gray-400 !border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active !text-blue-500 !border-blue-500"
                  aria-current="page"
                >
                  Results
                </a>
              </li>
            </ul>
          </div>
          <div className="text-zinc-500 pt-4">
            {results.length} results for "{router.query.q}"
          </div>
        </div>
        {R}
      </div>
    );
  }
  return <div>Loading...</div>;
}
