import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from "../context/ThemeContext";

export default function BackgroundParticles() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="background-particles"
      init={particlesInit}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: "transparent",
        },
        fpsLimit: 45,
        detectRetina: true,
        particles: {
          number: {
            // turn them off in light mode
            value: isDark ? 80 : 0,
            density: {
              enable: true,
              area: 900,
            },
          },
          color: {
            // warm, Persian carpet palette
            value: ["#f5d7a1", "#d89a4a", "#b85a3d", "#7a2f2f"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: {
              enable: true,
              minimumValue: 0.15,
            },
            animation: {
              enable: true,
              speed: 0.25,
              minimumValue: 0.15,
              sync: false,
            },
          },
          size: {
            value: 2.5,
            random: {
              enable: true,
              minimumValue: 1.1,
            },
            animation: {
              enable: false,
            },
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.2, // very slow, just drifting
            direction: "top-left",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
            resize: true,
          },
        },
      }}
    />
  );
}
export function CarpetTexture() {
  return <div className="carpet-texture" />;
}
