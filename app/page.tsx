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
      <h1>Home, and branch Feature</h1>
      <Image alt="nextjslogo" src="./next.svg" width={180} height={100} />
      <IncrementBtn />
      <Form />
    </div>
  );
};

export default page;
