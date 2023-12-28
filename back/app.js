const express = require("express");
const mongodb = require("./app/database/mongodb");
const userRoutes = require("../back/app/routes/user");
const sauceRoutes = require("../back/app/routes/sauce");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/auth", userRoutes);
app.get("/api/sauces", sauceRoutes);

module.exports = app;
