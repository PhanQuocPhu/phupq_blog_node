const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

mongoose.plugin(slug)

const Post = new Schema({
	title: { type: String, max: 500, default: "This is an dedault post name" },
	content: { type: String, default: "lorem body" },
	image: {type: String, default: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="},
	slug: {type: String, slug: "title", unique: true},
	summary: {type: String}
},{
	timestamps: true
})


module.exports = mongoose.model('Post', Post);
