import { parse } from "yaml";
import Sharp from "sharp"

export type Post = {
  title: string;
  image: string;
  imageLinks?: {square: string, wide: string};
  date: string;
  tags: string[];
  desc: string;
  markdown?: string;
  url?: string;
  slug?: string;
};

export function getPosts() {
  resizeImages();
  let fs = require("fs");
  let output: Post[] = [];
  fs.readdirSync(`${postSourceDir}`).forEach((file: string) => {
    if (!file.endsWith(".md")) return;
    const slug = file.replace(".md", "");
    let post = parsePost(slug);
    if(post === null) return;
    output.push(post);
  });
  output.sort((a, b) => b.slug!.localeCompare(a.slug!));
  return output;
}

export function getAllSlugs() {
  return getPosts().map(x => x.slug!);
}

const postSourceDir = "./_posts";
const postOutLink = "/blog";

const imageSourceDir = "./_posts/images"
const imageOutDir = "./public/images"
const imageOutLink = "/images"

function resizeImages() {
  let fs = require("fs");
  fs.readdirSync(`${imageSourceDir}`).forEach((file: string) => {
    if (!file.endsWith(".png")) return;
    const sq = `${imageOutDir}/${file}.square.png`
    const wd = `${imageOutDir}/${file}.wide.png`

    
    if(!fs.existsSync(sq)) {
      resizeImage({
        inputFile: `${imageSourceDir}/${file}`,
        outputFile: sq,
        width: 150,
        height: 150,
        blur: 5,
      }).then((x) => {
        console.log(x)
      });
    }
    if(!fs.existsSync(wd)) {
      resizeImage({
        inputFile: `${imageSourceDir}/${file}`,
        outputFile: wd,
        width: 350,
        height: 150,
        blur: 5,
      }).then((x) => {
        console.log(x)
      });
    }
  });
}
export function parsePost(slug: string) : Post | null {
  let fs = require("fs");

  const file = `${slug}.md`;

  if(fs.existsSync(`${postSourceDir}/${file}`) === false) return null;

  let content = fs.readFileSync(`${postSourceDir}/${file}`, "utf8").toString();
  let conf = parse(content.split("---")[0]) as Post;
  conf.imageLinks = {
    square: `${imageOutLink}/${conf.image}.square.png`,
    wide: `${imageOutLink}/${conf.image}.wide.png`,
  }
  conf.slug = file.replace(".md", "");
  conf.url = `${postOutLink}/${conf.slug}`;
  let fullContent = content.split("---").slice(1).join("---");
  conf.markdown = fullContent;
  if(!conf.desc) {
    conf.desc = conf.markdown!.split(/\s+/).slice(0, 30).join(" ");
  }
  conf.desc = conf.desc.replaceAll("\n", "");
  return conf;
}

export function getPreviousPost(slug: string) {
  let posts = getPosts();
  let index = posts.findIndex(x => x.slug === slug);
  if(index > posts.length) return null;
  return posts[index + 1];
}

function resizeImage({ inputFile, outputFile, width, height, blur }: {inputFile: string, outputFile: string, width: number, height: number, blur: number}) {
	let sharpOriginal = Sharp(inputFile)
	
	return new Promise((resolve) => {
	  sharpOriginal
		.resize(width, height, {fit: 'contain', background: "transparent"})
		.toBuffer()
		.then((resizedBuffer) => {
		  sharpOriginal
			.resize(width, height, { // the result will be a square
			  fit: 'cover'
			})
			.blur(blur) // 6 seems to work well
			.composite([{
			  input: resizedBuffer,
			  gravity: 'center'
			}])
			.toFile(outputFile)
			.then((info) => {
			  console.log(info)
			  resolve(true)
			})
			.catch((err) => {
			  console.error(err)
			  resolve(false)
			})
		})
		.catch((err) => {
		  console.error(err)
		  resolve(false)
		})
	})
  }