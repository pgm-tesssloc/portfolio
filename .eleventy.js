module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('input/css/reset.css');
    eleventyConfig.addPassthroughCopy('input/css/main.css');
    eleventyConfig.addPassthroughCopy('input/images');

    return {
        dir: {
            input: 'input',
            output: 'output',
        }
    }
}