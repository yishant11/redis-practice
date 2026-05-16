const client = require('./client');

async function init() {
    await client.xadd('mystream', '*', 'field1', 'value1');
    await client.xadd('mystream', '*', 'field2', 'value2');
    await client.xadd('mystream', '*', 'field3', 'value3');
    const result = await client.xrange('mystream', '-', '+');
    console.log('Result:------>', result);
}

init();