# Node.js Express.js Boilerplate 👨‍💻

This is a boilerplate repository for quickly setting up an Express.js Node.js application with MongoDB integration. It provides a basic structure and setup to kickstart your project development.

## Features 🚀

- Express.js server setup ✨
- MongoDB integration 📦
- Sample environment file for configuration 📝

## Prerequisites 📋

Before getting started, ensure you have the following installed on your machine:

- Node.js 🟢
- MongoDB 🍃

## Installation ⚙️

1. Clone the repository:

   ```bash
   git clone https://github.com/Spxc/Express-boilerplate.git
   ```

2. Install the dependencies:

   ```bash
   cd express-node-boilerplate
   npm install
   ```

3. Create a .env file at the root of the project (you can use the provided .env.sample file as a template) and set the following environment variables:

- **PORT** - Port number on which the server will run.
- **MONGO_HOST** - MongoDB connection URL or hostname.
- **MONGO_DB** - MongoDB database name.

   Example .env file:

   ```
   PORT=3000
   MONGO_HOST="localhost"
   MONGO_DB="mydatabase"
   ```

## Usage 🚀
To start the Express.js server, run the following command:
```npm start```

The server will start running at [localhost:PORT](http://localhost:<PORT>), where `<PORT>` is the value you set in the .env file.

## Contributing 🤝
Contributions are welcome! If you find any issues or have suggestions, please create an issue or submit a pull request.

## License 📄
This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md).