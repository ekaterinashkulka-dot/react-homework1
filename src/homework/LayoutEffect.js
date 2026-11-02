import { useState } from "react";
import { useLayoutEffect } from "react";

const Layout = () => {
  const [paragraph, setParagraph] = useState([]);

  useLayoutEffect(() => {
    console.log("Кшлькість абзаців: ", paragraph.length);
  }, [paragraph]);

  const addParagraph = () => {
    setParagraph([...paragraph, "Новий абзац"]);
  };

  return (
    <>
      <button onClick={addParagraph}>Додати</button>
      {paragraph.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </>
  );
};

export default Layout;
