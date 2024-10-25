import React from "react";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <LeftSec />
      {/* <RightSec /> */}
    </>
  );
}

function LeftSec() {
  return <div className="bg-gray-500 bg-opacity-30 w-[20%] py-5 m-5  rounded-[20px]">
    <Top />
    <MidCards title={"TASKS"} innerText={{l1:"Today",l2:"Upcoming",l3:"Calender"}}/>
    <MidCards title={"LISTS"} innerText={{l1:"Personal",l2:"Workout",l3:"Home"}} inputDisabled={"disabled"}/>
    <BottomBtns />
  </div>
}

function Top() {
  return <div className="grid">
    <div className="flex justify-between w-[90%] mx-auto">
      <h2 className="text-white my-4 font-bold text-2xl tracking-widest">MENU</h2>
      <button className="text-white font-bold text-[200%] tracking-widest">=</button>
    </div>
    <input className="bg-white bg-opacity-50 rounded-[20px] mb-4 px-5 pb-1.3 w-[90%] h-[35px] mx-auto text-white placeholder-black text-[120%] font-medium"
      type="text" 
      placeholder="SEARCH"/>
  </div>
}

function MidCards({title, innerText, inputDisabled}) {
  return <div className=" my-4 w-[95%] mx-auto">
    <p className="ml-4 text-[120%] text-white font-bold">{title}</p>
    <MidInfoCard innerText={innerText} inputDisabled={inputDisabled}/>
  </div>
}

function MidInfoCard({innerText, inputDisabled}) {
  return <div className="bg-white rounded-[20px] py-2 my-2">
    <div className="flex justify-between w-[80%] mx-auto my-2">
      <button className="text-[120%] font-medium">&#8658; {innerText.l1}</button>
    </div>
    <div className="flex justify-between w-[80%] mx-auto my-2">
      <button className="text-[120%] font-medium">&#8658; {innerText.l2}</button>
    </div>
    <div className="flex justify-between w-[80%] mx-auto my-2">
      <button className="text-[120%] font-medium">&#8658; {innerText.l3}</button>
      <input className="text-transparent cursor-pointer w-[40%]"
        type="date"
        placeholder=""/>
    </div>
  </div>
}

function BottomBtns() {
  return <div className="flex justify-around my-2 mx-2">
    <button className="bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-[10px] text-[80%] px-4 py-2 focus:ring-blue-800 text-black">Log Out</button>
    <button className="bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-[10px] text-[80%] px-4 py-2 focus:ring-blue-800 text-black">Setting</button>
  </div>
}