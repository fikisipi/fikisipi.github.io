import { format } from "prettier";
import { readFileSync, writeFileSync } from "fs";
import { globSync } from "glob";

// console.log(readdirSync(`./out`))

globSync(`./out/**/*.html`).forEach((file) => {
  const content = readFileSync(file, "utf8");
  const formatted = format(content, {
    parser: "html",
    htmlWhitespaceSensitivity: "ignore",
    bracketSameLine: true,
  });
  writeFileSync(file, formatted);
});
