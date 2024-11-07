import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { createTodoCard, jwtTokenAtom, todosAtom } from "../atoms/atom";
import { useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";

export default function CreateTodoCard() {
  const jwtToken = useRecoilValue(jwtTokenAtom);
  const [isOpencreateTodoCard, setIsOpencreateTodoCard] =
    useRecoilState(createTodoCard);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    async function btnHandler() {
        try {
            const res = await axios.post("http://localhost:3000/user/createTodo",
                {
                    tag : tag,
                    title : title,
                    description : description,
                },
                {
                    headers : {
                        'Content-Type' : 'application/json',
                        Authorization : `Bearer ${jwtToken}`
                    },
                }
            )
            console.log(res.data.message);

            setIsOpencreateTodoCard(!isOpencreateTodoCard);
            window.location.reload();
        } catch (error) {
           console.error(error);
        }
    }

  return (
    <>
      {isOpencreateTodoCard && (
        <div className="absolute w-[98%] h-[96%]">
          <div className="absolute inset-0 -m-4 blur-2xl bg-white opacity-20 -z-10 rounded-lg"></div>
          <div className="w-[30%] bg-neutral-900 grid mx-auto mt-[7%] p-5 rounded-[10px] shadow-xl">
            <input
              type="name"
              placeholder="Task name"
              onChange={(e) => setTitle(e.target.value)}
              className="focus:outline-none rounded-t-[10px] bg-transparent text-white placeholder-gray-400 text-[140%] font-medium" required
            />
            <input
              type="name"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              className="focus:outline-none bg-transparent bg-transparent text-white placeholder-gray text-[100%]" required
            />
            <div className="flex justify-between items-center">
              <select onChange={(e) => setTag(e.target.value)} className="px-3 py-1 bg-gray-800 text-white " required>
                <option value="None">
                  None
                </option>
                <option value="Sports">
                  Sports
                </option>
                <option value="Education" >
                  Education
                </option>
                <option value="Work" >
                  Work
                </option>
                <option value="Cooking" >
                  Cooking
                </option>
              </select>
              <button onClick={btnHandler} className="bg-blue-200 px-4 py-2 rounded-[10px] font-bold">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
