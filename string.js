const client = require("./client");

async function init() {
  // const result = await client.get("msg:2");
  await client.expire("msg:2", 10);
  console.log("Result:------>", result);
}

init();
