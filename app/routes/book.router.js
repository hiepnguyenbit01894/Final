
// goi den controller de xu ly data
module.exports = function (router) {
    var bookController = require('../controllers/book.controller')
    router.get('/book/list', bookController.index)
    router.get('/book/detail/:id', bookController.getDetail)
    router.post('/book/add', bookController.add_book)
    router.delete('/book/delete/:id', bookController.delete_book)
    router.put('/book/update/:id', bookController.update_book)
}