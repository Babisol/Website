import { Icon } from "@iconify/react";

interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/vladyslav-buldenko-a94a181ab",
    icon: "uil:linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/walderwin",
    icon: "uil:instagram",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/vladbuldenko",
    icon: "uil:facebook-messenger-alt",
    label: "Facebook",
  },
  {
    href: "https://github.com/vbuldenko",
    icon: "uil:github-alt",
    label: "GitHub",
  },
  {
    href: "https://x.com/walderviron",
    icon: "uil:twitter-alt",
    label: "Twitter",
  },
  {
    href: "https://t.me/waldeviron",
    icon: "uil:telegram-alt",
    label: "Telegram",
  },
];

export default function Social() {
  return (
    <div className="home__social">
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <Icon icon={link.icon} />
        </a>
      ))}
    </div>
  );
}
