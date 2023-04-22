class NewsController{
    
    //[Get] /news
    index(req, res){
        res.render('news')
    }

    //[GET] /news/:slug
    detail(req, res){
        res.send('yolo')
    }
}

//Export ra 1 instance của 1 class
module.exports = new NewsController