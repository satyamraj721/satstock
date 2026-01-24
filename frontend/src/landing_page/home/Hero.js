import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Investment illustration" className="mb-5" />
        <h1 className="mt-5"> Invest In Everything </h1>
        <p> Online platform to invest in stocks ,mutual fund and more</p>
        <Link
          className="p-3 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
          to="/signup"
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;

