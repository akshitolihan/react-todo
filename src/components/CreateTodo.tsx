import React, { useEffect, useState } from "react";
import ShowTodo from "./ShowTodo";

const CreateTodo = ({
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  inputVal,
  setInputVal,
  id,
  setId,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editTodo);
    if (!editTodo) {
      setTodos([...todos, inputVal]);
      setInputVal("");
      console.log("I am here");
    } else {
      const newTodo = todos.map((todo, index) =>
        index-1 === id ? inputVal : todo
      );
      console.log(newTodo);
      setTodos(newTodo);
      setEditTodo("");
      setInputVal("");
    }
  };
  useEffect(() => {
    if (editTodo) {
      console.log("Edit todo ", editTodo);
      setInputVal(editTodo);
    } else setInputVal("");
  }, [setInputVal, editTodo]);
  return (
    <>
      
      <section className="flex flex-col w-fit p-2 m-4 max-w-4xl mx-auto" >
      <h1 className="text-center m-4 text-2xl font-extrabold">Add Task</h1>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            name="todoContent"
            value={inputVal}
            type="text"
            onChange={handleChange}
            className="border-b-[3px] border-b-green-400 outline-0 px-2 font-[500] text-base md:w-[400px]"
          />
          <button onClick={handleSubmit} className="bg-green-400 text-white font-bold rounded-xl p-2 py-1">
            {editTodo ? "Edit": "Add"}
          </button>
        </form>
      </section>
    </>
  );
};

export default CreateTodo;
