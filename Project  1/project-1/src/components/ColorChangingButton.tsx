"use client";

import { useState } from 'react';

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33B8"];

export default function ColorChangingButton() {

  const [color, setColor] = useState("#FF5733");

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <button
    onClick={changeColor}
    style={{ backgroundColor: color, padding: "10px 20px", border: "none", color: "#fff", cursor: "pointer", fontSize: "16px" }}
    >
      Click to Change Color
    </button>
  );
}