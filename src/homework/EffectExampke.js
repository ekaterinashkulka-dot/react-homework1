import { useState } from "react";
import { useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  });

  const clickHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={clickHandler}>Click</button>
    </>
  );
};

export default Effect;
