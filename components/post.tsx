let blog: any[] = [];
import type {Post} from "@/postApi"

//@ts-ignore
import * as marked from "marked";

export function PostComponent(props: {post: Post, renderContent?: boolean, renderTitle?: boolean}) {
  const {post} = props;
  return (
    <>
      <div
        title={post.title}
        className={"px-0 rounded-2xl flex gap-4 <md:items-center mb-6 " + (props.renderTitle === false ? "hidden" : "")}
      >
        <img
          src={post.image}
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-xl bg-white block sshadow-lg shadow-[#55555580]"
        />

        <div className="flex flex-col gap-2 h-full">
          <h2
            className="text-4xl font-bold"
            style={{
              textShadow: "2px 2px 0px #00000050f",
            }}
          >
            <a href={post.url}>{post.title}</a>
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
                  className="text-sm p-2 bg-gray-200 text-black rounded-xl mr-2"
                >
                  {x}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {props.renderContent === false ? null : renderMarkdown(post)}
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
      className="ppost"
    />
  );
}
