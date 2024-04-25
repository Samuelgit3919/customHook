import React, { useState } from "react";

function UseCustom(initialValue = 0, value) {
  const [count, setCount] = useState(initialValue);
  function increment() {
    setCount((prevCount) => prevCount + value);
  }
  function decrement() {
    setCount((prevCount) => prevCount - value);
  }
  function Reset() {
    setCount(initialValue);
  }
  return [count, increment, decrement, Reset];
}

export default UseCustom;
