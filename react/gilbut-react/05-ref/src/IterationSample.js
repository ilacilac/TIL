import React, { useRef, useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    const { value } = e.target;
    setInputText(value);
  };

  const onClick = () => {
    // setNames([...names, { text: inputText, id: nextId }]);
    const nextNames = names.concat({ text: inputText, id: nextId });
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => id !== name.id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>등록</button>
      <hr />
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
