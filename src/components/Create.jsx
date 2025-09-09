import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todoContext } from "../context/Wrapper";

const Create = () => {
  const [todo, settodo] = useContext(todoContext);

  const [chekbox, setChekbox] = useState(false);
  const [selectOption, setselectOption] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.iscompleted = false;
    data.id = nanoid();
    const copytodo = [...todo];
    copytodo.push(data);
    settodo(copytodo);
    toast.success("Task Added");
    reset();
  };

  return (
    <>
      <div className="w-[60%] p-15">
        <h1 className="text-6xl font-thin mb-10">
          Set <span className="text-red-400"> Reminders </span>For <br />
          Task
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input
            {...register("title", { required: "title can't be empty" })}
            className="p-2 border-b outline-0 w-full text-2xl"
            type="text"
            placeholder="title"
          />
          {errors && errors.title && errors.title.message && (
            <small className="text-red-400 font-thin leading-9 tracking-wide">
              {errors.title.message}
            </small>
          )}
          <br /> <br />
          <input
            onChange={(event) => setChekbox(event.target.checked)}
            id="checkbox"
            className="scale-150 "
            type="checkbox"
          />
          <label htmlFor="checkbox" className="text-xl px-2">
            Completed
          </label>
          <br />
          <br />
          <button className="px-10 py-2 border rounded mt-5 active:scale-105 ">
            Create Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
