const templateEngine = require("express-handlebars")
const path = require("path")

function setTemplates(app) {
	//Template engine
	app.engine(
		".hbs",
		templateEngine.engine({
			extname: ".hbs",
			// Specify helpers which are only registered on this instance.
			helpers: {
				sum (a, b) { return a+b; }, 
			}
		})
	)
	app.set("view engine", "hbs")
	app.set("views", path.join(__dirname, "../../views"))
	console.log(__dirname)
}

module.exports = { setTemplates }
