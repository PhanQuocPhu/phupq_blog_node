const express = require("express");
const morgan = require("morgan")
const path = require("path")
const templateEngine = require("express-handlebars")

const app = express()
const port = 3000
const route = require('./routes')

//Theo dõi request
//app.use(morgan("combined"))

//Set static folder path
app.use(express.static(path.join(__dirname, "public")))

//Setting middleware
app.use(express.urlencoded({
	extended: true,
}));
app.use(express.json());

//Template engine
app.engine(
	".hbs",
	templateEngine.engine({
		extname: ".hbs",
	})
)
//Set location cho view mặc định
app.set("views", path.join(__dirname, "views"))
app.set("view engine", ".hbs")

//Set port
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

//Route handlers
route(app)