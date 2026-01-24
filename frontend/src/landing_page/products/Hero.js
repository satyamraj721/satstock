import React from "react";

function Hero() {
  return (
    <div className="text-center mt-5 p-3">
      <h1>Technology</h1>

      <h3 className="text-muted mt-3 fs-4">
        Sleek trading platforms built for speed and performance
      </h3>

      <p className="mt-3">
        Check out our{" "}
        <button
          type="button"
          className="link-button"
        >
          investment offering{" "}
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </p>
    </div>
  );
}

export default Hero;
