const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app){

    app.use('/news', newsRouter)

    app.use('/', siteRouter)

}

//Export ra 1 function
module.exports = route;