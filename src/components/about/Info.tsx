import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const currentYear = new Date().getFullYear();
const startYear = 2024;
const experienceYears = currentYear - startYear;

const infoItems = [
  {
    icon: "bx:award",
    title: "experience",
    subtitle: `About ${experienceYears} year${
      experienceYears !== 1 ? "s" : ""
    }`,
  },
  {
    icon: "bx:briefcase-alt",
    title: "completed",
    subtitle: "4+ Projects",
  },
  // {
  //   icon: "bx:support",
  //   title: "Support",
  //   subtitle: (
  //     <>
  //       Weekdays:
  //       <br />
  //       9AM - 9PM
  //       <br />
  //       (Kyiv timezone)
  //     </>
  //   ),
  // },
];

export default function Info() {
  const { t } = useTranslation();
  return (
    <div className="about__info grid">
      {infoItems.map((item, index) => (
        <div className="about__box" key={index}>
          <Icon icon={item.icon} className="about__icon" />
          <h3 className="about__title">{t(`about.info.${item.title}`)}</h3>
          <span className="about__subtitle">{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
}
