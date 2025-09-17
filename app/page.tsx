import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <h1>Home</h1>
      <Image alt="nextjslogo" src="./next.svg" width={180} height={100} />
    </div>
  );
};

export default page;
