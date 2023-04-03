import { parse } from "yaml";

export type Post = {
  title: string;
  image: string;
  date: string;
  tags: string[];
  desc: string;
  markdown?: string;
  url?: string;
  slug?: string;
};

export function getPosts() {
  let fs = require("fs");
  let output: Post[] = [];
  fs.readdirSync("./posts/").forEach((file: string) => {
    if (!file.endsWith(".md")) return;
    output.push(parsePostFile(file)!);
  });
  output.sort((a, b) => b.slug!.localeCompare(a.slug!));
  return output;
}

export function getAllSlugs() {
  return getPosts().map(x => x.slug!);
}

export function parsePostFile(file: string) {
  let fs = require("fs");

  if (!file.endsWith(".md")) return;
  let content = fs.readFileSync(`./posts/${file}`, "utf8").toString();
  let conf = parse(content.split("---")[0]) as Post;
  if (!conf.image.startsWith("/images/")) {
    conf.image = `/images/${conf.image}`;
  }
  // if (!fs.existsSync(`./public${conf.image}.resized.png`)) {
  //   resizeImage({
  //     inputFile: `./public${conf.image}`,
  //     outputFile: `./public${conf.image}.resized.png`,
  //     width: 150,
  //     height: 150,
  //     blur: 5,
  //   }).then((x) => {});
  // }
  // conf.image = conf.image + ".resized.png";
  conf.slug = file.replace(".md", "");
  conf.desc = conf.desc.replaceAll("\n", "");
  conf.url = `/blog/${conf.slug}`;
  let fullContent = content.split("---").slice(1).join("---");
  conf.markdown = fullContent;
  return conf;
}