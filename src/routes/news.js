const express = require("express")
const router = express.Router()

const newsController = require("../app/controllers/NewsController")

//Sẽ quét từ trên xuống dưới ==> nên đặt '/' dưới cùng để nó có thể match tất cả các route
router.get("/:slug", newsController.detail)
router.get("/", newsController.index)

//Chưa hiểu nó đang export ra cái này là thế nào
module.exports = router
