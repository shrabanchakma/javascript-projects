import { useState } from "react";

export default function ColorGenerator() {
  const [color, setColor] = useState("#000000");
  const [colorType, setColorType] = useState("");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function generateHexColor() {
    const hexValues = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    while (hexColor.length < 7)
      hexColor += hexValues[randomColorUtility(hexValues.length)];
    setColor(hexColor);
  }

  function hexToRGB(hex) {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    console.log(r, g, b);
    setColorType(`rgb(${r},${g},${b})`);
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{colorType}</h1>
        <button
          style={{
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "1.5rem",
            fontWeight: "600",
          }}
          onClick={generateHexColor}
        >
          Generate Hex Color
        </button>
        <button
          style={{
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "1.5rem",
            fontWeight: "600",
          }}
          onClick={() => hexToRGB(color)}
        >
          convert to rgb
        </button>
      </div>
    </div>
  );
}
