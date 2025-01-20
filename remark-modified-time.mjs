import { statSync } from "fs";

export function remarkModifiedTime() {
  return function (file) {
    const filepath = file.history[0];
    const result = statSync(filepath);
    file.data.astro.frontmatter.lastModified = result.mtime.toISOString();
  };
}