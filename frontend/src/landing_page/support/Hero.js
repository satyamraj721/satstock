import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>

        {/* REPLACED INVALID <a> WITH BUTTON */}
        <button
          type="button"
          style={{
            color: "white",
            textDecoration: "underline",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            font: "inherit",
          }}
        >
          Track Tickets
        </button>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            className="form-control my-3"
            placeholder="Eg. how do I activate F&O"
            aria-label="Search support"
          />

          <div className="d-flex flex-column gap-2">
            <button type="button" className="support-link">
              Track account opening
            </button>

            <button type="button" className="support-link">
              Track segment activation
            </button>

            <button type="button" className="support-link">
              Intraday margins
            </button>

            <button type="button" className="support-link">
              Kite user manual
            </button>
          </div>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <button type="button" className="support-link">
                Current Takeovers and Delisting - January 2024
              </button>
            </li>
            <li>
              <button type="button" className="support-link">
                Latest Intraday leverages - MIS & CO
              </button>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
