import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import "./support.css";   // 👈 IMPORTANT

function SupportPage() {
  return (
    <div className="support-page">
      <Hero />
      <CreateTicket />
    </div>
  );
}

export default SupportPage;
