import { useState } from "react";
import { Icon } from "@iconify/react";
import "./services.css";
import { useTranslation } from "react-i18next";

interface Service {
  icon: string;
  category: string;
}

const services: Service[] = [
  {
    icon: "uil:web-grid",
    category: "app",
  },
  {
    icon: "uil:server-network",
    category: "api",
  },
  {
    icon: "uil:database",
    category: "db",
  },
];

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const { t } = useTranslation();
  console.log(t(`services.${service.category}.title`));
  return (
    <div
      className={isOpen ? "services__modal active-modal" : "services__modal"}
    >
      <div className="services__modal-content">
        <Icon
          icon="uil:times"
          className="services__modal-close"
          onClick={onClose}
        />
        <h3 className="services__modal-title">
          {t(`services.${service.category}.title`)}
        </h3>
        <p className="services__modal-subtitle">
          {t(`services.${service.category}.subtitle`)}
        </p>
        <ul className="services__modal-services grid">
          {(
            t(`services.${service.category}.details`, {
              returnObjects: true,
            }) as string[]
          ).map((detail, index) => (
            <li className="services__modal-service" key={index}>
              <Icon icon="uil:check-circle" className="services__modal-icon" />
              <p className="services__modal-info">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const toggleModal = (index: number | null) => {
    setActiveModal(index === activeModal ? null : index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{t("services.title")}</h2>
      <span className="section__subtitle">{t("services.subtitle")}</span>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <Icon icon={service.icon} className="services__icon" />
              <h3 className="services__title">
                {t(`services.${service.category}.title`)}
              </h3>
            </div>

            <span
              className="services__button"
              onClick={() => toggleModal(index)}
            >
              {t("services.viewBtn")}
              <Icon icon="uil:arrow-right" className="services__button-icon" />
            </span>

            <ServiceModal
              service={service}
              isOpen={activeModal === index}
              onClose={() => toggleModal(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
