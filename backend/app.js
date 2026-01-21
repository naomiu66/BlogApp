const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./db/mongoDb");
// const swaggerUi = require("swagger-ui-express");
// const swaggerJSDoc = require("swagger-jsdoc");

connectDb();

const blogsRouter = require("./routes/blogs");

const app = express();

app.use(logger("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blogs", blogsRouter);

// const swaggerOptions = {
//   swaggerDefinition: {
//     openapi: "3.0.0",
//     info: {
//       title: "My API",
//       version: "1.0.0",
//       description: "API documentation using Swagger",
//     },
//     servers: [
//       {
//         url: `http://localhost:3000`,
//       },
//     ],
//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type: "http",
//           scheme: "bearer",
//           bearerFormat: "JWT",
//         },
//       },
//     },
//   },
//   apis: ["./routes/*.js"], // Path to your API docs
// };

// const swaggerDocs = swaggerJSDoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
