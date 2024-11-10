import React from 'react'
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentTodoIdAtom, jwtTokenAtom, todosAtom, todoTagAtom, updateTodoAtom } from '../atoms/atom';
import axios from 'axios';

export default function UpdateTodoCard() {
  const todos = useRecoilValue(todosAtom);
  const currentTodoId = useRecoilValue(currentTodoIdAtom);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const todoTag = useRecoilValue(todoTagAtom);
  const setUpdateCompo = useSetRecoilState(updateTodoAtom);
  const jwtToken = useRecoilValue(jwtTokenAtom);
  function todoDetails() {
    todos.find((value)=>{
      if(value.id===currentTodoId) {
        return value;
      } return null;
    })
  }
  async function updateBtn() {
    try {
      const res = await axios.put(`http://localhost:3000/user/updateTodo/${currentTodoId}`,
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

      setUpdateCompo((prev)=>!prev);
      window.location.reload();
  } catch (error) {
     console.error(error);
  }
  }
  return (
    <div className="absolute w-[98%] h-[96%]">
      <div className="absolute inset-0 -m-4 blur-2xl bg-white opacity-20 -z-10 rounded-lg"></div>
      <div className="w-[30%] bg-neutral-900 grid mx-auto mt-[7%] p-5 rounded-[10px] shadow-xl">
        <input type="name" 
          placeholder={`title`}
          onChange={(e) => setTitle(e.target.value)} 
          className="focus:outline-none rounded-t-[10px] bg-transparent text-white placeholder-gray-400 text-[140%] font-medium" required/>
        <input type="name" placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="focus:outline-none bg-transparent bg-transparent text-white placeholder-gray text-[100%]" required/>
        <div className="flex justify-between items-center">
          <select onChange={(e) => setTag(e.target.value)} className="px-3 py-1 bg-black text-white " required>
            {todoTag.map((val,index)=><option key={index} value={`${val.tag}`}>{val.tag}</option>)}
          </select>
          <div className='w-[35%] flex justify-between'>
            <button className="hover:bg-blue-200 text-white hover:text-black px-4 py-2 rounded-[10px] font-bold"
            onClick={()=>{setUpdateCompo((prev)=>!prev)}}>
              Cancel
            </button>
            <button className="bg-blue-200 px-4 py-2 rounded-[10px] font-bold"
                    onClick={updateBtn}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
