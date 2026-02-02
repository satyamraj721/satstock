import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-6 p-3">
          <img src={imageURL} alt={productName} />
        </div>

        {/* Content */}
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>

          {/* Action links */}
          <div className="product-links">
            <a href={tryDemo || "#"} className="product-link">
              Try Demo
            </a>

            <a href={learnMore || "#"} className="product-link">
              Learn More
            </a>
          </div>

          {/* Store badges */}
          <div className="mt-3">
            <a href={googlePlay || "#"}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play badge"
              />
            </a>

            <a href={appStore || "#"}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store badge"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
