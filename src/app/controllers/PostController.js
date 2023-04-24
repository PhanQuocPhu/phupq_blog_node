const Post = require("../models/Post")
const { multipleMongooseToObject } = require("../../util/mongoose")

class SiteController {
	//[Get] /
	async index(req, res, next) {
		try {
			//Có thể dùng .lean() thì không cần tạo file /util/mongoose
			var posts = await Post.find({}).lean()
			return res.render("posts/index", { posts: posts })
		} catch (error) {
			next(error)
		}
	}

	//[GET] /:slug
	async detail(req, res) {
		var post = await Post.findOne({ slug: req.params.slug }).lean()
		return res.render("posts/detail", { post: post })
	}

	//[GET] /create
	create(req, res) {
		return res.render("posts/form")
	}
	//[GET] /edit/:id
	async edit(req, res) {
		var post = await Post.findById(req.params.id).lean()
		return res.render("posts/form", { post: post })
	}
	//[POST] /create, [PUT] /edit/:id
	async save(req, res) {
		var formData = req.body
		if(req.params.id){
			try{
				await Post.findByIdAndUpdate(req.params.id, req.body)
				return res.redirect('/post')
			} catch (err) {
				console.log(err)
			} 
		}
		try {
			await Post.create(formData)
			return res.redirect('/')
		} catch (err) {
			console.log(err)
		}
	}
	//[DELETE] /:id
	async destroy(req, res){
		try {
			await Post.findByIdAndDelete(req.params.id)
			return res.redirect('/post')
		} catch (err) {
			console.log(err)
		}
	}

}

//Export ra 1 instance của 1 class
module.exports = new SiteController()
