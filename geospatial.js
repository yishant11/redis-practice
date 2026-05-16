const { createClient } = require("redis");

const client = createClient();

async function main() {
  await client.connect();

  console.log("Redis Connected");

  // Add locations
  await client.geoAdd("cities", [
    {
      longitude: 77.1025,
      latitude: 28.7041,
      member: "Delhi",
    },
    {
      longitude: 72.8777,
      latitude: 19.076,
      member: "Mumbai",
    },
    {
      longitude: 77.5946,
      latitude: 12.9716,
      member: "Bangalore",
    },
  ]);

  console.log("Cities added");

  // Distance between two cities
  const distance = await client.geoDist("cities", "Delhi", "Mumbai", "KM");

  console.log("Delhi -> Mumbai Distance:", distance, "KM");

  // Find nearby cities within 2000 KM of Delhi
  const nearby = await client.geoSearch(
    "cities",
    {
      longitude: 77.1025,
      latitude: 28.7041,
    },
    {
      radius: 2000,
      unit: "km",
    },
  );

  console.log("Nearby Cities:", nearby);

  await client.quit();
}

main();
