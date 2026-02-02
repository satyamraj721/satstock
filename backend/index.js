const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 10000;

/* =======================
   MIDDLEWARE
======================= */
app.use(cors());
app.use(express.json());

/* =======================
   ROOT TEST ROUTE
======================= */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* =======================
   MONGODB CONNECTION
======================= */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

/* =======================
   MODELS
======================= */
const HoldingsModel = require("./model/HoldingsModel");
const OrdersModel = require("./model/OrdersModel");
const PositionsModel = require("./model/PositionsModel");
const UserModel = require("./model/UserModel");

/* =======================
   ROUTES
======================= */
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch {
    res.status(500).send("Error fetching holdings");
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch {
    res.status(500).send("Error
