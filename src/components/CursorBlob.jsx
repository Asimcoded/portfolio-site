import { useEffect, useState } from "react";

export default function CursorBlob() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
      <div
        className="fixed w-48 h-48 bg-primary opacity-30 rounded-full filter blur-3xl pointer-events-none transition-transform duration-300"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
  );
}
