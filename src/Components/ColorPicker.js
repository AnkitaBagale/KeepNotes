import { useState } from "react";
import "./colorPickerStyles.css";

const colorsInArray = [
  "#FFFFFF",
  "#f28983",
  "#fbbc04",
  "#FFF475",
  "#CCFF90",
  "#A7FFEB",
  "#CBF0F8",
  "#AECBFA",
  "#D7AEFB",
  "#FDCFE8",
  "#E6C9A8",
  "#E8EAED"
];

export function ColorPicker({ setNotecolor, notecolor, colorChangeHandler }) {
  const [isHidden, setHidden] = useState(true);
  return (
    <>
      <div
        onMouseOver={() => {
          setHidden(!isHidden);
        }}
        onMouseOut={() => {
          setHidden(!isHidden);
        }}
        className="palette"
      >
        <i className="fas fa-palette"></i>

        <div
          className="colorPaletteContainer boxShadow"
          style={{ display: isHidden ? "none" : "grid" }}
        >
          {colorsInArray.map((color) => {
            return (
              <div
                key={color}
                className="colorPalette"
                style={{
                  backgroundColor: color,
                  border: `2px solid ${
                    color === notecolor
                      ? "var(--primary-color)"
                      : "var(--lightGray-color)"
                  }`
                }}
                onClick={() => {
                  colorChangeHandler(color);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
