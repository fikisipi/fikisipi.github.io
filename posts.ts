
import { parse } from "yaml";


export function getPosts() {
    let fs = require('fs')
    let output: any[] = [];
    fs.readdirSync("./posts/").forEach((file) => {
      if (!file.endsWith(".md")) return;
      let content = fs
        .readFileSync(`./posts/${file}`, "utf8")
        .toString();
      let conf = parse(content.split("---")[0]) as {
        title: string;
        image: string;
        desc: string;
        markdown: string;
        slug: string;
        url: string;
        time: number;
      };
      // if (!conf.image.startsWith("/images/")) {
      //   conf.image = `/images/${conf.image}`;
      // }
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
      conf.url = `/blog/${conf.slug}`;
      let fullContent = content.split("---").slice(1).join("---");
      conf.markdown = fullContent;
      output.push(conf);
    });
    output.sort((a, b) => b.slug.localeCompare(a.slug));
    return output
  }