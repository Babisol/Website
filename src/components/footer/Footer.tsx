import { Icon } from "@iconify/react";
import "./footer.css";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    href: "https://www.instagram.com/walderwin/",
    icon: "bxl:instagram",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/vladbuldenko",
    icon: "bxl:facebook",
    label: "Facebook",
  },
  { href: "https://github.com/vbuldenko", icon: "bxl:github", label: "GitHub" },
];

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Buldenko</h1>
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
