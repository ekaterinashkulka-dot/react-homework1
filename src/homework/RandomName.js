import { useState } from "react";

const Random = () => {
  const names = ["Anna", "Kate", "Max", "Ivan", "Sofia"];

  const [name, setName] = useState("");

  const randomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  };

  return (
    <>
      <h1>Hello, {name}</h1>
      <button onClick={randomName}>Random name</button>
    </>
  );
};

export default Random;
