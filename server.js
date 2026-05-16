const express = require("express");
const app = express();

const client = require("./client");
const axios = require("axios");

app.get("/", async (req, res) => {
  try {
    const cacheValue = await client.get("todos");

    if (cacheValue) {
      console.log("Cache Hit");
      return res.json(JSON.parse(cacheValue));
    }

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );

    await client.set("todos", JSON.stringify(response.data), "EX", 60);

    console.log("Cache Set");

    return res.json(response.data);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
