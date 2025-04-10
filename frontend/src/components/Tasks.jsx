import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { jwtTokenAtom, todosAtom, todoTagAtom } from "../atoms/atom";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Tasks({ title, tag, description, date, status, id, updateTodoFunc }) {
  return (
    <div
      id="dropdown"
      className="border-b border-b-gray-100 w-[60%] mx-auto my-2 py-2 px-3"
    >
      <Top title={title} id={id} tag={tag} status={status} updateTodoFunc={updateTodoFunc}/>
      <DescTodo description={description} date={date} status={status} id={id}/>
    </div>
  );
}

function Top({ title, id, tag, status, updateTodoFunc }) {
  const jwtToken = useRecoilValue(jwtTokenAtom);
  const [ todos, setTodos ] = useRecoilState(todosAtom);
  const todoTag = useRecoilValue(todoTagAtom);
  function updatedTodo(id) {
    setTodos(
      todos.filter((val)=>{
        return val.id!==id;
      })
    )
  }
  async function deleteBtn() {
    try {
      const res = await axios.delete(
        `https://todo-app-rd60.onrender.com/user/deleteTodo/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      updatedTodo(id);
      // window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  function editBtn() {
    updateTodoFunc(id);
  }
  return (
    <div className="flex justify-between items-center h-4 mx-auto px-2">
      <div className="flex items-center">
        <div className={ status ? `text-[150%] line-through text-white` : `text-[150%] text-white`}>
          {title}
        </div>
        <div className={`${todoTag.find((val)=>val.tag==tag).color} font-bold px-3 text-[80%] rounded-[6px]`}>
          {tag}
        </div>
      </div>
      <div className="w-[9%] flex justify-between">
        <button onClick={editBtn} className="text-white font-small">✎edit</button>
        <button onClick={deleteBtn} className="text-white font-bold">❌</button>
      </div>
    </div>
  );
}

function DescTodo({ description, date, status, id }) {
  return (
    <div className="px-2 flex justify-between items-center">
      <div className="w-[90%]">
        <p
          className={
            status
              ? "text-white line-through line-clamp-2"
              : "text-white line-clamp-2"
          }
        >
          {description}
        </p>
        <div className="text-white px-2 font-medium">{date.slice(0, 10)}</div>
      </div>
      <StatusBtn status={status} id={id}/>
    </div>
  );
}

function StatusBtn({ status, id }) {
  const jwtToken = useRecoilValue(jwtTokenAtom);
  const [ todos, setTodos ] = useRecoilState(todosAtom);
  // console.log(id);
  const [newStatus, setNewStatus] = useState(status);
  const onStatusChange = (id, newStatus) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };
  async function btnHandler() {
    try {
      const res = await axios.put(
        `https://todo-app-rd60.onrender.com/user/changeStatus/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`,
          },
        }
      );
      const updatedStatus = !newStatus;
      setNewStatus(updatedStatus);
      onStatusChange(id, updatedStatus);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button
        onClick={btnHandler}
        className="text-blue-300 font-bold px-3 py-1.5 border rounded-[6px]"
      >
        {status ? "undo" : "done"}
      </button>
    </div>
  );
}
