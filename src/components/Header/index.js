import React from "react";
import Toggle from "../Toggle";
import logodark from "../../assets/dark/logo.svg";
import logolight from "../../assets/light/logo.svg";
import sun from "../../assets/Icons/sun.png";
import moon from "../../assets/Icons/moon.png";

const Header = ({ theme, toggle }) => {
  return (
    <div className="lg:px-10 lg:py-6 p-4  box-border">
      <div className="flex justify-between h-10 items-center bg-transparent">
        <div className="max-h-full">
          <img
            className="max-h-full h-10"
            src={theme === "light" ? logolight : logodark}
            alt="Product ride"
          />
        </div>
        <div>
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  alt="moon"
                  style={{ pointerEvents: "none" }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  role="presentation"
                  alt="sun"
                  style={{ pointerEvents: "none" }}
                />
              ),
            }}
            checked={theme === "dark"}
            onChange={toggle}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
