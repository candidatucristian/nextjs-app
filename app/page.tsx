import React from "react";
import Image from "next/image";
import IncrementBtn from "./components/IncrementBtn";
import Form from "./components/Form";

export const metadata = {
  title: "Homepage - Testing sandbox",
};

const page = () => {
  return (
    <div>
      <button>Click Me</button>
      <Image alt="nextjslogo" src="./next.svg" width={180} height={100} />
      <IncrementBtn />
      <Form />
    </div>
  );
};

export default page;
