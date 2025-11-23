import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "HTML5", level: "Basic" },
  { name: "CSS3", level: "Intermediate" },
  { name: "Sass", level: "Intermediate" },
  { name: "Tailwind", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Redux", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
];

export default function Frontend() {
  const { t } = useTranslation();
  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.frontend")}</h3>

      <div className="skills__box">
        <div className="skills__group">
          {skills.slice(0, 5).map((skill, index) => (
            <div className="skills__data" key={index}>
              <Icon icon="bx:badge-check" />
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                {/* <span className="skills__level">{skill.level}</span> */}
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {skills.slice(5).map((skill, index) => (
            <div className="skills__data" key={index}>
              <Icon icon="bx:badge-check" />
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                {/* <span className="skills__level">{skill.level}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
