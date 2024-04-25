import React from "react";
import UseCustom from "./UseCustom";

function CounterOne() {
  const [count, increment, decrement, Reset] = UseCustom(3, 1);

  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
