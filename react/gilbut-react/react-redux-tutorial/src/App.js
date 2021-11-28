import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContaier from "./containers/TodosContaier";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContaier />
    </div>
  );
};

export default App;
