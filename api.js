const axios = require("axios");

// Using axios

const getFruitSugar = async (fruit) => {
  const { data } = await axios.get("https://www.fruityvice.com/api/fruit/" + fruit).catch((err) => console.error(err));
  console.log(data.nutritions.sugar);
};

getFruitSugar("apple");
