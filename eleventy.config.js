const fs = require("fs");
const path = require("path");
const { DateTime } = require("luxon");
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt({
  html: true,
});

const TIME_ZONE = "America/New_York";
const TIME_FORMAT = "MMMM d, yyyy 'at' h:mm a ZZZ";

const src = "src";
const templates = path.resolve(src, "templates");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/**/*.css");
  eleventyConfig.addPassthroughCopy("src/**/*.gif");
  eleventyConfig.addPassthroughCopy("src/**/*.png");
  eleventyConfig.addPassthroughCopy("src/**/*.ico");

  eleventyConfig.addCollection("public_projects", function (collectionApi) {
    console.log("Finding public projects...")
    var projects = collectionApi.getFilteredByGlob("src/home/projects/*.md").filter(function (item) {
      return item.data.type == "public"
    })
    console.log(`Found ${projects.length} projects`)
    return projects;
  });

  eleventyConfig.addCollection("private_projects", function (collectionApi) {
    console.log("Finding private projects...")
    var projects = collectionApi.getFilteredByGlob("src/home/projects/*.md").filter(function (item) {
      return item.data.type == "private"
    })
    console.log(`Found ${projects.length} projects`)
    return projects;
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/golden-days/blog/*.md").sort((a, b) => b.data.date - a.data.date);
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
