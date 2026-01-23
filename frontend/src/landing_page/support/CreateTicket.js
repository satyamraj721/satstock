import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {[
          "Account Opening",
          "Trading & Orders",
          "Funds & Banking",
          "Charges & Taxes",
          "Demat Account",
          "Technical Issues",
        ].map((title, i) => (
          <div key={i} className="col-4 p-5 mt-2 mb-2">
            <h4>
              <i className="fa fa-plus-circle" aria-hidden="true"></i> {title}
            </h4>

            {[
              "Online Account Opening",
              "Offline Account Opening",
              "Company, Partnership and HUF Account",
              "NRI Account Opening",
              "Charges at Zerodha",
              "Zerodha IDFC FIRST Bank 3-in-1 Account",
              "Getting Started",
            ].map((item, j) => (
              <a
                key={j}
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{ textDecoration: "none", lineHeight: "2.5" }}
              >
                {item}
                <br />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
