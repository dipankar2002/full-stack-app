import React from "react";
import { useRecoilState } from "recoil";
import { createTodoCard } from "../atoms/atom";

export default function CreateTodoCard() {
  const [isOpencreateTodoCard, setIsOpencreateTodoCard] =
    useRecoilState(createTodoCard);
  return (
    <div
      onClick={() => {
        setIsOpencreateTodoCard(!isOpencreateTodoCard);
      }}
      className="absolute w-[98%] h-[96%]"
    >
      <div className="absolute inset-0 -m-4 blur-2xl bg-white opacity-20 -z-10 rounded-lg"></div>
      <div className="w-[30%] bg-neutral-900 grid mx-auto mt-[7%] p-5 rounded-[10px] shadow-xl">
        <input
          type="name"
          placeholder="Task name"
          className="focus:outline-none rounded-t-[10px] bg-transparent text-white placeholder-gray-400 text-[140%] font-medium"
        />
        <input
          type="name"
          placeholder="Description"
          className="focus:outline-none bg-transparent bg-transparent text-white placeholder-gray text-[100%]"
        />
        <div className="flex justify-between items-center">
          <select className="px-3 py-1 bg-transparent text-white ">
            <option value="" disabled selected>
              Select tag
            </option>
          </select>
          <button className="bg-blue-200 px-4 py-2 rounded-[10px] font-bold">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
