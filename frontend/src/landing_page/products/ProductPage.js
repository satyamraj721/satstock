import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import "./product.css";

function ProductPage() {
  return (
    <div className="product-page">
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more."
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesription="The central dashboard for your account with detailed reports and insights."
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free."
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms with simple APIs."
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity"
        productDesription="Bite-sized stock market lessons to learn on the go."
      />

      <p className="product-footer-text">
        Want to know more about our technology stack? Check out Zerodha.tech.
      </p>

      <Universe />
    </div>
  );
}

export default ProductPage;
