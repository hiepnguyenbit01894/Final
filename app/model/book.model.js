const db = require('../common/connect')

const Book = function (book) {
    this.id = book.id
    this.name = book.name
    this.created_at = book.created_at
    this.updated_at = book.updated_at

}
// var data = [
//     {
//       "id": 1,
//       "name": "Brocolli",
//       "price": 120,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 2,
//       "name": "Cauliflower",
//       "price": 60,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 3,
//       "name": "Cucumber",
//       "price": 48,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 4,
//       "name": "Beetroot",
//       "price": 32,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 5,
//       "name": "Carrot",
//       "price": 56,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 6,
//       "name": "Tomato",
//       "price": 16,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 7,
//       "name": "Beans",
//       "price": 82,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 8,
//       "name": "Brinjal",
//       "price": 35,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 9,
//       "name": "Capsicum",
//       "price": 60,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 10,
//       "name": "Mushroom",
//       "price": 75,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 11,
//       "name": "Potato",
//       "price": 22,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 12,
//       "name": "Pumpkin",
//       "price": 48,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 13,
//       "name": "Corn",
//       "price": 75,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 14,
//       "name": "Onion",
//       "price": 16,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
//       "category": "vegetables"
//     },
//     {
//       "id": 15,
//       "name": "Apple",
//       "price": 72,
//       "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
//       "category": "fruits"
//     },
//     {
//     "id": 16,
//     "name": "Banana",
//     "price": 45,
//     "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
//     "category": "fruits"
//   },
//   {
//     "id": 17,
//     "name": "Grapes",
//     "price": 60,
//     "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
//     "category": "fruits"
//   },
//   {
//     "id": 18,
//     "name": "Mango",
//     "price": 75,
//     "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
//     "category": "fruits"
//   },
//   {
//     "id": 19,
//     "name": "Musk Melon",
//     "price": 36,
//     "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
//     "category": "fruits"
//   },
//   {
//     "id": 20,
//     "name": "Orange",
//     "price": 75,
//     "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
//     "category": "fruits"
//   },
//   {
//     "id": 21,
//     "name": "Pears",
//     "price": 69,
//     "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
//     "category": "fruits"
//   },
//   {
//     "id": 22,
//     "name": "Pomegranate",
//     "price": 95,
//     "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
//     "category": "fruits"
//   },
//   {
//     "id": 23,
//     "name": "Raspberry",
//     "price": 160,
//     "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
//     "category": "fruits"
//   }
// ]
Book.get_all = function (result) {

    db.query("SELECT * FROM books", function (err, book) {
        console.log(book);
        try {
            result(book)
        } catch (err) {
            console.error(err);
        }
    })
}
Book.getById = function (id, result) {
    console.log(id);
    db.query("SELECT * FROM books Where id = ? ", id, function (err, book) {
        if (err) {
            console.log(book);
        } else {
            result(book)
        }
    })
}
Book.create = function (data, result) {
    db.query("INSERT INTO books SET ?", data, function (err, book) {
        if (err) {
            result(null);
        } else {
            console.log('boaksodkasodk',book);
            result({ id: book.insertId, ...data })
        }
    })
}
Book.update = function (data, result) {
    result(data)
}
/**HiepNT: 21-04-2023: Delete book **/
Book.delete = function (id, result) {
    console.log(id);
    db.query("DELETE FROM books Where id = ? ", id, function (err, book) {
        if (err) {
            console.log(book);
        } else {
            result("Xoa thanh cong"+id)
        }
    })
}

module.exports = Book

