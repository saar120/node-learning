import got from "got";
// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const axios = require("axios");
const request = require("request");

const baseUrl = "https://www.fruityvice.com/api/fruit/";

// Using axios

const getFruitSugar = async (fruit) => {
  const { data } = await axios.get(baseUrl + fruit).catch((err) => console.error(err));
  console.log(data.nutritions.sugar);
};

// getFruitSugar("apple");

// Using Request

const getFruitFat = async (fruit) => {
  request({ url: baseUrl + fruit }, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    const data = JSON.parse(response.body);
    console.log(data.nutritions.fat);
  });
};

// getFruitFat("apple");

// Using got

const getFruitProtein = async (fruit) => {
  try {
    const data = await got(baseUrl + fruit).json();
    console.log(data.nutritions.protein);
  } catch (err) {
    console.error(err);
  }
};

// getFruitProtein("apple");
