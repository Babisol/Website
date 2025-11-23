import { Icon } from "@iconify/react";

interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/babak-soleymani-a471311b0",
    icon: "uil:linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/babak.gs",
    icon: "uil:instagram",
    label: "Instagram",
  },
  {
    href: "https://github.com/babisol",
    icon: "uil:github-alt",
    label: "GitHub",
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
