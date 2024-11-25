"use client";

import { useState } from "react";

export function Clicker() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <p>{"//"}client component</p>
      <button onClick={handleClick}>Click Me</button>
      <p onClick={resetCount}>Count:{count}</p>
      <p>{"//"}client component</p>
    </div>
  );
}
