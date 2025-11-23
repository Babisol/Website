import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export default function Data() {
  const { t } = useTranslation();
  return (
    <div className="home__data">
      <h1 className="home__title">{t("home.name")}</h1>
      <h3 className="home__subtitle">Full Stack Developer</h3>
      <p className="home__description">{t("home.description")}</p>

      <a href="#contact" className="button button--flex">
        <span>{t("home.sayHelloBtn")}</span>
        <Icon icon="uil:message" />
      </a>
    </div>
  );
}
