"use client";
import React, { useState } from "react";

type AuthState = {
  name: string;
  password: string;
};

const Form: React.FC = () => {
  const [auth, setAuth] = useState<AuthState>({
    name: "",
    password: "",
  });

  const handleAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuth((prev) => ({ ...prev, [name]: value }));
  };

  const submitData = () => {
    console.log(auth);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="write name"
          onChange={handleAuth}
        />
        <input
          type="password"
          name="password"
          placeholder="write pass"
          onChange={handleAuth}
        />
        <button onClick={submitData}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
