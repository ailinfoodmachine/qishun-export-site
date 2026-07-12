import { access, readFile } from "node:fs/promises";

const html = await readFile("index.html", "utf8");
const products = JSON.parse(await readFile("data/products.json", "utf8"));
const site = JSON.parse(await readFile("data/site.json", "utf8"));

const requiredFiles = [
  "styles.css",
  "app.js",
  "robots.txt",
  "sitemap.xml",
  "thank-you.html",
  "data/site.json",
  "data/products.json",
  "public/images/hero/abrasives.webp",
  "public/images/contact/whatsapp-qr.jpg",
  ...products.map((product) => product.image)
];

const missing = [];
for (const file of requiredFiles) {
  try {
    await access(file);
  } catch {
    missing.push(file);
  }
}

const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim() || "";
const description = html.match(/<meta[\s\S]*?name="description"[\s\S]*?content="([^"]+)"/i)?.[1]?.trim() || "";
const h1 = html.match(/<h1\b[^>]*>(.*?)<\/h1>/is)?.[1]?.replace(/\s+/g, " ").trim() || "";

if (!title || !description || !h1) missing.push("SEO title/description/h1");
if (!site.email || !site.formEndpoint.includes(site.email)) missing.push("FormSubmit email configuration");
if (products.length < 12) missing.push("Product data count");

if (missing.length) {
  console.error("Site check failed:");
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`Site check passed: ${products.length} products, SEO metadata, form endpoint and image references are present.`);
