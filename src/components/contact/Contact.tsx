import { useState, ChangeEvent, FormEvent } from "react";
import { Icon } from "@iconify/react";
// import emailjs from "emailjs-com";
import "./contact.css";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface ContactCardProps {
  icon: string;
  title: string;
  href: string;
}

const ContactCard = ({ icon, title, href }: ContactCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="contact__card">
      <Icon icon={icon} className="contact__card-icon" />
      <h3 className="contact__card-title">{title}</h3>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="contact__button"
      >
        {t("contacts.write")}
        <Icon icon="bx:bx-right-arrow-alt" className="contact__button-icon" />
      </a>
    </div>
  );
};
const contactCards = [
  {
    icon: "bxl:gmail",
    title: "Email",
    href: "mailto:vladbuldenko@gmail.com",
  },
  {
    icon: "bxl:telegram",
    title: "Telegram",
    href: "https://t.me/waldeviron",
  },
  {
    icon: "bxl:facebook",
    title: "Facebook",
    href: "https://www.facebook.com/vladbuldenko/",
  },
];

interface FormData {
  name: string;
  email: string;
  proposal: string;
}

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    proposal: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email } = formData;

    if (!validateEmail(email)) {
      setErrors({ email: t("contacts.invalid_email") });
      return;
    }

    setErrors({
      feature: t("contacts.not_implemented"),
    });

    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     e.target as HTMLFormElement,
    //     "YOUR_USER_ID"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       alert("Email sent successfully!");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       alert("Failed to send email. Please try again later.");
    //     }
    //   );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{t("contacts.title")}</h2>
      <span className="section__subtitle">{t("contacts.subtitle")}</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{t("contacts.talk_to_me")}</h3>
          <div className="contact__info">
            {contactCards.map((card) => (
              <ContactCard key={card.href} {...card} />
            ))}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">{t("contacts.write_proposal")}</h3>
          <form className="contact__form" onSubmit={handleSubmit}>
            {["name", "email", "proposal"].map((field) => (
              <div
                key={field}
                className={clsx("contact__form-div", {
                  "contact__form-area": field === "proposal",
                })}
              >
                <label htmlFor={field} className="contact__form-tag">
                  {field}
                </label>
                {field === "proposal" ? (
                  <textarea
                    id={field}
                    name={field}
                    className="contact__form-input"
                    placeholder={t("contacts.insert_proposal")}
                    cols={30}
                    rows={10}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    className="contact__form-input"
                    placeholder={t(`contacts.insert_${field}`)}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                  />
                )}
                {field === "email" && errors.email && (
                  <span className="contact__form-error">{errors.email}</span>
                )}
              </div>
            ))}
            <button type="submit" className="button button--flex">
              {t("contacts.send_message")}
            </button>
          </form>
          {errors.feature && (
            <span className="contact__form-error">{errors.feature}</span>
          )}
        </div>
      </div>
    </section>
  );
}
