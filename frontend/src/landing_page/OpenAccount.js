import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Account opening hero"
          className="mb-5"
        />
        <h1 className="mt-5"> Open the zerodha account </h1>
        <p>
          modern platform and apps o investment and flat 20 intraday and F&O
          trades{" "}
        </p>
        <Link
          className="p-3 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
          to="/signup"
        >
          {" "}
          Sign up Now
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
