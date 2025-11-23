import "./portfolio.css";
import kickstarterImage from "../../../public/images/kickstarter.png";
import gadgetsImage from "../../../public/images/gadgets.png";
import ifsImage from "../../../public/images/ifs.png";
import js2048Image from "../../../public/images/2048.png";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Kickstarter – landing page",
    demoLink: "https://vbuldenko.github.io/Kickstarter/",
    codeLink: "https://github.com/vbuldenko/landing-kickstarter",
    imgSrc: kickstarterImage, // Replace with actual image path
  },
  {
    title: "2048 Game – Sliding puzzle game",
    demoLink: "https://vbuldenko.github.io/js_2048_game/",
    codeLink: "https://github.com/vbuldenko/2048-js-game",
    imgSrc: js2048Image, // Replace with actual image path
  },
  {
    title: "Nice gadgets – Apple ecommerce SPA",
    demoLink: "https://vbuldenko.github.io/react_phone-catalog/",
    codeLink: "https://github.com/vbuldenko/Phone-catalog",
    imgSrc: gadgetsImage, // Replace with actual image path
  },
  {
    title: "Intensity – Full stack fitness studio app",
    demoLink: "https://intensity-studio.onrender.com/",
    codeLink: "https://github.com/vbuldenko/Intensity-app",
    imgSrc: ifsImage, // Replace with actual image path
  },
];

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <section className="section" id="portfolio">
      <h2 className="section__title">{t("portfolio.title")}</h2>
      <span className="section__subtitle">{t("portfolio.subtitle")}</span>

      <div className="portfolio__container container grid">
        {projects.map((project, index) => (
          <div className="portfolio__item" key={index}>
            <img
              src={project.imgSrc}
              alt={project.title}
              className="portfolio__img"
            />
            <h3 className="portfolio__item-title">{project.title}</h3>

            <div className="portfolio__links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__button"
              >
                {t("portfolio.viewDemo")}
                <i className="uil uil-arrow-right portfolio__button-icon"></i>
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__button"
              >
                {t("portfolio.viewCode")}
                <i className="uil uil-arrow-right portfolio__button-icon"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
