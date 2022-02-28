import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
        alt="amazon header"
      />
      <div className="header__search">
        <input type="text" className="header__searchInfo" />
        {/* Logo */}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
