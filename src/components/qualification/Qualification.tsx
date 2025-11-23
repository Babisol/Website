import { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import "./qualification.css";
import { useTranslation } from "react-i18next";

interface QualificationData {
  title: string;
  subtitle: string;
  calendar: string;
}

interface QualificationSectionProps {
  data: QualificationData[];
}

function QualificationSection({ data }: QualificationSectionProps) {
  return (
    <>
      {data.map((item, index) => (
        <div className="qualification__data" key={item.title + index}>
          {index % 2 === 0 && (
            <>
              <div />
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </>
          )}

          <div>
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calendar">
              <Icon icon="uil:calendar-alt" />
              {item.calendar}
            </div>
          </div>

          {index % 2 !== 0 && (
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default function Qualification() {
  const [toggleState, setToggleState] = useState<number>(1);
  const { t } = useTranslation();

  const educationData = t("qualification.educationItems", {
    returnObjects: true,
  }) as QualificationData[];

  const experienceData = t("qualification.experienceItems", {
    returnObjects: true,
  }) as QualificationData[];

  function toggleTab(index: number) {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">{t("qualification.title")}</h2>
      <span className="section__subtitle">{t("qualification.subtitle")}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleTab(1)}
            className={clsx("qualification__button button--flex", {
              qualification__active: toggleState === 1,
            })}
          >
            <Icon icon="uil:graduation-cap" className="qualification__icon" />
            {t("qualification.education")}
          </div>

          <div
            onClick={() => toggleTab(2)}
            className={clsx("qualification__button button--flex", {
              qualification__active: toggleState === 2,
            })}
          >
            <Icon icon="uil:briefcase-alt" className="qualification__icon" />
            {t("qualification.experience")}
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={clsx("qualification__content", {
              "qualification__content-active": toggleState === 1,
            })}
          >
            <QualificationSection data={educationData} />
          </div>

          <div
            className={clsx("qualification__content", {
              "qualification__content-active": toggleState === 2,
            })}
          >
            <QualificationSection data={experienceData} />
          </div>
        </div>
      </div>
    </section>
  );
}
