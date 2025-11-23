import type { CSSProperties } from "react";
import { useTheme } from "../context/ThemeContext";
import lightCarpet from "../assets/light-carpet.avif"; // <-- your uploaded image

export default function CarpetTexture() {
  const { theme } = useTheme();

  const baseStyle: CSSProperties = {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: -2,
  };

  // Light mode: use image + subtle gradients
  if (theme === "light") {
    return (
      <div
        className="carpet-texture"
        style={{
          ...baseStyle,
          backgroundImage: `
            url(${lightCarpet}),
            radial-gradient(circle at 8% 0%, rgba(255, 214, 170, 0.55), transparent 60%),
            radial-gradient(circle at 92% 8%, rgba(180, 80, 120, 0.45), transparent 60%),
            radial-gradient(circle at 0% 100%, rgba(120, 40, 40, 0.45), transparent 60%)
          `,
          backgroundSize: "cover, 120% 120%, 120% 120%, 120% 120%",
          backgroundPosition: "center, top left, top right, bottom left",
          backgroundRepeat: "no-repeat",
          filter: "saturate(0.95) contrast(1.05)",
          mixBlendMode: "soft-light",
          opacity: 0.9,
        }}
      />
    );
  }

  // Dark mode: let your existing CSS `.dark-mode .carpet-texture` handle it
  return <div className="carpet-texture" style={baseStyle} />;
}
