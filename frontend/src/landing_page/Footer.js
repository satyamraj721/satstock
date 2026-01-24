import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Logo & Copyright */}
          <div className="col">
            <img
              src="media/images/logo.png"
              alt="SatStock Logo"
              style={{ width: "50%" }}
            />
            <p>
              &copy; 2020 – 2024, SatStock Technologies Pvt. Ltd. All rights
              reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col">
            <p>Company</p>
            <Link to="/about">About</Link>
            <br />
            <Link to="/product">Products</Link>
            <br />
            <Link to="/pricing">Pricing</Link>
            <br />
            <button type="button">Referral Program</button>
            <br />
            <button type="button">Careers</button>
            <br />
            <button type="button">SatStock Tech</button>
            <br />
            <button type="button">Press & Media</button>
            <br />
            <button type="button">Corporate Responsibility</button>
            <br />
          </div>

          {/* Support */}
          <div className="col">
            <p>Support</p>
            <Link to="/support">Contact Us</Link>
            <br />
            <Link to="/support">Help Center</Link>
            <br />
            <button type="button">Blog</button>
            <br />
            <button type="button">Charges & Fees</button>
            <br />
            <button type="button">Downloads & Resources</button>
            <br />
          </div>

          {/* Account */}
          <div className="col">
            <p>Account</p>
            <Link to="/signup">Open an Account</Link>
            <br />
            <button type="button">Fund Transfer</button>
            <br />
            <button type="button">Trading Challenge</button>
            <br />
          </div>
        </div>

        {/* Legal & Disclaimer */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            SatStock Technologies Pvt. Ltd. is a platform designed for learning,
            analysis, and demonstration purposes. SatStock does not provide
            investment advice, stock tips, or portfolio management services.
          </p>

          <p>
            Investments in securities and financial instruments are subject to
            market risks. Users are advised to read all related documents
            carefully before making any investment decisions.
          </p>

          <p>
            SatStock does not authorize any individual or third party to trade
            on behalf of users. Any communication claiming otherwise should be
            treated as unauthorized.
          </p>

          <p>
            This platform is intended for educational and informational use
            only. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
