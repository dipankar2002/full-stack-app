import React from "react";
import { useState } from "react";
import Tasks from "./Tasks";
import CreateTodoCard from "./CreateTodoCard";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { createTodoCard } from "../atoms/atom";

const todoObj = [
  {
      id: 1,
      tag: "project",
      title: "full stack todo",
      description: "comple code for the project",
      status: false,
      date: "2024-10-27T10:08:14.700Z",
      _id: "671e110eda81d41630be5846"
  },
  {
      id: 2,
      tag: "project",
      title: "full stack todo",
      description: "comple code for the project",
      status: false,
      date: "2024-10-27T10:08:16.397Z",
      _id: "671e1110da81d41630be584a"
  },
  {
      id: 3,
      tag: "project",
      title: "full stack todo",
      description: "comple code for the project",
      status: true,
      date: "2024-10-27T10:08:17.304Z",
      _id: "671e1111da81d41630be584f"
  },
  {
      id: 4,
      tag: "project",
      title: "full stack todo",
      description: "comple code for the project",
      status: false,
      date: "2024-10-27T10:08:18.163Z",
      _id: "671e1112da81d41630be5855"
  },
  {
      id: 5,
      tag: "project",
      title: "full stack todo",
      description: "comple code for the project",
      status: true,
      date: "2024-10-27T10:08:19.039Z",
      _id: "671e1113da81d41630be585c"
  },
  {
      id: 6,
      tag: "project",
      title: "full stack todo",
      description: "comple code for the project",
      status: false,
      date: "2024-10-27T10:08:19.802Z",
      _id: "671e1113da81d41630be5864"
  },
  {
      id: 7,
      tag: "project",
      title: "full stack todo",
      description: "comple code for the project",
      status: true,
      date: "2024-10-27T10:08:20.672Z",
      _id: "671e1114da81d41630be586d"
  },
  {
      id: 8,
      tag: "project",
      title: "full stack todo",
      description: "comple code for the project",
      status: false,
      date: "2024-10-27T10:08:21.482Z",
      _id: "671e1115da81d41630be5877"
  },
  {
      id: 9,
      tag: "project",
      title: "full stack todo",
      description: "comple code for the project",
      status: true,
      date: "2024-10-27T10:08:22.273Z",
      _id: "671e1116da81d41630be5882"
  }
]

export default function Home() {
  return (
    <div className="flex">
      <RecoilRoot>
        <LeftSec />
        <RightSec />
      </RecoilRoot>
    </div>
  );
}

// ----------------- Left Sec part code ----------------- //
function LeftSec() {
  const isOpencreateTodoCard = useRecoilValue(createTodoCard);
  return <div className="w-[15%] h-[95vh] m-3 flex flex-col justify-between">
    <div className="bg-gray-500 bg-opacity-10 rounded-[20px] py-1 px-1 hide-scrollbar overflow-auto">
      <Top />
      <MidCards title={"TASKS"} innerText={{l1:"Today",l2:"Upcoming",l3:"Calender"}} dateTag={true}/>
      <MidCards title={"TAGS"} innerText={{l1:"Personal",l2:"Workout",l3:"Home"}} dateTag={false}/>
    </div>
    <BottomBtns/>
    {isOpencreateTodoCard && (
      <CreateTodoCard/>
    )}
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
    <button className="bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-[10px] text-[80%] px-4 py-2 focus:ring-blue-800 text-black">Settings</button>
  </div>
}

// ----------------- Right Sec part code ----------------- //
function RightSec() {
  return <div className=" w-[78%] h-[97vh] m-3 mx-auto rounded-[20px] overflow-hidden">
    <Header day={"TODAY"} account={"DG"}/>
    <MainSec />
    <CreateTodoBtn/>
  </div>
}

function Header({day,account}) {
  return <div className="flex justify-between items-center mx-auto mt-0 mb-4 w-[90%]">
    <p className="text-white font-bold text-[200%] tracking-widest ">{day}</p>
    <div className="bg-white w-[60px] h-[60px] flex justify-center items-center text-[200%] font-bold rounded-[50%]">{account}</div>
  </div>
}

function MainSec() {

  const [isOpenPendingTasks, setIsOpenPendingTasks] = useState(true);
  const [isOpenCompleteTasks, setIsOpenCompleteTasks] = useState(false);

  const toggleDropdownPendingTasks = () => {
    setIsOpenPendingTasks(!isOpenPendingTasks);
  };

  const toggleDropdownCompleteTasks = () => {
    setIsOpenCompleteTasks(!isOpenCompleteTasks);
  };

  return <div className="bg-gray-500 bg-opacity-10 rounded-[20px] h-[100%] pt-2 pb-20 hide-scrollbar overflow-auto">
    <button onClick={toggleDropdownPendingTasks} className="w-[90%] mx-auto text-[150%] font-medium text-white flex">Panding Tasks {isOpenPendingTasks?"▲":"▼"}
    </button>

    {isOpenPendingTasks?<div>
      {todoObj.map((value)=>{
        return (value.status? <Tasks key={value.id} title={value.title} description={value.description} tag={value.tag} date={value.date} status={value.status}/> : null)
      })}
    </div>:null}

    <button onClick={toggleDropdownCompleteTasks} className="w-[90%] mx-auto my-5 text-[150%] font-medium text-white flex">Completed Tasks {isOpenCompleteTasks?"▲":"▼"}
    </button>

    {isOpenCompleteTasks?<div>
      {todoObj.map((value)=>{
        return (!value.status? <Tasks key={value.id} title={value.title} description={value.description} tag={value.tag} date={value.date} status={value.status}/> : null)
      })}
    </div>:null}
  </div>
}

function CreateTodoBtn() {
  const [ isOpencreateTodoCard, setIsOpencreateTodoCard ] = useRecoilState(createTodoCard);
  return <button onClick={()=>{
    setIsOpencreateTodoCard(!isOpencreateTodoCard);
  }} className="fixed bottom-10 right-20 flex bg-blue-400 px-6 pb-2 mx-auto rounded-[15px] text-[190%] font-bold z-20">{!isOpencreateTodoCard?"create":"close"}</button>
}
