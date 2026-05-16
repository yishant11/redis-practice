# 🚀 Redis Playground

A comprehensive Node.js learning project demonstrating various Redis features and operations. This playground covers essential Redis data structures, caching strategies, and real-world implementations.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Redis Concepts](#redis-concepts)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)

---

## 🎯 Overview

Redis Playground is an educational project designed to explore and understand various Redis operations including:
- String operations and caching
- List data structures
- Geospatial queries
- Streams for event processing
- Express.js integration with Redis caching

Perfect for developers learning Redis or building cache-heavy applications!

---

## ✨ Features

### 1. **Redis Client Configuration** (`client.js`)
- Establishes connection to Redis server using `ioredis`
- Configured for localhost on default port 6379
- Reusable client module for all operations

### 2. **String Operations** (`string.js`)
- Basic string operations with Redis
- Key expiration and TTL management
- Caching patterns with expiration timers

### 3. **List Operations** (`list.js`)
- Push and retrieve items from Redis lists
- Range queries on list data
- Queue-like data structure operations

### 4. **Geospatial Operations** (`geospatial.js`)
- Store locations with latitude and longitude
- Calculate distances between two locations
- Search for nearby locations within a radius
- Real-world use case: Find cities within 2000 KM radius

```javascript
// Example: Find nearby cities
const nearby = await client.geoSearch(
  "cities",
  { longitude: 77.1025, latitude: 28.7041 },
  { radius: 2000, unit: "km" }
);
```

### 5. **Redis Streams** (`redis-streams.js`)
- Event streaming with immutable logs
- Add entries to streams with timestamps
- Query stream data across ranges
- Ideal for event sourcing and time-series data

### 6. **Express.js Caching Server** (`server.js`)
- RESTful API built with Express.js
- Implements Redis caching layer
- Fetches TODO data from JSONPlaceholder API
- 60-second cache expiration
- Cache hit/miss detection

```javascript
// Server runs on http://localhost:9000
// Endpoint: GET / - Returns cached TODO data
```

#### ⚡ Performance Improvement with Redis Caching
- **Without Cache**: API response time ~140ms (network request to JSONPlaceholder)
- **With Cache (Redis)**: API response time ~10ms (in-memory Redis read)
- **Performance Gain**: 14x faster! 🚀

This dramatic improvement is achieved by storing API responses in Redis for 60 seconds, serving subsequent requests directly from memory instead of making external API calls.

---

## ⚡ Performance Impact

### Real-World Caching Benefits

This project demonstrates significant performance improvements through Redis caching:

| Scenario | Response Time | Details |
|---|---|---|
| **Cache Miss** (First Request) | ~140ms | Direct API call to JSONPlaceholder |
| **Cache Hit** (Subsequent Requests) | ~10ms | In-memory Redis lookup |
| **Performance Improvement** | **14x faster** | 🚀 130ms saved per request! |

### Why is Caching Important?

- **Reduced Latency**: In-memory reads are orders of magnitude faster than network requests
- **Reduced Server Load**: Fewer external API calls = lower bandwidth usage
- **Scalability**: Handle more concurrent users with the same backend capacity
- **Cost Savings**: Fewer API calls to external services reduce costs
- **Better User Experience**: Faster response times lead to better application performance

### How It Works

1. User makes a request to `/`
2. Server checks Redis cache for "todos" key
3. If found (cache hit) → Return data instantly (~10ms)
4. If not found (cache miss) → Fetch from API (~140ms) → Store in Redis → Return data
5. Redis automatically expires cached data after 60 seconds

---

```
redis-playground/
├── client.js              # Redis client configuration
├── string.js              # String operations & caching
├── list.js                # List operations
├── geospatial.js          # Geospatial queries & distances
├── redis-streams.js       # Event streaming examples
├── server.js              # Express server with Redis caching
├── package.json           # Project dependencies
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

---

## 🔧 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **Redis Server** (running on localhost:6379)

### Steps

1. Clone the repository:
```bash
git clone https://github.com/yishant11/redis-practice.git
cd redis-playground
```

2. Install dependencies:
```bash
npm install
```

3. Ensure Redis is running:
```bash
redis-server
```

---

## 🚀 Usage

### Run Individual Examples

**String Operations:**
```bash
node string.js
```

**List Operations:**
```bash
node list.js
```

**Geospatial Operations:**
```bash
node geospatial.js
```

**Redis Streams:**
```bash
node redis-streams.js
```

### Run the Caching Server

```bash
node server.js
```

Then access the API:
```bash
curl http://localhost:9000
```

The first request will fetch data from the API and cache it for 60 seconds. Subsequent requests within that window will serve from Redis cache.

---

## 📚 Redis Concepts

### What is Redis?
Redis (Remote Dictionary Server) is an in-memory data structure store that can be used as a database, cache, and message broker.

### Key Data Structures Used

| Data Structure | Use Case | File |
|---|---|---|
| **Strings** | Simple key-value storage, caching | `string.js`, `server.js` |
| **Lists** | Queues, stacks, ordered collections | `list.js` |
| **Geospatial** | Location-based services, distance calculations | `geospatial.js` |
| **Streams** | Event logs, time-series data | `redis-streams.js` |

### Caching Pattern
The server implements a cache-aside pattern:
1. Check if data exists in Redis
2. If yes (cache hit), return cached data
3. If no (cache miss), fetch from API and store in Redis
4. Set expiration time (TTL) for automatic cleanup

---

## 📦 Dependencies

```json
{
  "axios": "^1.16.1",      // HTTP client for API requests
  "express": "^5.2.1",     // Web framework
  "ioredis": "^5.10.1",    // Redis client (primary)
  "redis": "^5.12.1"       // Redis client (alternative)
}
```

---

## 🎓 Getting Started

### 1. Start Redis Server
```bash
redis-server
```

### 2. Test Client Connection
```bash
node -e "const client = require('./client'); console.log('Connected to Redis')"
```

### 3. Run Examples
Execute any of the feature files to see Redis in action:
```bash
node string.js
node list.js
node geospatial.js
node redis-streams.js
```

### 4. Start the Caching Server
```bash
node server.js
```

Access via:
- Browser: http://localhost:9000
- cURL: `curl http://localhost:9000`

---

## 💡 Learning Path

1. **Basics**: Start with `client.js` and `string.js`
2. **Collections**: Explore `list.js`
3. **Advanced**: Try `geospatial.js` and `redis-streams.js`
4. **Integration**: Run `server.js` to see real-world caching

---

## 📖 Additional Resources

- [Redis Documentation](https://redis.io/documentation)
- [ioredis NPM Package](https://www.npmjs.com/package/ioredis)
- [Redis CLI Tutorial](https://redis.io/topics/cli)
- [Redis Data Types](https://redis.io/topics/data-types)

---

## 📝 License

This project is licensed under the ISC License.

---

## 🙋 Author

Created as a learning playground for Redis exploration and practice.

---

## 🤝 Contributing

Feel free to fork and submit pull requests for improvements!

---

**Happy Coding! 🎉**
