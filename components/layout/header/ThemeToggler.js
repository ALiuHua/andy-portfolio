import React, { useState } from "react";
import { ThemeTogglerWrapper } from "./ThemeTogglerStyles";
const ThemeToggler = ({ toggleTheme }) => {
  const [checked, setChecked] = useState(true);
  const onInputChange = () => {
    setChecked(!checked);
    toggleTheme();
  };
  return (
    <ThemeTogglerWrapper>
      <div className="power-switch">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={onInputChange}
        />
        <div className="button">
          <svg className="power-off">
            <use xlinkHref="#line" className="line" />
            <use xlinkHref="#circle" className="circle" />
          </svg>
          <svg className="power-on">
            <use xlinkHref="#line" className="line" />
            <use xlinkHref="#circle" className="circle" />
          </svg>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
          id="line"
        >
          <line x1="75" y1="40" x2="75" y2="68" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
          id="circle"
        >
          <circle cx="75" cy="80" r="35" />
        </symbol>
      </svg>
    </ThemeTogglerWrapper>
  );
};

export default ThemeToggler;
