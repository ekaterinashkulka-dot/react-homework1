import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount(count + 1);
  };

  const onClickDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const onClickReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onClickHandler}>add</button>
      <button onClick={onClickDecrement}>minus</button>
      <button onClick={onClickReset}>reset</button>
    </>
  );
};

export default Counter;
