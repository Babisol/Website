import { useEffect } from "react";

export default function CursorBlob() {
  useEffect(() => {
    const blob = document.querySelector<HTMLElement>(".cursor-blob");
    if (!blob) return;

    let targetX = window.innerWidth * 0.3;
    let targetY = window.innerHeight * 0.3;
    let x = targetX;
    let y = targetY;

    let targetScale = 1;
    let scale = 1;

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      targetScale = 1.3;
    };

    const leave = () => (targetScale = 0);
    const enter = () => (targetScale = 1);

    const animate = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      scale += (targetScale - scale) * 0.1;

      blob.style.left = `${x}px`;
      blob.style.top = `${y}px`;
      blob.style.transform = `translate(-50%, -50%) scale(${scale})`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseenter", enter);

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseenter", enter);
    };
  }, []);

  return <div className="cursor-blob" />;
}
