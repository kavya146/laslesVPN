import React from "react";
import "./Helpfooter.css";
import icon from "./icon.svg";
import fb from "./fblogo.svg";
import twitter from "./twiterlogo.svg";
import insta from "./instalogo.svg";

const HelpFooter = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginRight: "200px" }}>
        <div className="footer-logo">
          <a href="#">
            <img src={icon}></img>
          </a>
        </div>
        <p className="helpfooter-p">
          LaslesVPN is a private virtual network that has unique features and
          has high security.
        </p>

        <div className="social-icon">
          <a href="https://www.facebook.com/">
            <img src={fb}></img>
          </a>
          <a href="https://Twitter.com/">
            <img src={twitter}></img>
          </a>
          <a href="https://www.Instagram.com/">
            <img src={insta}></img>
          </a>
          <p>© 2020 LaslesVPN</p>
        </div>
      </div>

      <div>
        <h4>Products</h4>
        <ul>
          <li>
            <a className="help-a" href="#">
              Download
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              Locations
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              Server
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              Countries
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4>Engage</h4>
        <ul>
          <li>
            <a className="help-a" href="#">
              LaslesVPN
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              FAQ
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              Tutorials
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4>Earn Money</h4>
        <ul>
          <li>
            <a className="help-a" href="#">
              Affiliate
            </a>
          </li>
          <li>
            <a className="help-a" href="#">
              Become Partner
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpFooter;
