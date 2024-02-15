import { useEffect, useState } from "react";

export default function ColorGenerator() {
  const [color, setColor] = useState("#000000");
  const [colorType, setColorType] = useState("hex");

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

  function generateRandomRgb() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    colorType === "rgb" ? generateRandomRgb() : generateHexColor();
    console.log("hi");
  }, [colorType]);

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
        <h1>{color}</h1>
        <button
          style={{
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "1.5rem",
            fontWeight: "600",
          }}
          onClick={() => generateHexColor()}
        >
          Generate Color
        </button>
        <button
          style={{
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "1.5rem",
            fontWeight: "600",
          }}
          onClick={() => setColorType("hex")}
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
          onClick={() => setColorType("rgb")}
        >
          convert to rgb
        </button>
      </div>
    </div>
  );
}
