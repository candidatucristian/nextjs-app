"use client";
import React, { useState, useEffect } from "react";

const IncrementBtn = () => {
  const [increment, setIncrement] = useState(0);

  const incrementFn = () => {
    setIncrement((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={incrementFn}>Click</button>
      {increment}
    </div>
  );
};

export default IncrementBtn;
