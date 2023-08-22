import { KeyboardEventHandler, useState } from "react";
import "./App.css";
import { genrateText } from "./helpers/generateText";
const paragraph = genrateText();
const regex = /^[a-z ]$/;

function App() {
  const [paraChars] = useState(paragraph.split(""));

  const [char, setChar] = useState<string[]>([]);
  console.log(char)
  const handleKeyPress: KeyboardEventHandler = (e) => {
    if (regex.test(e.key.toLowerCase()) && char.length< paraChars.length) {
      setChar((prev) => [...prev, e.key]);
      return;
    }
    if (e.key === "Backspace") {
      const typedChars = [...char];
      typedChars.splice(-1);
      setChar(typedChars)
    }
  };
  return (
    <>
      {paraChars.map((p, i) => (
        <span
          key={`${p}-${i}`}
          className="paragraph"
          style={{
            backgroundColor: !char[i]
              ? "#444"
              : char[i] === p
              ? "skyblue"
              : "red",
          }}
        >
          {p}
        </span>
      ))}
      <input
        className="paragrapgInput"
        onKeyDown={handleKeyPress}
        autoFocus={true}
      />
    </>
  );
}

export default App;
