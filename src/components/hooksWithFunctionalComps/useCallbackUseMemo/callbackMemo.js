import React, { useState, useMemo } from "react";

import Child1 from "./child1";

const users1 = [
  { id: "a1", name: "Sreeja_1" },
  { id: "b1", name: "Pilli_1" },
  { id: "c1", name: "Minny_1" },
];

const users2 = [
  { id: "a2", name: "Sreeja_2" },
  { id: "b2", name: "Pilli_2" },
  { id: "c2", name: "Minny_2" },
];

const users3 = [
  { id: "a3", name: "Sreeja_3" },
  { id: "b3", name: "Pilli_3" },
  { id: "c3", name: "Minny_3" },
];

const App = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");

  console.log("rendering the app");

  const handleText1 = (event) => {
    setText1(event.target.value);
  };

  const handleText2 = (event) => {
    setText2(event.target.value);
  };

  const handleText3 = (event) => {
    setText3(event.target.value);
  };

  const handleSearch1 = () => {
    setSearch1(text1);
  };

  const handleSearch2 = () => {
    setSearch2(text2);
  };

  const handleSearch3 = () => {
    setSearch3(text3);
  };

  const filteredUsers1 = useMemo(
    () =>
      users1.filter((user) => {
        console.log("Child 1");
        return user.name.toLowerCase().includes(search1.toLowerCase());
      }),
    [search1]
  );

  const filteredUsers2 = users2.filter((user) => {
    console.log("Child 2");
    return user.name.toLowerCase().includes(search2.toLowerCase());
  });

  const filteredUsers3 = useMemo(
    () =>
      users3.filter((user) => {
        console.log("Child 3");
        return user.name.toLowerCase().includes(search1.toLowerCase());
      }),
    [search3]
  );

  return (
    <div>
      <input type="text" value={text1} onChange={handleText1} />
      <button type="button" onClick={handleSearch1}>
        Search
      </button>
      <Child1 list={filteredUsers1} />
      <input type="text" value={text2} onChange={handleText2} />
      <button type="button" onClick={handleSearch2}>
        Search
      </button>
      <Child1 list={filteredUsers2}/>
      <input type="text" value={text3} onChange={handleText3} />
      <button type="button" onClick={handleSearch3}>
        Search
      </button>
      <Child1 list={filteredUsers3}/>
    </div>
  );
};

export default App;
