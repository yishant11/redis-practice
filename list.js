const client = require("./client");

async function init() {

    // await client.lpush("messages", "item1");
    // await client.lpush("messages", "item2");
    // await client.lpush("messages", "item3");
    // await client.lpush("messages", "item4");
    // await client.lpush("messages", "item5");
    const result = await client.lrange('messages',0,-1);
    console.log("Result:------>", result);
}

init();
