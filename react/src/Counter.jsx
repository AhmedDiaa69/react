import { useState } from "react";

function Counter() {
  let styles = { fontSize: "7rem" };

  let [num, setNum] = useState(0);

  const up = () => {
    setNum(num => num + 1);
  };

  const down = () => {
    setNum(num => num - 1);
  };

  const reset = () => {
    setNum(num => num = 0);
  };

  return (
    <>
      <p style={styles}>
        {num}
      </p>
      <button onClick={up}>up</button>
      <button onClick={down}>down</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Counter;
