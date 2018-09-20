const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    theme: 'default',
    dev: {
        port: 3000,
        outputPath: path.join(process.cwd(), "docs"),
        publicPath: isProd ? "https://cdn.zhw-island.com/" : "/"
    },
    website: {
        post: {
            excerpt: 120
        },
        page: {

        }
    }
}