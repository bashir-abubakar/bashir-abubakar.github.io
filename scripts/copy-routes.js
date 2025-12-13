import fs from "fs";
import path from "path";

const pages = ["about", "projects", "blog", "contact"];

const dist = path.resolve("dist");
const indexFile = path.join(dist, "index.html");

pages.forEach((page) => {
  const pageDir = path.join(dist, page);
  const pageFile = path.join(pageDir, "index.html");

  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir);
  }

  fs.copyFileSync(indexFile, pageFile);
  console.log(`Copied index.html → /dist/${page}/index.html`);
});
