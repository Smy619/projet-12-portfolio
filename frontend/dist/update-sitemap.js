import fs from "fs";

const today = new Date().toISOString().split("T")[0];
const urls = [
  "",
  "#about",
  "#projects",
  "portfolio-details/1",
  "portfolio-details/2",
  "portfolio-details/3",
  "cv",
  "#contact",
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `
  <url>
    <loc>https://solenesun.com/${path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${
      path === "" ? "1.0" :
      path.includes("portfolio-details") ? "0.8" :
      path === "cv" ? "0.85" : "0.9"
    }</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", xml);
console.log(`✅ sitemap.xml updated for ${today}`);
