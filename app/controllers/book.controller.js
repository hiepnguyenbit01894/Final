var Book = require('../model/book.model')

exports.index = function (req, res) {
  Book.get_all(function (data) {
    res.send(data)
  })
}
exports.getDetail = function (req, res) {
  Book.getById(req.params.id, function (data) {
    console.log('data', data);
    res.send(
      {
        code: 200,
        result: data,
        status: 1,
        message: ''
      }
    )
  })
}
// body-parser
// add
exports.add_book = function (req, res) {
  let data = req.body
  console.log('data',data);
  Book.create(data, function (respone) {
    res.send({ result: respone})
  })

}
// put
exports.update_book = function (req, res) {
  let data = req.body
  Book.update_book(data, function (respone) {
    res.send({ resault: respone })
  })

}
// delete
exports.delete_book = function (req, res) {
  let id = req.params.id
  Book.delete(id, function (respone) {
    res.send({ result: respone })

  })
} 