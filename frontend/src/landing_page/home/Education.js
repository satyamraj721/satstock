import React from "react";

function Education() {
  return (
    <div className="container mt-5 ">
      <div className="row">

        {/* LEFT COLUMN (IMAGE / EMPTY FOR NOW) */}
        <div className="col-6 mb-5">
            <img src="media/images/education.svg" alt="Education" style={{ width: '80%' }} />
          {/* Add image here later if needed */}
        </div>

        {/* RIGHT COLUMN (CONTENT) */}
        <div className="col-6 fs-2 ">
          <h1>Free and open market education</h1>

          <p className="text-muted">
            Varsity, the largest online stock trading education platform
          </p>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{ textDecoration: "none" }}
          >
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-3">
            TradingQ&A, a community-driven question and answer platform for traders and investors   
           </p>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{ textDecoration: "none" }}
          >
            Trading Q&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;
