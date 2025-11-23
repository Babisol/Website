import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export default function ScrollDown() {
  const { t } = useTranslation();
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button">
        <Icon icon="uil:mouse-alt" />
        <span className="home__scroll-name">{t("home.scrollDownBtn")}</span>
        <Icon icon="uil:arrow-down" className="home__scroll-arrow" />
      </a>
    </div>
  );
}
