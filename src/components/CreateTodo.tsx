import React, { useEffect, useRef } from "react";
import { AiFillPlusCircle, AiFillEdit } from "react-icons/ai";

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
        const newTodos = [...todos.reverse(), inputVal].reverse();
        setTodos(newTodos);
        console.log(newTodos);
        setInputVal("");
        localStorage.setItem("tasks", JSON.stringify(newTodos));
        const storedCount = localStorage.getItem("tasks");
        if (storedCount) {
          setTodos(JSON.parse(storedCount));
        }
        console.log("I am here");
      } else {
        const newTodo = todos.map((todo, index) =>
          index === id - 1 ? inputVal : todo
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
  }, [setInputVal, editTodo]);

  return (
    <>
      <section className="flex flex-col w-fit p-2 m-4 max-w-4xl mx-auto">
        <h1 className="text-center m-4 text-2xl font-extrabold">Add Task</h1>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between gap-5 border-blue-400 border-[2.5px] rounded m-4 shadow-xl h-full"
        >
          <input
            ref={inputRef}
            name="todoContent"
            value={inputVal}
            type="text"
            placeholder="Add new task..."
            onChange={handleChange}
            contentEditable="true"
            className="flex m-4 border-b-blue-400 outline-0 px-2 font-[500] text-base md:w-[400px] p-4 min-h-[80px] break-normal break-words overflow-y-scroll"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-400 text-white font-bold rounded-full  p-[5px] self-center m-2"
          >
            {!editTodo ? <AiFillPlusCircle /> : <AiFillEdit />}
          </button>
        </form>
      </section>
    </>
  );
};

export default CreateTodo;
