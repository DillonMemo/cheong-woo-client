// robots.js
const fs = require("fs");
// Disallow: /[MY_ADMIN_PAGE_DIR]*/
const generatedSitemap = `User-agent: *
Allow: /
Sitemap: https://cheongwoo.kr/sitemap.xml`;

fs.writeFileSync("../public/robots.txt", generatedSitemap, "utf8");
