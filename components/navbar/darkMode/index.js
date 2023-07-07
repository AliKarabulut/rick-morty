"use client";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

const DarkMode = ({ theme }) => {
  const [checked, setChecked] = useState(theme === "dark");

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [checked]);

  const handleCheckboxChange = (event) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    const newTheme = newChecked ? "dark" : "light";
    document.cookie = `theme=${newTheme}`;
  };

  return (
    <div className="flex items-center">
      <label className="flex items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
          <div
            className={`absolute flex items-center justify-center top-[-4px] left-0 w-6 h-6 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
              checked ? "translate-x-full" : "translate-x-0"
            }`}
          >
            {checked ? <BsFillMoonStarsFill /> : <BsSunFill />}
          </div>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
