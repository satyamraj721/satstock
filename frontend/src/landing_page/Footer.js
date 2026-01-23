import React from "react";

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
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral Program</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">SatStock Tech</a>
            <br />
            <a href="">Press & Media</a>
            <br />
            <a href="">Corporate Responsibility</a>
            <br />
          </div>

          {/* Support */}
          <div className="col">
            <p>Support</p>
            <a href="">Contact Us</a>
            <br />
            <a href="">Help Center</a>
            <br />
            <a href="">Blog</a>
            <br />
            <a href="">Charges & Fees</a>
            <br />
            <a href="">Downloads & Resources</a>
            <br />
          </div>

          {/* Account */}
          <div className="col">
            <p>Account</p>
            <a href="">Open an Account</a>
            <br />
            <a href="">Fund Transfer</a>
            <br />
            <a href="">Trading Challenge</a>
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
