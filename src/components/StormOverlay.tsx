import { useEffect, useMemo, useState } from "react";

const STORM_CONFIG = {
  drops: 180, // how many raindrops
  minDuration: 0.7, // min fall time (seconds)
  maxDuration: 1.5, // max fall time
  minDelay: 0, // min start delay
  maxDelay: 1.2, // max start delay

  lightningMinDelay: 2500, // min time between flashes (ms)
  lightningMaxDelay: 7000, // max time between flashes (ms)
  lightningFlashDuration: 120, // how long each flash lasts (ms)
};

type Drop = {
  id: number;
  left: number; // vw
  duration: number;
  delay: number;
  opacity: number;
  height: number; // px
};

export default function StormOverlay() {
  const [flash, setFlash] = useState(false);
  const [boltId, setBoltId] = useState(0); // used to retrigger bolt animation

  // Create raindrops once
  const drops = useMemo<Drop[]>(() => {
    const arr: Drop[] = [];
    for (let i = 0; i < STORM_CONFIG.drops; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        duration:
          STORM_CONFIG.minDuration +
          Math.random() * (STORM_CONFIG.maxDuration - STORM_CONFIG.minDuration),
        delay:
          STORM_CONFIG.minDelay +
          Math.random() * (STORM_CONFIG.maxDelay - STORM_CONFIG.minDelay),
        opacity: 0.25 + Math.random() * 0.5,
        height: 40 + Math.random() * 80,
      });
    }
    return arr;
  }, []);

  // Lightning scheduler
  useEffect(() => {
    let timeoutId: number;

    const scheduleFlash = () => {
      const delay =
        STORM_CONFIG.lightningMinDelay +
        Math.random() *
          (STORM_CONFIG.lightningMaxDelay - STORM_CONFIG.lightningMinDelay);

      timeoutId = window.setTimeout(() => {
        setFlash(true);
        setBoltId(Date.now()); // new key to retrigger CSS animation

        window.setTimeout(
          () => setFlash(false),
          STORM_CONFIG.lightningFlashDuration
        );

        scheduleFlash();
      }, delay);
    };

    scheduleFlash();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="storm-overlay">
      {/* Rain */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="storm-raindrop"
          style={{
            left: `${drop.left}vw`,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
            opacity: drop.opacity,
            height: `${drop.height}px`,
          }}
        />
      ))}

      {/* Lightning flash wash over screen */}
      <div
        className="storm-lightning-flash"
        style={{ opacity: flash ? 1 : 0 }}
      />

      {/* Diagonal lightning bolt from top-right to bottom-left */}
      {flash && <div key={boltId} className="storm-bolt" />}
    </div>
  );
}
