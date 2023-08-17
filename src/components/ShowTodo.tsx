
interface Props{
  todos :string[],
  setTodos:React.Dispatch<React.SetStateAction<string[]>>,
  editTodo:string | undefined,
  setEditTodo:React.Dispatch<React.SetStateAction<string | undefined>>;
  inputVal:string,
  setInputVal:React.Dispatch<React.SetStateAction<string>>,
  id:number,
  setId:React.Dispatch<React.SetStateAction<number>>,
}

const ShowTodo : React.FC<Props> = ({todos, setTodos, setEditTodo, setId})=>{
  const handleDelete = (id:number) => {
    setTodos(todos.filter((_todo:string, index:number) => id !== index - 1));
  };
  const handleUpdate = (id: number) => {
    setEditTodo(todos.find((_todo:string, index:number) => index - 1 === id))
    setId(id);
  };
  return (
    <>
    <main className="mx-auto max-w-4xl"></main>
      <section className="flex flex-col p-2 m-4 justify-center">
        {todos.length > 1 &&
          todos.slice(1, todos.length).map((ele: string, index: number) => (
            <section
              key={index}
              className="flex justify-between mx-auto max-w-xl gap-4 md:min-w-[400px] w-full shadow-xl my-4 p-2 border-b-[3px] border-green-400"
            >
              <h1 className="font-[500] text-base text-gray-700">{ele}</h1>
              <section className="flex gap-2">
                <button
                  className="bg-green-400 text-white font-bold rounded-xl p-2 py-1 self-center"
                  onClick={() =>
                    handleDelete(index)
                  }
                >
                  Delete
                </button>
                <button
                  className="bg-green-400 text-white font-bold rounded-xl p-2 py-1 self-center"
                  onClick={()=>handleUpdate(index)}
                >
                  Edit
                </button>
              </section>
            </section>
          ))}
        {todos.length <= 1 && (
          <h1 className="font-[500] text-base text-gray-700 text-center">No Task Yet</h1>
        )}
      </section>
    </>
  );
};

export default ShowTodo;
