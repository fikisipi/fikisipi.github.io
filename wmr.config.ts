import { defineConfig } from 'wmr';
import postcss from "rollup-plugin-postcss";
import tailwind from "tailwindcss"

import fs from "node:fs"

import Sharp from "sharp"

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

import {parse} from "yaml"

function blogPlugin() {
	return {
		name: 'blog-plugin',
		resolveId(source) {
			if(source !== 'blog') return undefined;
			return source;
		},
		load(id) {
			if(id !== 'blog') return undefined;
			let output: any[] = []
			fs.readdirSync('./public/blog').forEach(file => {
				if(!file.endsWith('.md')) return;
				let content = fs.readFileSync(`./public/blog/${file}`, 'utf8').toString();
				let conf = parse(content.split("---")[0]) as {
					title: string,
					image: string,
					desc: string,
					markdown: string,
					slug: string,
					url: string,
					time: number
				}
				if(!conf.image.startsWith("/blog/")) {
					conf.image = `/blog/${conf.image}`
				}
				if(!fs.existsSync(`./public${conf.image}.resized.png`)) {
					resizeImage({inputFile: `./public${conf.image}`, outputFile: `./public${conf.image}.resized.png`, width: 400, height: 250, blur: 5}).then(x => {
				})
				}
				conf.image = conf.image + ".resized.png"
				conf.slug = file.replace('.md', '')
				conf.url = `/blog/${conf.slug}`
				let fullContent = content.split("---").slice(1).join("---")
				conf.markdown = fullContent
				output.push(conf)
			})
			output.sort((a, b) => b.slug.localeCompare(a.slug))
			return 'export default ' + JSON.stringify(output);
		}
	}
}
// Full list of options: https://wmr.dev/docs/configuration
export default defineConfig({
	/* Your configuration here */
	alias: {
		react: 'preact/compat',
		'react-dom': 'preact/compat',
	},
	plugins: [
		postcss({
			inject: true,
			plugins: [],
			extensions: [".px"],
		}),
		blogPlugin()
	],
	middleware: [(req, res, next) => {
		if(!req.url!.endsWith('.png')) return next();
		let unescapedUrl = decodeURIComponent(req.url!);
		let q: any = null
		try {
			q = fs.readFileSync(`./public${unescapedUrl}`, 'binary')
		}catch(err) {
			return next()
		}
		res.writeHead(200, {'Content-Type': 'image/png'});
		res.write(q, 'binary');
		res.end();
	}]
});
