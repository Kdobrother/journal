module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (value) => {
    const d = new Date(value);

    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Seoul"
    }).format(d);
  });

  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets"
  });

  eleventyConfig.addPassthroughCopy({
    "src/admin": "admin"
  });

  eleventyConfig.addPassthroughCopy({
    "src/uploads": "uploads"
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
