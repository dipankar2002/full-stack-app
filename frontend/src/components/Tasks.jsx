import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Tasks({ title, tag, description, date, status, id, onStatusChange }) {
  return (
    <div
      id="dropdown"
      className="border-b border-b-gray-100 w-[60%] mx-auto my-2 py-2 px-3"
    >
      <Top title={title} tag={tag} status={status} />
      <DescTodo description={description} date={date} status={status} id={id} onStatusChange={onStatusChange}/>
    </div>
  );
}

function Top({ title, tag, status }) {
  const tailwindColors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-indigo-500",
    "text-teal-500",
    "text-orange-500",
  ];
  function getRandomTailwindColor() {
    return tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
  }
  return (
    <div className="flex justify-between items-center h-4 mx-auto px-2">
      <div
        className={
          status
            ? `text-[100%] line-through text-white font-bold`
            : `text-[100%] text-white font-bold`
        }
      >
        {title}
      </div>
      <div
        className={`${getRandomTailwindColor()} font-bold px-2 text-[80%] rounded-[6px]`}
      >
        {tag}
      </div>
    </div>
  );
}

function DescTodo({ description, date, status, id, onStatusChange }) {
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
      <StatusBtn status={status} id={id} onStatusChange={onStatusChange} />
    </div>
  );
}

function StatusBtn({ status, id, onStatusChange }) {
  console.log(id);
  const [newStatus, setNewStatus] = useState(status);
  async function btnHandler() {
    try {
      const res = await axios.put(
        `http://localhost:3000/user/changeStatus/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(res.data.message);
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
