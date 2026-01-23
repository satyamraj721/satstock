import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loadingPrice, setLoadingPrice] = useState(true);

  useEffect(() => {
    const fetchStockPrice = async () => {
      if (!uid) return;
      try {
        const response = await axios.get(`http://localhost:5000/api/stock/${uid}`);
        setStockPrice(response.data.price);
      } catch (error) {
        console.error("Error fetching stock price:", error);
        alert("Failed to fetch current stock price. Please enter manually.");
      } finally {
        setLoadingPrice(false);
      }
    };

    fetchStockPrice();
  }, [uid]);

  const handleBuyClick = async () => {
    try {
      const qty = parseInt(stockQuantity, 10);
      const price = parseFloat(stockPrice);
      if (isNaN(qty) || qty <= 0 || isNaN(price) || price <= 0) {
        alert("Invalid quantity or price");
        return;
      }
      await axios.post("http://localhost:5000/newOrder", {
        name: uid,
        qty,
        price,
        mode: "BUY",
      });
      alert("Order placed successfully!");
      closeBuyWindow();
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Check console for details.");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
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
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
