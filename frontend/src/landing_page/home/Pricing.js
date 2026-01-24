import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-4 ">
          <h1>Unbeatable pricing</h1>

          <p className="text-muted">
            Zerodha’s pricing is simple and transparent. ₹20 per trade for
            intraday, F&O, and currency trades, with zero charges for equity delivery
          </p>

          <Link
            to="/pricing"
            style={{ textDecoration: "none" }}
          >
            See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="col-2"></div>

        <div className="col-6">
          <div className="row text-center">
            
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and direct trades</p>
            </div>

            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Flat fee per order for intraday, F&O, and currency</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
