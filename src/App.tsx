import { Route, Routes } from "react-router-dom";
import CreateTodo from "./components/CreateTodo";
import Home from "./pages/Home";
import User from "./pages/User";
import { useEffect, useState } from "react";
import ShowTodo from "./components/ShowTodo";

const App: React.FC = () => {
  const [editTodo, setEditTodo] = useState<string | undefined>("");
  const [todos, setTodos] = useState<string[]>([""]);
  const [inputVal, setInputVal] = useState<string>("");
  const [id, setId] = useState<number>(-1);
  useEffect(() => {
    const storedCount = localStorage.getItem("tasks");
    if (storedCount) {
      setTodos(JSON.parse(storedCount));
    }
  }, []);

  return (
    <>
      <CreateTodo
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        inputVal={inputVal}
        setInputVal={setInputVal}
        id={id}
        setId={setId}
      />
      <ShowTodo
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        inputVal={inputVal}
        setInputVal={setInputVal}
        id={id}
        setId={setId}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
};
export default App;
