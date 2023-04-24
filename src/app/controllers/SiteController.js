const Post = require("../models/Post")
const { multipleMongooseToObject } = require("../../util/mongoose")

class SiteController {
	//[Get] /
	async index(req, res, next) {
		try {
			//Có thể dùng .lean() thì không cần tạo file util/mongoose
			//var posts = await Post.find({}).lean()
			//return res.render('home', { posts: posts})
			var posts = await Post.find({})
			return res.render("home", { posts: multipleMongooseToObject(posts)})
		} catch (error) {
			next(error)
		}
	}

	//[GET] /search
	search(req, res) {
		console.log(req.body)
		res.render("home")
	}
}

//Export ra 1 instance của 1 class
module.exports = new SiteController()
