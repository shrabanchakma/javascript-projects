import { useState } from "react";

export default function ColorGenerator() {
  const [color, setColor] = useState("#000000");
  function generateColor() {
    const newColor = "#" + Math.floor(Math.random() * (256 * 3));
  }
  return (
    <div
      style={{
        minWidth: "100vw",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <button
          style={{
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "1.5rem",
            fontWeight: "600",
          }}
          onClick={generateColor}
        >
          Generate Color
        </button>
      </div>
    </div>
  );
}
