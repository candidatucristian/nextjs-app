import React, { useState } from "react";

const Moddal = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1>{toggle ? "TOGGLE" : "No Toggle"}</h1>
      <button
        onClick={() => {
          setToggle(!toggle);
          console.log(toggle);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Moddal;
