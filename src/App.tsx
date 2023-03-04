import React, { useState } from "react";
import "./App.css";

interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: value,
        complete: false,
      },
    ]);
  };

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          name=""
          id=""
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

export default App;
