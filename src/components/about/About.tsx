import { Icon } from "@iconify/react";
import Info from "./Info.js";
import "./about.css";
import vbImage from "../../assets/images/vb.jpg";
import CV from "../../assets/babak-soleimani-cv-de.pdf";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className="about section" id="about">
      <h2 className="section__title">{t("about.title")}</h2>
      <span className="section__subtitle">{t("about.subtitle")}</span>

      <div className="about__container container grid">
        <img src={vbImage} alt="about image" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">{t("about.description")}</p>

          <a download="" href={CV} className="button button--flex">
            {t("about.downloadCV")}
            <Icon icon="uil:import" />
          </a>
        </div>
      </div>
    </section>
  );
}
