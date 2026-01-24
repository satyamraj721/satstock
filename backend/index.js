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
  } catch (err) {
    res.status(500).send("Error fetching holdings");
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).send("Error fetching positions");
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).send("Error fetching orders");
  }
});

/* =======================
   CREATE ORDER
======================= */
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const parsedQty = parseInt(qty, 10);
    const parsedPrice = parseFloat(price);

    if (
      !name ||
      isNaN(parsedQty) ||
      parsedQty <= 0 ||
      isNaN(parsedPrice) ||
      parsedPrice <= 0 ||
      !mode
    ) {
      return res.status(400).send("Invalid order data");
    }

    const newOrder = new OrdersModel({
      name,
      qty: parsedQty,
      price: parsedPrice,
      mode,
    });

    await newOrder.save();

    if (mode === "BUY") {
      const existingHolding = await HoldingsModel.findOne({ name });

      if (existingHolding) {
        const totalValue =
          existingHolding.avg * existingHolding.qty +
          parsedPrice * parsedQty;

        const totalQty = existingHolding.qty + parsedQty;
        const newAvg = totalValue / totalQty;

        await HoldingsModel.updateOne(
          { name },
          { qty: totalQty, avg: newAvg, price: parsedPrice }
        );
      } else {
        await HoldingsModel.create({
          name,
          qty: parsedQty,
          avg: parsedPrice,
          price: parsedPrice,
          net: "0.00%",
          day: "0.00%",
        });
      }
    }

    if (mode === "SELL") {
      const existingHolding = await HoldingsModel.findOne({ name });

      if (!existingHolding || existingHolding.qty < parsedQty) {
        return res.status(400).send("Insufficient holdings");
      }

      const newQty = existingHolding.qty - parsedQty;

      if (newQty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await HoldingsModel.updateOne(
          { name },
          { qty: newQty, price: parsedPrice }
        );
      }
    }

    res.status(201).send("Order processed successfully");
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).send("Error processing order");
  }
});

/* =======================
   SIGNUP
======================= */
app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    await UserModel.create({ email, username, password });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error registering user" });
  }
});

/* =======================
   START SERVER
======================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
