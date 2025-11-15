import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GlobeImg from "../assets/Globe.svg";
import MainLogo from "../assets/MainLogo.svg";
import SavedIcon from "../assets/saved.svg";

import { useSaved } from "../context/SavedContext";

const Header = () => {
  const { t } = useTranslation();

  const { savedItems } = useSaved();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <NavLink to="/">
            <img className="logo" src={MainLogo} alt="" />
          </NavLink>

          <div className="header-links">
            <NavLink to="/">{t("world_news")}</NavLink>
            <NavLink to="/">{t("politics")}</NavLink>
            <NavLink to="/">{t("business")}</NavLink>
            <NavLink to="/">{t("technology")}</NavLink>
            <NavLink to="/">{t("sports")}</NavLink>
            <NavLink to="/">{t("culture")}</NavLink>
          </div>

          <div className="savedNews">
            <NavLink to="/saved">
              {t("saved")} ({savedItems.length})
              <img src={SavedIcon} alt="" />
            </NavLink>
          </div>
          <div className="date">
            <img src={GlobeImg} alt="" />
            <p>{today}</p>
          </div>
        </div>

        <div className="header-line"></div>
      </div>
    </header>
  );
};

export default Header;
