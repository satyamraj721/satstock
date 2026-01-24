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
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            {tryDemo ? (
              <a href={tryDemo}>Try Demo</a>
            ) : (
              <button type="button">Try Demo</button>
            )}
            {learnMore ? (
              <a href={learnMore} style={{ marginLeft: "50px" }}>
                Learn More
              </a>
            ) : (
              <button type="button" style={{ marginLeft: "50px" }}>
                Learn More
              </button>
            )}
          </div>
          <div className="mt-3">
            {googlePlay ? (
              <a href={googlePlay}>
                <img src="media/images/googlePlayBadge.svg" alt="Google Play badge" />
              </a>
            ) : (
              <img src="media/images/googlePlayBadge.svg" alt="Google Play badge" />
            )}
            {appStore ? (
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  style={{ marginLeft: "50px" }}
                  alt="App Store badge"
                />
              </a>
            ) : (
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
                alt="App Store badge"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;