import React from "react";
import { NavLink } from "react-router-dom";
import MainLogo from "../assets/MainLogo.svg";
import BBC from "../assets/bbc.svg";
import BBCwhite from "../assets/bbc-white.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* <NavLink to={"/"}>
          <img src={MainLogo} alt="" />
        </NavLink> */}
        <div className="footer-content">
          <div className="footer-links">
            <NavLink to="/">World News</NavLink>
            <NavLink to="/">Politics</NavLink>
            <NavLink to="/">Business</NavLink>
            <NavLink to="/">Technology</NavLink>
            <NavLink to="/">Sports</NavLink>
            <NavLink to="/">Culture</NavLink>
            <NavLink to="/">Health</NavLink>
            <NavLink to="/">Science</NavLink>

            <div className="footer-languages">
              <select className="language-select" defaultValue="bbc">
                <option value="bbc" disabled>
                  BBC in other languages
                </option>
                <option value="en">English</option>
                <option value="uz">O‘zbek</option>
              </select>
            </div>
          </div>

          <div className="footer-logo">
            <NavLink to="/">
              <img src={BBCwhite} alt="" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-copyright">
            <div className="copyright-text">
              <i className="fa-regular fa-copyright"></i>{" "}
              <p>Copyright © 2024 - The News - All rights reserved</p>
            </div>

            <div className="footer-social">
              <NavLink to="/">
                <i className="fa-brands fa-instagram"></i>{" "}
              </NavLink>
              <NavLink to="/">
                <i className="fa-brands fa-linkedin"></i>{" "}
              </NavLink>
              <NavLink to="/">
                <i className="fa-brands fa-youtube"></i>{" "}
              </NavLink>
              <NavLink to="/">
                <i className="fa-brands fa-twitter"></i>{" "}
              </NavLink>
              <NavLink to="/">
                <i className="fa-brands fa-reddit"></i>{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
