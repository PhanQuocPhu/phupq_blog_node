const express = require("express")
const router = express.Router()

const siteController = require("../app/controllers/SiteController")

//Sẽ quét từ trên xuống dưới ==> nên đặt '/' dưới cùng để nó có thể match tất cả các route
router.get("/search", siteController.search)
router.get("/", siteController.index)

//Chưa hiểu nó đang export ra cái này là thế nào
module.exports = router
