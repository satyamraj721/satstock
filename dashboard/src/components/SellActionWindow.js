import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  useEffect(() => {
    const fetchStockPrice = async () => {
      if (!uid) return;
      try {
        const response = await axios.get(`http://localhost:5000/api/stock/${uid}`);
        setStockPrice(response.data.price);
      } catch (error) {
        alert("Failed to fetch current stock price. Please enter manually.");
      }
    };

    fetchStockPrice();
  }, [uid]);

  const handleSellClick = async () => {
    try {
      const qty = parseInt(stockQuantity, 10);
      const price = parseFloat(stockPrice);
      if (Number.isNaN(qty) || qty <= 0 || Number.isNaN(price) || price <= 0) {
        alert("Invalid quantity or price");
        return;
      }
      await axios.post("http://localhost:5000/newOrder", {
        name: uid,
        qty,
        price,
        mode: "SELL",
      });
      alert("Sell order placed successfully!");
      closeSellWindow();
    } catch (error) {
      alert("Failed to place sell order. Please try again later.");
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
