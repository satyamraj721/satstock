import React from "react";

function CreateTicket() {
  const categories = [
    {
      title: "Account Opening",
      items: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "NRI Account Opening",
      ],
    },
    {
      title: "Trading & Orders",
      items: [
        "Placing Orders",
        "Order Rejection",
        "Trade Execution",
        "Intraday Trading",
      ],
    },
    {
      title: "Funds & Banking",
      items: [
        "Adding Funds",
        "Withdrawing Funds",
        "Bank Account Change",
      ],
    },
    {
      title: "Charges & Taxes",
      items: [
        "Brokerage Charges",
        "GST & Taxes",
        "Contract Notes",
      ],
    },
    {
      title: "Demat Account",
      items: [
        "Holding Statements",
        "Corporate Actions",
        "DP Charges",
      ],
    },
    {
      title: "Technical Issues",
      items: [
        "Login Issues",
        "App Not Loading",
        "Performance Issues",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {categories.map((category, i) => (
          <div key={i} className="col-4 p-4">
            <h4 className="mb-3">
              <i
                className="fa fa-plus-circle"
                aria-hidden="true"
                style={{ marginRight: "8px" }}
              ></i>
              {category.title}
            </h4>

            {category.items.map((item, j) => (
              <button
                key={j}
                type="button"
                className="support-link"
                onClick={() => {}}
              >
                {item}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
