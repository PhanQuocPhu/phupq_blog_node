const newsRouter = require("./news")
const postsRouter = require("./post")
const siteRouter = require("./site")

function route(app) {
	app.use("/news", newsRouter)
	app.use("/post", postsRouter)
	app.use("/", siteRouter)
}

//Export ra 1 function
module.exports = route
