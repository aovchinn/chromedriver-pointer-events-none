import { useState } from "react";
import "./styles.css";

const ColorElement = (props) => {
  const [color, setColor] = useState("white");
  const toggleColor = (e) => {
    e.target.scrollIntoView({
      // behavior: "smooth",
      // block: "nearest",
      // inline: "end"
    });
    if (color === "white") {
      setColor("#4c4d4f");
    } else {
      setColor("white");
    }
  };

  return (
    <div
      className={"element " + props.className}
      style={{ color }}
      onClick={toggleColor}
    >
      {props.children}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="group">
          <ColorElement className="first">hi</ColorElement>
          <ColorElement>bye</ColorElement>
        </div>
      </div>
    </div>
  );
}
