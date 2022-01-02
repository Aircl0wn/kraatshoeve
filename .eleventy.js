const { html } = require("js-beautify");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./src/css/tailwind.css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/fonts");

  // Shortcodes
  eleventyConfig.addShortcode("gallery", function (img, alt) {
    let filename = img.replace(/\.[^/.]+$/, "");
    return `
      <a href="${img}" target="_blank" class="mb-2 inline-block break-inside shadow-lg rounded-lg overflow-hidden" aria-label="Open afbeelding ${alt} in nieuw tabblad">
        <picture>
          <source srcset="${filename}-320.webp" media="(min-width: 1024px)">
          <source srcset="${filename}-480.webp" media="(min-width: 768px)">
          <source srcset="${filename}-640.webp" media="(min-width: 0px)">
          <source srcset="${filename}-1024.png" media="(min-width: 0px)">
          <img 
            src="${filename}-1024.jpg" 
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
