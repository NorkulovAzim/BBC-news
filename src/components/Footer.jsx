import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainLogo from "../assets/MainLogo.svg";
import BBC from "../assets/bbc.svg";
import BBCwhite from "../assets/bbc-white.png";
import i18n from "../i18n";

const Footer = () => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const loadLanguage = () => {
      const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
      setCurrentLanguage(savedLanguage);
    };

    loadLanguage();
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setCurrentLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);

    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <footer>
      <div className="container">
        {/* <NavLink to={"/"}>
          <img src={MainLogo} alt="" />
        </NavLink> */}
        <div className="footer-content">
          <div className="footer-links">
            <NavLink to="/">{t("world_news")}</NavLink>
            <NavLink to="/">{t("politics")}</NavLink>
            <NavLink to="/">{t("business")}</NavLink>
            <NavLink to="/">{t("technology")}</NavLink>
            <NavLink to="/">{t("sports")}</NavLink>
            <NavLink to="/">{t("culture")}</NavLink>
            <NavLink to="/">{t("health")}</NavLink>
            <NavLink to="/">{t("science")}</NavLink>

            <div className="footer-languages">
              <select
                className="language-select"
                value={currentLanguage}
                onChange={handleLanguageChange}
              >
                <option value="bbc" disabled>
                  BBC in other languages
                </option>
                <option value="en">English</option>
                <option value="uz">O‘zbek</option>
                <option value="ru">Русский</option>
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
              <p>{t("copyright")}</p>
            </div>

            <div className="footer-social">
              <NavLink
                to="/"
                onClick={() =>
                  window.open("https://www.instagram.com/bbcnews/", "_blank")
                }
              >
                <i className="fa-brands fa-instagram"></i>
              </NavLink>
              <NavLink
                to="/"
                onClick={() =>
                  window.open("https://uk.linkedin.com/company/bbc", "_blank")
                }
              >
                <i className="fa-brands fa-linkedin"></i>
              </NavLink>
              <NavLink
                to="/"
                onClick={() =>
                  window.open("https://www.youtube.com/@BBC", "_blank")
                }
              >
                <i className="fa-brands fa-youtube"></i>
              </NavLink>
              <NavLink
                to="/"
                onClick={() =>
                  window.open("https://www.reddit.com/r/bbc/", "_blank")
                }
              >
                <i className="fa-brands fa-twitter"></i>
              </NavLink>
              <NavLink
                to="/"
                onClick={() =>
                  window.open("https://www.reddit.com/r/bbc/", "_blank")
                }
              >
                <i className="fa-brands fa-reddit"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
