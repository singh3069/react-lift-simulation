import "./App.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

function App() {
  const [floorNumberByUserInput, setFloorNumberByUserInput] = useState([]);
  const [generatedFloors, setGeneratedFloors] = useState([]);
  const inputRef = useRef(null);
  const generateFloor = () => {
    if (inputRef.current.value === "") {
      alert("Please enter a number");
    }
    if (inputRef.current.value <= 0) {
      alert("These lifts don't go down");
    }
    setFloorNumberByUserInput(inputRef.current.value);
  };

  useEffect(() => {
    setGeneratedFloors(
      Array.from({ length: floorNumberByUserInput }, (_, index) => index + 1)
    );
  }, [floorNumberByUserInput]);

  return (
    <div className="App">
      <header className="">hello lift </header>
      <input type="number" ref={inputRef} />

      <button onClick={generateFloor}>add floor</button>
      {generatedFloors
        .map((floor, index) => {
          return (
            <div key={index}>
              <p
                style={{
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                floor{index + 1}
              </p>
            </div>
          );
        })
        .reverse()}
    </div>
  );
}

export default App;
