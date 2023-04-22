class SiteController{
    
    //[Get] /
    index(req, res){
        res.render('home')
    }

    //[GET] /search
    search(req, res){
        console.log(req.body);
        res.render("home")
    }
}

//Export ra 1 instance của 1 class
module.exports = new SiteController