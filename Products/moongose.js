const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/products");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minLength: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
    phoneNumber: {
      type: String,
      validate(value) {
        if (!validator.isMobilePhone(value, ["he-IL"])) {
          throw new Error("Invalid Phone Number");
        }
      },
      required: true,
    },
  },
});

const product1 = new Product({
  name: "Product 1",
  category: "category 1",
  isActive: true,
  details: {
    price: 20,
    description: "jkvbjdflbkjsflbjsl;jdbkljs",
    phoneNumber: "0525867945",
  },
});

const product2 = new Product({
  name: "Product 1",
  category: "category 1",
  isActive: true,
  details: {
    price: 20,
    description: "jkvbjdflbkjsflbjsl;jdbkljs",
    phoneNumber: "0525867945",
  },
});

const product3 = new Product({
  name: "Product 1",
  category: "category 1",
  isActive: true,
  details: {
    price: 20,
    description: "jkvbjdflbkjsflbjsl;jdbkljs",
    phoneNumber: "0525867945",
  },
});

Product.insertMany([product1, product2, product3])
  .then(() => {
    console.log("added successfully");
  })
  .catch((error) => {
    console.log(error);
  });
