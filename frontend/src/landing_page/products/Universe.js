import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Partner platforms */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-small text-muted">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-small text-muted">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-small text-muted">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-small text-muted">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-small text-muted">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-small text-muted">
            Thematic investment platform
          </p>
        </div>

        {/* CTA */}
        <Link to="/signup" className="product-cta">
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;
