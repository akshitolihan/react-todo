import React, { useRef } from "react";

const ShowTodo = ({
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  inputVal,
  setInputVal,
  id,
  setId,
}) => {
  const inputRef = useRef(null);
  const handleDelete = (id) => {
    setTodos(todos.filter((todo, index) => id !== index - 1));
  };
  const handleUpdate = (id: number) => {
    const newTodo = todos.find((todo, index) => index - 1 === id);
    setEditTodo(newTodo);
    setId(id);
  };
  return (
    <>
      <main className="flex flex-col w-fit p-2 m-4 max-w-4xl mx-auto">
        {todos.length > 1 &&
          todos.slice(1, todos.length).map((ele: string, index: number) => (
            <section
              key={index}
              className="flex justify-between gap-4 min-w-[400px] max-w-min shadow-xl my-4 p-2 border-b-[3px] border-green-400"
            >
              <h1 className="font-[500] text-base text-gray-700">{ele}</h1>
              <section className="flex gap-2">
                <button
                  className="bg-green-400 text-white font-bold rounded-xl p-2 py-1 self-center"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                    handleDelete(index)
                  }
                >
                  Delete
                </button>
                <button
                  className="bg-green-400 text-white font-bold rounded-xl p-2 py-1 self-center"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                    handleUpdate(index)
                  }
                >
                  Edit
                </button>
              </section>
            </section>
          ))}
        {todos.length <= 1 && <h1 className="font-[500] text-base text-gray-700">No Task Yet</h1>}
      </main>
    </>
  );
};

export default ShowTodo;
