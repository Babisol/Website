import Frontend from "./Fronted";
import Backend from "./Backend";
import "./skills.css";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("skills.title")}</h2>
      <span className="section__subtitle">{t("skills.subtitle")}</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}
