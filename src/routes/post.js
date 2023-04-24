const express = require('express')
const router = express.Router()

const postController = require('../app/controllers/PostController')

//Sẽ quét từ trên xuống dưới ==> nên đặt '/' dưới cùng để nó có thể match tất cả các route
router.get('/create', postController.create)
router.post('/create', postController.save)
router.get('/edit/:id', postController.edit)
router.put('/edit/:id', postController.save)
router.delete('/:id', postController.destroy)
router.get('/:slug', postController.detail)
router.get('/', postController.index)

//Chưa hiểu nó đang export ra cái này là thế nào
module.exports = router
