import { useState } from "react";

const CounterComponents = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment me</button>
      <button onClick={decrement}>Decrement me</button>
    </div>
  );
};

export default CounterComponents;
