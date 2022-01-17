1.1
db.findMyRestaurants.find()

1.2
db.findMyRestaurants.find({cuisine:"Borger"})

1.3
db.findMyRestaurants.find({kosher: true})

1.4
db.findMyRestaurants.find({ "address.city": "Gan Yavne" })

1.5
db.findMyRestaurants.find({"address.city": "Gav Yavne","address.street":"brkkk"})

1.6
db.findMyRestaurants.find({"address.coordinates": [-22,23,455]})

1.7
db.findMyRestaurants.find({}).sort({name: 1})

1.8
db.findMyRestaurants.find({}).sort({"address.city": 1}

1.9
db.findMyRestaurants.updateOne({name: "falafel"},{$set: {name: "Humous"}})

1.10
db.findMyRestaurants.updateOne({name: "Humous"}, {$push: {reviews: {date: "1.1.1111", rating: 7}}})

1.11
db.findMyRestaurants.updateMany({}, {$set: {kosher:true}})

1.12
db.findMyRestaurants.remove({name: "falafel"})

1.13
db.findMyRestaurants.remove({})

2.1
db.findMyRestaurants.find().forEach((doc)=> {print("rest: " +doc.name)})

2.2
db.findMyRestaurants.find().forEach((doc)=> {print("city: " +doc.address.city)})

2.3
db.findMyRestaurants.find().forEach((doc)=> {print("coord: " +doc.address.coordinates)})

3.1
db.findMyRestaurants.find({name: {$regex: /^h/i}})

3.2
db.findMyRestaurants.countDocuments()

3.3
db.findMyRestaurants.find({reviews: {$elemMatch: {"rating": {$gte: 8}}}})

4.1
db.findMyRestaurants.aggregate([{$match: {}},{ $unwind: "$reviews" }, { $group : { _id: "$name", avgReviews : { $avg : "$reviews.rating" } } }])

4.2
db.findMyRestaurants.aggregate([{$match: {_id: ObjectId("61e576d9af9792984b45af7d")}},{ $unwind: "$reviews" }, { $group : { _id: "$name", avgReviews : { $avg : "$reviews.rating" } } }]
)
