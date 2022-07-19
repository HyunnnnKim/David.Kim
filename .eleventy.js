module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/scss/");
    eleventyConfig.addWatchTarget("./src/scss/");

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}