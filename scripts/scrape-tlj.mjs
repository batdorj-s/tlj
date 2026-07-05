/**
 * Scrapes tlj.mn (Tous Les Jours Mongolia) homepage as a design/content reference
 * for the tu_les_jour project. The site is server-rendered, so Cheerio over the
 * static HTML is enough — no headless browser needed.
 *
 * Output: tlj-reference.md at the project root.
 *
 * Usage: node scripts/scrape-tlj.mjs
 */

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import * as cheerio from "cheerio";

const SITE = "https://tlj.mn/";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120.0 Safari/537.36";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "tlj-reference.md");

/** Resolve a possibly-relative URL against the site origin. */
function absolute(url) {
  if (!url) return null;
  try {
    return new URL(url, SITE).href;
  } catch {
    return null;
  }
}

/** Collapse whitespace and trim. */
function clean(text) {
  return (text || "").replace(/\s+/g, " ").trim();
}

/** Unique, order-preserving. */
function uniq(list) {
  return [...new Set(list.filter(Boolean))];
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.text();
}

function extractColors(cssText) {
  const colors = new Map(); // color -> count
  const hex = cssText.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
  const rgb = cssText.match(/rgba?\([^)]*\)/g) || [];
  for (const c of [...hex, ...rgb]) {
    const key = c.toLowerCase();
    colors.set(key, (colors.get(key) || 0) + 1);
  }
  return [...colors.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([color, count]) => ({ color, count }));
}

/** A stylesheet is a third-party vendor lib (not brand-relevant) if its URL says so. */
function isVendorCss(url) {
  return /vendor|bootstrap|fontawesome|owl-carousel|photoswipe|select2/i.test(url);
}

async function main() {
  console.log(`Fetching ${SITE} ...`);
  const html = await fetchText(SITE);
  const $ = cheerio.load(html);

  // --- Meta ---
  const meta = {
    title: clean($("title").text()),
    description: clean($('meta[name="description"]').attr("content")),
    ogTitle: clean($('meta[property="og:title"]').attr("content")),
    ogDescription: clean($('meta[property="og:description"]').attr("content")),
    ogImage: absolute($('meta[property="og:image"]').attr("content")),
    themeColor: clean($('meta[name="theme-color"]').attr("content")),
  };

  // --- Headings ---
  const headings = [];
  $("h1, h2, h3, h4, h5, h6").each((_, el) => {
    const text = clean($(el).text());
    if (text) headings.push({ tag: el.tagName.toLowerCase(), text });
  });

  // Reject pure-noise tokens (empty, lone "0", counters).
  const isNoise = (t) => !t || /^[0-9]+$/.test(t);

  // --- Buttons / CTAs / nav links ---
  const buttons = uniq(
    $("button, a.btn, .btn, [class*='button'], [type='submit']")
      .map((_, el) => clean($(el).text()))
      .get(),
  ).filter((t) => !isNoise(t) && t.length < 60);

  const navLinks = uniq(
    $("nav a, header a")
      .map((_, el) => clean($(el).text()))
      .get(),
  ).filter((t) => !isNoise(t) && t.length < 40);

  // --- Product cards (name + price + short description) ---
  const products = [];
  $(".product-card, .product-card__info").each((_, el) => {
    const $el = $(el);
    const name = clean($el.find(".product-card__name").text());
    const price = clean($el.find(".product-card__prices").text());
    const short = clean($el.find(".product-card__short_body").text());
    if (name) products.push({ name, price, short });
  });
  // De-dupe by name.
  const seenProduct = new Set();
  const uniqueProducts = products.filter((p) => {
    if (seenProduct.has(p.name)) return false;
    seenProduct.add(p.name);
    return true;
  });

  // --- Product category titles ---
  const categories = uniq(
    $(".product-cat-title, .product-title-above")
      .map((_, el) => clean($(el).text()))
      .get(),
  ).filter((t) => !isNoise(t));

  // --- News / post cards (name + description) ---
  const posts = [];
  $(".post-card, .card-item").each((_, el) => {
    const $el = $(el);
    const name = clean($el.find(".post-card__name, .card-item-name").text());
    const desc = clean($el.find(".card-item-desc, .post-card__desc").text());
    if (name) posts.push({ name, desc });
  });
  const seenPost = new Set();
  const uniquePosts = posts.filter((p) => {
    const key = p.name + "|" + p.desc;
    if (seenPost.has(key)) return false;
    seenPost.add(key);
    return true;
  });

  // --- Paragraph / descriptive text (p + known text blocks) ---
  const paragraphs = uniq(
    $("p, .card-item-desc, .product-card__short_body, .slogan, .block-header__title")
      .map((_, el) => clean($(el).text()))
      .get(),
  ).filter((t) => t.length > 10 && t.length < 400);

  // --- Images ---
  const images = uniq(
    $("img")
      .map((_, el) => {
        const $el = $(el);
        return absolute(
          $el.attr("src") ||
            $el.attr("data-src") ||
            $el.attr("data-lazy-src"),
        );
      })
      .get(),
  );

  // --- Logo detection ---
  const logoCandidates = uniq(
    $("img")
      .filter((_, el) => {
        const hay = (
          ($(el).attr("alt") || "") +
          " " +
          ($(el).attr("src") || "") +
          " " +
          ($(el).attr("class") || "") +
          " " +
          ($(el).parent().attr("class") || "")
        ).toLowerCase();
        return /logo|brand/.test(hay);
      })
      .map((_, el) => absolute($(el).attr("src")))
      .get(),
  );

  // --- Stylesheets + inline styles -> colors ---
  const cssLinks = uniq(
    $('link[rel="stylesheet"]')
      .map((_, el) => absolute($(el).attr("href")))
      .get(),
  );

  // Brand-relevant CSS: embedded <style>, inline style="", and the theme's own
  // (non-vendor) stylesheets. Kept separate from vendor CSS so Bootstrap's
  // default palette doesn't drown out the actual brand colors.
  let brandCss = $("style")
    .map((_, el) => $(el).html())
    .get()
    .join("\n");
  $("[style]").each((_, el) => {
    brandCss += "\n" + ($(el).attr("style") || "");
  });

  let vendorCss = "";
  for (const href of cssLinks.slice(0, 10)) {
    try {
      const text = await fetchText(href);
      if (isVendorCss(href)) vendorCss += "\n" + text;
      else brandCss += "\n" + text;
    } catch (e) {
      console.warn(`  skip css ${href}: ${e.message}`);
    }
  }

  const brandColors = extractColors(brandCss).slice(0, 25);
  const allColors = extractColors(brandCss + "\n" + vendorCss).slice(0, 40);

  // --- Assemble markdown ---
  const now = new Date().toISOString().slice(0, 10);
  const md = [];
  md.push(`# tlj.mn — Reference (Tous Les Jours Mongolia)`);
  md.push("");
  md.push(`> Auto-scraped from ${SITE} on ${now} via \`scripts/scrape-tlj.mjs\` (Cheerio).`);
  md.push(`> Reference only — for design/content inspiration for the tu_les_jour project.`);
  md.push("");

  md.push(`## Meta`);
  md.push("");
  md.push(`| Field | Value |`);
  md.push(`| --- | --- |`);
  for (const [k, v] of Object.entries(meta)) {
    md.push(`| ${k} | ${v ? String(v).replace(/\|/g, "\\|") : "—"} |`);
  }
  md.push("");

  md.push(`## Headings (${headings.length})`);
  md.push("");
  if (headings.length) {
    for (const h of headings) md.push(`- **${h.tag}** — ${h.text}`);
  } else {
    md.push(`_None found._`);
  }
  md.push("");

  md.push(`## Navigation links (${navLinks.length})`);
  md.push("");
  md.push(navLinks.length ? navLinks.map((t) => `- ${t}`).join("\n") : "_None found._");
  md.push("");

  md.push(`## Product categories (${categories.length})`);
  md.push("");
  md.push(
    categories.length ? categories.map((t) => `- ${t}`).join("\n") : "_None found._",
  );
  md.push("");

  md.push(`## Products (${uniqueProducts.length})`);
  md.push("");
  if (uniqueProducts.length) {
    md.push(`| Name | Price | Short description |`);
    md.push(`| --- | --- | --- |`);
    for (const p of uniqueProducts) {
      md.push(
        `| ${p.name.replace(/\|/g, "\\|")} | ${p.price || "—"} | ${
          (p.short || "—").replace(/\|/g, "\\|")
        } |`,
      );
    }
  } else {
    md.push(`_None found._`);
  }
  md.push("");

  md.push(`## News / posts (${uniquePosts.length})`);
  md.push("");
  if (uniquePosts.length) {
    for (const p of uniquePosts) {
      md.push(`- **${p.name}**${p.desc ? ` — ${p.desc}` : ""}`);
    }
  } else {
    md.push(`_None found._`);
  }
  md.push("");

  md.push(`## Buttons / CTAs (${buttons.length})`);
  md.push("");
  md.push(buttons.length ? buttons.map((t) => `- ${t}`).join("\n") : "_None found._");
  md.push("");

  md.push(`## Descriptive text (${paragraphs.length})`);
  md.push("");
  md.push(
    paragraphs.length
      ? paragraphs.map((t) => `- ${t}`).join("\n")
      : "_None found._",
  );
  md.push("");

  md.push(`## Logo (${logoCandidates.length})`);
  md.push("");
  md.push(
    `_Site header/nav logo config assets. Transparent-PNG horizontal wordmark (~542×77px); the primary asset is the white variant (renders invisibly on a white background — intended for dark/colored headers)._`,
  );
  md.push("");
  md.push(
    logoCandidates.length
      ? logoCandidates.map((u) => `- ${u}`).join("\n")
      : "_No explicit logo/brand image detected._",
  );
  md.push("");

  md.push(`## Images (${images.length})`);
  md.push("");
  md.push(images.length ? images.map((u) => `- ${u}`).join("\n") : "_None found._");
  md.push("");

  md.push(`## Stylesheets (${cssLinks.length})`);
  md.push("");
  md.push(cssLinks.length ? cssLinks.map((u) => `- ${u}`).join("\n") : "_None found._");
  md.push("");

  md.push(`## Brand colors (top ${brandColors.length}, vendor CSS excluded)`);
  md.push("");
  md.push(`_Bootstrap/FontAwesome/etc. stylesheets are excluded here so the brand's own palette surfaces. The dominant non-neutral is the Tous Les Jours brand red._`);
  md.push("");
  md.push(`| Color | Occurrences |`);
  md.push(`| --- | --- |`);
  for (const { color, count } of brandColors) md.push(`| \`${color}\` | ${count} |`);
  md.push("");

  md.push(`## All colors (top ${allColors.length}, including vendor CSS)`);
  md.push("");
  md.push(`| Color | Occurrences |`);
  md.push(`| --- | --- |`);
  for (const { color, count } of allColors) md.push(`| \`${color}\` | ${count} |`);
  md.push("");

  writeFileSync(OUT, md.join("\n"), "utf8");

  console.log(`\nDone -> ${OUT}`);
  console.log(
    `  headings=${headings.length} nav=${navLinks.length} categories=${categories.length} ` +
      `products=${uniqueProducts.length} posts=${uniquePosts.length} buttons=${buttons.length} ` +
      `paragraphs=${paragraphs.length} images=${images.length} logos=${logoCandidates.length} ` +
      `css=${cssLinks.length} brandColors=${brandColors.length}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
