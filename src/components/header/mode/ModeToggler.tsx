import { Icon } from "@iconify/react";
import "./modetoggler.css";
import { useTheme } from "../../../context/ThemeContext.js";

export default function ModeToggler() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="mode">
      <div className="mode-toggler" onClick={toggleTheme}>
        <span className="mode-toggler-circle"></span>
      </div>
      {theme === "dark" ? (
        <Icon className="mode-dark-icon" icon="uil:moon" />
      ) : (
        <Icon className="mode-light-icon" icon="uil:sun" />
      )}
    </div>
  );
}
