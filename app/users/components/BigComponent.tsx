import React from "react";

const BigComponent = () => {
  for (let i = 0; i < 10000; i++) {
    console.log("salut");
  }
  return (
    <div>
      <h1>Big compo</h1>
    </div>
  );
};

export default BigComponent;
