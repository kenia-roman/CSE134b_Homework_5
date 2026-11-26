export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({'src/style.css':'style.css'});
  eleventyConfig.addPassthroughCopy({'src/media':'media'});
  return {dir:{input:'src',output:'_site',includes:'_includes'}};
}
