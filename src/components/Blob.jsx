import { useEffect, useState } from "react";

export function Blob() {
  const [position, setPosition] = useState({ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` });

  useEffect(() => {
    const moveBlob = () => {
      setPosition({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      });
    };

    const interval = setInterval(moveBlob, 1000 * 1000);
    moveBlob();

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute w-60 h-60 bg-primary opacity-30 rounded-full filter blur-3xl "
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
        transition: "top 10s ease, left 10s ease",
      }}
    />
  );
}
