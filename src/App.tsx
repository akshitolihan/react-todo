import { Route, Routes } from "react-router-dom";
import CreateTodo from "./components/CreateTodo";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import User from "./pages/User";
import { useEffect, useState } from "react";
import ShowTodo from "./components/ShowTodo";

export default function App() {
  const [editTodo, setEditTodo] = useState(null);
  const [todos, setTodos] = useState([""]);
  const [inputVal, setInputVal] = useState("");
  const [id, setId] = useState(null);

  useEffect(()=>{
    setTodos(todos);
  }, [todos, editTodo])
  return (
    <>
      {/* <Navbar /> */}
      <CreateTodo
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        inputVal={inputVal}
        setInputVal={setInputVal}
        id={id}
        setId = {setId}
      />
      <ShowTodo
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        inputVal={inputVal}
        setInputVal={setInputVal}
        id={id}
        setId = {setId}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}
