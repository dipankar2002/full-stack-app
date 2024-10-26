import React from "react";
import { useState } from "react";
import Tasks from "./Tasks";

export default function Home() {
  return (
    <div className="flex">
      <LeftSec />
      <RightSec />
    </div>
  );
}

// ----------------- Left Sec part code ----------------- //
function LeftSec() {
  return <div className="w-[20%] h-[95vh] m-3 flex flex-col justify-between">
    <div className="bg-gray-500 bg-opacity-30 rounded-[20px] py-1 px-1 hide-scrollbar overflow-auto">
      <Top />
      <MidCards title={"TASKS"} innerText={{l1:"Today",l2:"Upcoming",l3:"Calender"}} dateTag={true}/>
      <MidCards title={"TAGS"} innerText={{l1:"Personal",l2:"Workout",l3:"Home"}} dateTag={false}/>
    </div>
    <BottomBtns/>
  </div>
}

function Top() {
  return <div className="grid">
    <div className="flex justify-between items-center w-[90%] mx-auto">
      <h2 className="text-white font-bold text-2xl tracking-widest">MENU</h2>
      <button className="text-white font-bold text-[200%] tracking-widest">=</button>
    </div>
    <input className="bg-white bg-opacity-50 rounded-[20px] mb-4 px-5 pb-1.3 w-[90%] h-[35px] mx-auto text-white placeholder-black text-[120%] font-medium"
      type="text" 
      placeholder="SEARCH"/>
  </div>
}

function MidCards({title, innerText, dateTag}) {
  return <div className=" my-4 w-[95%] mx-auto">
    <p className="ml-4 text-[120%] text-white font-bold">{title}</p>
    <MidInfoCard innerText={innerText} dateTag={dateTag}/>
  </div>
}

function MidInfoCard({innerText, dateTag}) {
  return <div className="bg-white rounded-[20px] py-2 my-2">
    <div className="flex justify-between w-[80%] mx-auto my-2">
      <button className="text-[120%] font-medium">&#8658; {innerText.l1}</button>
    </div>
    <div className="flex justify-between w-[80%] mx-auto my-2">
      <button className="text-[120%] font-medium">&#8658; {innerText.l2}</button>
    </div>
    <div className="flex justify-between items-center w-[80%] mx-auto my-2">
      <button className="text-[120%] font-medium">&#8658; {innerText.l3}</button>
      {dateTag?<input className=" cursor-pointer w-[20px]"
        type="date"
        placeholder=""/>:null}
    </div>
  </div>
}

function BottomBtns() {
  return <div className="flex justify-around items-center my-2 mx-2">
    <button className="bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-[10px] text-[80%] px-4 py-2 focus:ring-blue-800 text-black">Log Out</button>
    <button className="bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-[10px] text-[80%] px-4 py-2 focus:ring-blue-800 text-black">Setting</button>
  </div>
}

// ----------------- Right Sec part code ----------------- //
function RightSec() {
  return <div className=" w-[78%] h-[95vh] py-5 m-3 rounded-[20px] overflow-hidden">
    <Header day={"TODAY"} account={"DG"}/>
    <MainSec />
    <CreateTodo />
  </div>
}

function Header({day,account}) {
  return <div className="flex justify-between items-center mx-auto mb-4 w-[90%]">
    <p className="text-white font-bold text-[200%] tracking-widest ">{day}</p>
    <div className="bg-white w-[60px] h-[60px] flex justify-center items-center text-[200%] font-bold rounded-[50%]">{account}</div>
  </div>
}

function MainSec() {
  return <div className="bg-gray-500 bg-opacity-30 rounded-[20px] h-[100%] pt-2 pb-20 hide-scrollbar overflow-auto">
    <Tasks title={"Valo"} description={"play valorant at noon 2pm"} tag={"game"} date={"26-10-24"}/>
    <Tasks title={"Gym"} description={"go to gym at 5pm"} tag={"gym"} date={"26-10-24"}/>
    <Tasks title={"code"} description={"finish home page code before 12pm"} tag={"gym"} date={"26-10-24"}/>
    <Tasks title={"project"} description={"go to gym at 5pm"} tag={"game"} date={"26-10-24"}/>
    <Tasks title={"project"} description={"go to gym at 5pm"} tag={"game"} date={"26-10-24"}/>
    <Tasks title={"project"} description={"go to gym at 5pm"} tag={"game"} date={"26-10-24"}/>
    <Tasks title={"project"} description={"go to gym at 5pm"} tag={"game"} date={"26-10-24"}/>
    <Tasks title={"project"} description={"go to gym at 5pm"} tag={"game"} date={"26-10-24"}/>
    <Tasks title={"project"} description={"go to gym at 5pm"} tag={"game"} date={"26-10-24"}/>
    <Tasks title={"project"} description={"go to gym at 5pm"} tag={"game"} date={"26-10-24"}/>
    <Tasks title={"project"} description={"go to gym at 5pm"} tag={"game"} date={"26-10-24"}/>
    <Tasks title={"project"} description={"go to gym at 5pm"} tag={"game"} date={"26-10-24"}/>
    
  </div>
}

function CreateTodo() {
  return <button className="fixed bottom-10 right-10 flex bg-blue-400 px-6 py-2 mx-auto rounded-[15px] text-[190%] font-bold z-1">Create</button>
}