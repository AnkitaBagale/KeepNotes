import { useState } from "react";
import "./colorPickerStyles.css";
import { colorsInArray } from "../Context";

export function ColorPicker({ note, colorPickedHandler }) {
  const [isHidden, setHidden] = useState(true);

  const colorPickedHandlerWrapper = (color) => {
    colorPickedHandler(color);
  };

  const hideOrShowPalleteHandler = () => {
    setHidden(!isHidden);
  };
  return (
    <>
      <div
        onMouseOver={hideOrShowPalleteHandler}
        onMouseOut={hideOrShowPalleteHandler}
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
                    color === note.notecolor
                      ? "var(--primary-color)"
                      : "var(--lightGray-color)"
                  }`
                }}
                onClick={() => colorPickedHandlerWrapper(color)}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
