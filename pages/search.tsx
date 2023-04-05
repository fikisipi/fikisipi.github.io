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
      //@ts-ignore
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
            <span className="font-regular ml-2 mr-2 text-left flex-auto">
              {post!.title}{" "}
              <small className="mx-4 align-middle inline-block text-xs text-indigo-300">
                {post!.date}
              </small>
            </span>
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-regular mr-0">
              {post?.tags}
            </span>
          </a>
        </div>
      );
    });
    if (R.length === 0) {
      R = (
        <div className="text-center">
          <div
            className="p-4 mb-4 text-sm text-red-300 rounded-lg bg-red-900 inline-block"
            role="alert"
          >
            <span className="font-medium">Sorry!</span> No results were found.
          </div>
        </div>
      );
    } else {
      R = <div>{R}</div>;
    }
    return (
      <div className="container mx-auto text-white px-10 py-10 mt-4">
        <div className="xtext-lg xfont-bold pb-5 pl-2">
          <form
            action="/search"
            className="block relative mx-auto max-w-[500px]"
          >
            <input
              id="qq"
              name="q"
              className="z-20 outline-indigo-700/[0.5] rounded-lg w-full block bg-white/[0.1] py-[9px] px-4 font-normal text-sm"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-indigo-700 rounded-r-lg border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 !bg-indigo-600 !hover:bg-indigo-700 !focus:ring-indigo-800"
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
                  className="inline-block p-3 text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active !text-gray-400 !border-gray-400"
                  aria-current="page"
                >
                  Results
                </a>
              </li>
            </ul>
          </div>
          <div className="text-gray-400 text-sm pt-4">
            {results.length} result(s) for "{router.query.q}"
          </div>
        </div>
        {R}
      </div>
    );
  }
  return (
    <div className="mt-10 text-center">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-400 animate-spin inline-block fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-onlyf">Loading...</span>
      </div>
    </div>
  );
}
