const fs = require("fs");
const path = require("path");
const { DateTime } = require("luxon");
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt({
  html: true
});

const TIME_ZONE = "America/New_York";
const TIME_FORMAT = "MMMM d, yyyy 'at' h:mm a ZZZ";

const src = "src";
const templates = path.resolve(src, "templates");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => b.data.date - a.data.date);
  });

  eleventyConfig.addFilter("dateFormatted", function (date) {
    return DateTime.fromJSDate(date).setZone(TIME_ZONE).toFormat("MMMM d, yyyy 'at' h:mm a ZZZZ");
  });

  eleventyConfig.addShortcode("md", function (file) {
    const content = fs.readFileSync(path.resolve(templates, file), "utf8");
    return md.render(content);
  });

  // Copy any .jpg file to `_site`, via Glob pattern
  // Keeps the same directory structure.
  // eleventyConfig.addPassthroughCopy("**/*.jpg");

  return {
    dir: {
      input: src,
      output: "_site",
      includes: "templates",
    },
  };
};
