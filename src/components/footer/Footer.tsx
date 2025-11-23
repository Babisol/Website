import { Icon } from "@iconify/react";
import "./footer.css";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    href: "https://www.instagram.com/babak.gs/",
    icon: "bxl:instagram",
    label: "Instagram",
  },
  
  { href: "https://github.com/babisol", icon: "bxl:github", label: "GitHub" },
];

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Babak Soleimani</h1>
        <ul className="footer__list">
          {["about", "portfolio"].map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="footer__link">
                {t(`header.${section}`)}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__social">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
