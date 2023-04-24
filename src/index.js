const express = require("express")
const morgan = require("morgan")
const path = require("path")
var methodOverride = require('method-override')

const app = express()
const port = 3000
const route = require("./routes")
const db = require("./config/db")
const hbs = require("./config/handlebars")

//Config template engine
hbs.setTemplates(app)

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

//Theo dõi request
//app.use(morgan('combined'))

//Set static folder path
app.use(express.static(path.join(__dirname, "./public")))

//Setting middleware
app.use(
	express.urlencoded({
		extended: true,
	})
)
app.use(express.json())


//Route handlers
route(app)

//Connect to DB and start server
db.connect()
	.then(() => {
		app.listen(port, () => {
			console.log(`App listening on port ${port}`)
		})
	})
	.catch((e) => console.log(e))
//Set port
