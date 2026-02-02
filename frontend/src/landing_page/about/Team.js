import React from "react";
import "./team.css";

function Team() {
  return (
    <section className="team-section">
      <div className="team-header">
        <h1>People</h1>
      </div>

      <div className="team-card">
        <div className="team-left">
          <img
            src="media/images/SATYAM RAJ.png"
            alt="Satyam Raj"
            className="team-avatar"
          />
          <h4>SATYAM RAJ</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="team-right">
          <p>
            SATYAM RAJ bootstrapped and founded SATSTOCK in 2025 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            SATSTOCK has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p className="team-links">
  Connect on{" "}
  <a href="#" className="team-link">Homepage</a> /{" "}
  <a href="#" className="team-link">TradingQnA</a> /{" "}
  <a href="#" className="team-link">Twitter</a>
</p>

        </div>
      </div>
    </section>
  );
}

export default Team;
