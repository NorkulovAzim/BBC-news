import { NavLink } from "react-router-dom";
import GlobeImg from "../assets/Globe.svg";
import MainLogo from "../assets/MainLogo.svg";
import SavedIcon from "../assets/saved.svg";

const Header = () => {
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
            <NavLink to="/">World News</NavLink>
            <NavLink to="/">Politics</NavLink>
            <NavLink to="/">Business</NavLink>
            <NavLink to="/">Technology</NavLink>
            <NavLink to="/">Sports</NavLink>
            <NavLink to="/">Culture</NavLink>
          </div>

          <div className="savedNews">
            <NavLink to="/saved">
              Saved News
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
