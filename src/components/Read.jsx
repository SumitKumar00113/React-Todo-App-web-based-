import React, { useContext } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../context/Wrapper";

const Read = () => {
  const [todo, settodo] = useContext(todoContext);
  const DeleteHandler = (id) => {
    const todofilter = todo.filter((todo) => todo.id != id);
    settodo(todofilter);
    toast.error("Task Deleted");
  };
  const renderTodos = todo.map(function (todo) {
    return (
      <li
        key={todo.id}
        className="p-5 mb-4 bg-gray-900 rounded flex items-center justify-between "
      >
        <span className="text-2xl font-thin">{todo.title} </span>
        <button
          className=" font-thin text-xl text-red-400 hover:opacity-70 cursor-pointer"
          onClick={() => DeleteHandler(todo.id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="w-[45%] p-15">
        <h1 className=" text-6xl font-thin mb-10">
          <span className="text-emerald-400">Pending</span> Todo
        </h1>
        <ol className=" text-2xl  ">{renderTodos}</ol> <br />
      </div>
    </>
  );
};

export default Read;
