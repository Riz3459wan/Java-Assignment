import { useState } from "react";
import "./App.css";
import Button from "./compnents/Button";

function App() {
  const [output, setOutput] = useState(0);
  const [sum, setSum] = useState(0);
  const [displaySum, setDisplaySum] = useState(0);
  const [time, setTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  function fiboStart() {
    if (isRunning) {
      return;
    }
    setIsRunning(true);
    setOutput("");
    setSum(0);
    setDisplaySum(0);

    let a = 0;
    let b = 1;
    let count = 0;
    let inteval = setInterval(() => {
      if (count === 0) {
        setOutput("0");
        a = 0;
        b = 1;
      } else if (count === 1) {
        setOutput((prev) => prev + ",1");
        setSum((prev) => prev + 1);
      } else {
        let next = a + b;
        setOutput((prev) => prev + "," + next);
        setSum((prev) => prev + next);
        a = b;
        b = next;
      }
      count++;
    }, 1000);
    setTime(inteval);
  }

  function fiboEnd() {
    clearInterval(time);
    setIsRunning(false);
    setDisplaySum(sum);
  }

  return (
    <>
      <input type="text" className="output" value={output} readOnly />
      <input type="text" value={displaySum} readOnly />
      <div>
        <Button btnName={"Start"} btnFunction={fiboStart} />
        <Button btnName={"End"} btnFunction={fiboEnd} />
      </div>
    </>
  );
}

export default App;
