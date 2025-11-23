import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./dropdown.css";

export default function Dropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const currentLanguage = i18n.language === "en" ? "ENG" : "UA";
  const chosenLang = currentLanguage === "ENG" ? "UA" : "ENG";

  const handleLanguageChange = () => {
    const newLang = currentLanguage === "ENG" ? "ua" : "en";
    i18n.changeLanguage(newLang);
    setOpen(false);
  };

  return (
    <div className="nav__dropdown">
      <button
        className={`nav__dropdown-button ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>{currentLanguage}</span>
        <div className={`nav__dropdown-icon ${open ? "active" : ""}`}>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={`nav__dropdown-content ${open ? "active" : ""}`}>
        <div className="nav__dropdown-item" onClick={handleLanguageChange}>
          {chosenLang}
        </div>
      </div>
    </div>
  );
}
