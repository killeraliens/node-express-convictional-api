# Node Express Convictional API

This Node.js Express-based API interacts with an external server to retrieve and format product data to contract.yaml spec.

## Installation

To run this project, clone the repository and install the dependencies using npm:

```bash
npm install
```

## Usage

To start the API server, use the following command:

```bash
npm start
```

To run unit tests, use the following command:

```bash
npm test
```

## Dependencies

- `axios`: HTTP client for making requests
- `cors`: Middleware for enabling CORS
- `express`: Web framework for Node.js
- `express-rate-limit`: Middleware for rate limiting
- `helmet`: Middleware for basic security headers
- `yaml`: YAML parser and serializer (testing approach in progress)
