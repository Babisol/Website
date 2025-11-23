import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "Node", level: "Intermediate" },
  { name: "REST", level: "Intermediate" },
  { name: "Express", level: "Intermediate" },
  { name: "Web sockets", level: "Basic" },
  { name: "Mongoose", level: "Intermediate" },
  { name: "Sequelize", level: "Intermediate" },
  { name: "Firebase", level: "Basic" },
  { name: "Docker", level: "Basic" },
];

export default function SkillSet() {
  const { t } = useTranslation();
  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.skills")}</h3>

      <div className="skills__box">
        <div className="skills__group">
          {skills.slice(0, 4).map((skill, index) => (
            <div className="skills__data" key={index}>
              <Icon icon="bx:badge-check" className="skills__icon" />
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                {/* <span className="skills__level">{skill.level}</span> */}
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {skills.slice(4).map((skill, index) => (
            <div className="skills__data" key={index}>
              <Icon icon="bx:badge-check" className="skills__icon" />
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
