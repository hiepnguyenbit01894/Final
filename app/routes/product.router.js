// Gọi đến Product router để xử lý 
module.exports = function (router) {
    var productController = require('../controllers/product.controller')
    router.get('/product/list/:page?/:page_size?', productController.getProducts)
    router.get('/product/detail/:id', productController.getDetail)
    router.post('/product/add', productController.addProduct)
    router.put('/product/update', productController.updateProduct)
    router.delete('/product/delete/:id', productController.deleteProduct)
}