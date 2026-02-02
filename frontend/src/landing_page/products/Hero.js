import React from "react";
import { Link } from "react-router-dom";
import "./product.css"; // uses same product styles

function Hero() {
  return (
    <div className="text-center mt-5 p-3">
      <h1>Technology</h1>

      <h3 className="text-muted mt-3 fs-4">
        Sleek trading platforms built for speed and performance
      </h3>

      <p className="mt-3">
        Check out our{" "}
        <Link to="/products" className="product-link">
          investment offering{" "}
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </p>
    </div>
  );
}

export default Hero;
