import { useState } from "react";

const ListComponent = () => {
  const [input, setInput] = useState([""]);
  const [item, setItem] = useState(["First Element"]);

  const onClickHandler = (input) => {
    const newElement = "new element";
    const updatedElement = [...item, input];
    setItem(updatedElement);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <>
      <input onChange={onChangeHandler} value={input} />
      <ul>
        {item.map((element, index) => (
          <li>
            {element} {index}
          </li>
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add new element</button>
    </>
  );
};

export default ListComponent;
