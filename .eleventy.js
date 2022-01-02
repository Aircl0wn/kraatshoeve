const { html } = require("js-beautify");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./src/css/tailwind.css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/fonts");

  // Shortcodes
  eleventyConfig.addShortcode("gallery", function (img, alt) {
    return `
      <a href="/img/gallery/${img}" target="_blank" class="w-full shadow-lg rounded-lg overflow-hidden" aria-label="Open afbeelding ${alt} in nieuw tabblad">
        <picture>
          <source srcset="/img/gallery/320/${img}" media="(min-width: 1024px)">
          <source srcset="/img/gallery/480/${img}" media="(min-width: 768px)">
          <source srcset="/img/gallery/640/${img}" media="(min-width: 0px)">
          <img 
            src="/img/gallery/640/${img}" 
            alt="${alt}" 
            class="w-full hover:scale-125 transition-transform duration-500">
        </picture>
      </a>
    `;
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
