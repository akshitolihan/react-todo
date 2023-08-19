import { AiFillDelete, AiFillEdit } from "react-icons/ai";

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

const ShowTodo: React.FC<Props> = ({ todos, setTodos, setEditTodo, setId }) => {
  const handleDelete = (id: number) => {
    const newData = todos.filter(
      (_todo: string, index: number) => id !== index
    );
    setTodos(newData);
    localStorage.setItem("tasks", JSON.stringify(newData));
  };
  const handleUpdate = (id: number) => {
    setEditTodo(todos.find((_todo: string, index: number) => index === id));
    setId(id);
  };
  return (
    <>
      <main className="max-w-xl mx-auto"></main>
      <section className="flex flex-col justify-center max-w-[400px] w-full  mx-auto ">
        {todos.length > 0 &&
          todos.slice(0, todos.length).map((ele: string, index: number) => (
            <section key={index} className="flex justify-between gap-5 border-blue-400 border-[2.5px] rounded p-4 m-4 shadow-xl">
              <h1 className="font-[500] text-base text-gray-700 max-w-[300px] w-full text-justify">
                {ele}
              </h1>
              <section className="flex gap-2">
                <button
                  className="bg-blue-400 text-white font-bold rounded-full  p-[5px] self-center"
                  onClick={() => handleUpdate(index)}
                >
                  <AiFillEdit />
                </button>
                <button
                  className="bg-blue-400 text-white font-bold rounded-full p-[5px] self-center"
                  onClick={() => handleDelete(index)}
                >
                  <AiFillDelete />
                </button>
              </section>
            </section>
          ))}
        {todos.length < 1 && (
          <h1 className="font-[500] text-base text-gray-700 text-center">
            No Task Yet
          </h1>
        )}
      </section>
    </>
  );
};

export default ShowTodo;
