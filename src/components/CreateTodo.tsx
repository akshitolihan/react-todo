import React, { useEffect, useRef } from "react";
interface Props {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
  editTodo: string | undefined;
  setEditTodo: React.Dispatch<React.SetStateAction<string | undefined>>;
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
}
const CreateTodo: React.FC<Props> = ({
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  inputVal,
  setInputVal,
  id,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
    console.log(editTodo);
    if (inputVal.length > 0) {
      if (!editTodo) {
        setTodos([...todos, inputVal]);
        setInputVal("");
        localStorage.setItem("tasks", JSON.stringify([...todos, inputVal]));
        console.log("I am here");
      } else {
        const newTodo = todos.map((todo, index) =>
          index === id ? inputVal : todo
        );
        console.log(newTodo);
        setTodos(newTodo);
        setEditTodo("");
        setInputVal("");
        localStorage.setItem("tasks", JSON.stringify(newTodo));
      }
    }
  };

  useEffect(() => {
    if (editTodo) {
      console.log("Edit todo ", editTodo);
      if (inputRef.current) {
        inputRef.current.focus();
      }
      setInputVal(editTodo);
    } else setInputVal("");
    // localStorage.setItem("tasks", JSON.stringify(todos));
  }, [setInputVal, editTodo]);

  return (
    <>
      <section className="flex flex-col w-fit p-2 m-4 max-w-4xl mx-auto">
        <h1 className="text-center m-4 text-2xl font-extrabold">Add Task</h1>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            ref = {inputRef}
            name="todoContent"
            value={inputVal}
            type="text"
            onChange={handleChange}
            className="border-b-[3px] border-b-green-400 outline-0 px-2 font-[500] text-base md:w-[400px]"
          />
          <button
            onClick={handleSubmit}
            className="bg-green-400 text-white font-bold rounded-xl p-2 py-1"
          >
            {editTodo ? "Edit" : "Add"}
          </button>
        </form>
      </section>
    </>
  );
};

export default CreateTodo;
