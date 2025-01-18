import React, { useEffect } from "react";
import { useState } from "react";
import Tasks from "./Tasks";
import CreateTodoCard from "./CreateTodoCard";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { createTodoCard, currentShowTodoAtom, currentTagAtom, currentTodoIdAtom, jwtTokenAtom, menuBarAtom, todosAtom, todoTagAtom, updateTodoAtom, userNameAtom } from "../atoms/atom";
import axios from 'axios';
import UpdateTodoCard from "./updateTodoCard";
import NewAccAlertCard from "./NewAccAlertCard";


export default function Home() {
  return (
    <div className=" grid grid-cols-[100%] lg:grid-cols-[20%_75%] justify-center  ">
      <RecoilRoot>
        <LeftSec />
        <RightSec />
      </RecoilRoot>
    </div>
  );
}

// ----------------- Left Sec part code ----------------- //
function LeftSec() {
  const jwtToken = useRecoilValue(jwtTokenAtom);
  const isOpencreateTodoCard = useRecoilValue(createTodoCard);
  const updateCompo = useRecoilValue(updateTodoAtom);
  const todos = useRecoilValue(todosAtom);
  const tagsList = [...new Set(todos.map((value)=>value.tag))];
  const menuOpen = useRecoilValue(menuBarAtom);
  

  return <div className={`${menuOpen?"Block absolute bg-black bg-opacity-100":"hidden"} lg:block w-[100%] h-[95vh] my-3 mr-4 z-30`}>
    <div className={`bg-gray-500 bg-opacity-30 rounded-[20px] py-1 px-1 hide-scrollbar overflow-auto`}>
      <Top />
      {/* <MidCards title={"TASKS"} innerText={["Today","Upcoming","Calender"]} dateTag={true}/> */}
      <MidTagCards title={"TAGS"} innerText={tagsList} dateTag={false}/>
    </div>
    <BottomBtns/>
    {/* {jwtToken && <NewAccAlertCard/>} */}
    {isOpencreateTodoCard && (<CreateTodoCard/>)}
    {updateCompo && (<UpdateTodoCard/>)}
  </div>
}

function Top() {
  const [ menuOpen, setMenuOpen ] = useRecoilState(menuBarAtom);
  return <div className="grid">
    <div className="flex justify-between items-center w-[90%] mx-auto">
      <h2 className="text-white font-bold text-2xl tracking-widest">MENU</h2>
      <button className="lg:hidden  text-white font-bold text-[200%] tracking-widest" onClick={()=>{setMenuOpen(!menuOpen)}}>=</button>
    </div>
  </div>
}

function MidCards({title, innerText, dateTag}) {
  return <div className=" my-4 w-[95%] mx-auto">
    <p className="ml-4 text-[120%] text-white font-bold">{title}</p>
    <MidInfoCard innerText={innerText} dateTag={dateTag}/>
  </div>
}

function MidInfoCard({innerText, dateTag}) {
  const setCurrentTag = useSetRecoilState(currentTagAtom);
  return <div className="bg-white rounded-[20px] py-2 my-2">
    {innerText.map((value,index)=>{
      return (<div key={index} className="flex justify-between items-center w-[80%] mx-auto my-2">
      <button className="text-[120%] font-medium" onClick={()=>{}}>&#8658; {value}</button>
      {dateTag?<input className=" cursor-pointer w-[20px]"
        type="date"
        placeholder=""/>:null}
      </div>)
    })}
  </div>
}

function MidTagCards({title, innerText, dateTag}) {
  return <div className=" my-4 w-[95%] mx-auto">
    <p className="ml-4 text-[120%] text-white font-bold">{title}</p>
    <MidTagInfoCard innerText={innerText} dateTag={dateTag}/>
  </div>
}

function MidTagInfoCard({innerText, dateTag}) {
  const setCurrentTag = useSetRecoilState(currentTagAtom);
  return <div className="bg-white rounded-[20px] py-2 my-2">
    {innerText.map((value,index)=>{
      return (<div key={index} className="flex justify-between items-center w-[80%] mx-auto my-2">
      <button className="text-[120%] font-medium" onClick={()=>{setCurrentTag((prev)=>{
        if(prev==null) return value
        else if(prev!=value) return value
        return null;
      })}}>&#8658; {value}</button>
      {dateTag?<input className=" cursor-pointer w-[20px]"
        type="date"
        placeholder=""/>:null}
      </div>)
    })}
  </div>
}

function BottomBtns() {
  return <div className="flex justify-around items-center my-2 mx-2">
    <button className="bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-[10px] text-[80%] px-4 py-2 focus:ring-blue-800 text-black"
        onClick={()=>{
          localStorage.removeItem("authToken")
          window.location.replace('http://localhost:5000/login');
        }}>Log Out</button>
    <button className="bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-[10px] text-[80%] px-4 py-2 focus:ring-blue-800 text-black">Settings</button>
  </div>
}

// ----------------- Right Sec part code ----------------- //
function RightSec() {
  const userName = useRecoilValue(userNameAtom);
  const currentShowTodo = useRecoilValue(currentShowTodoAtom);
  return <div className="w-[100%]  my-3 ml-4 mx-auto rounded-[20px] overflow-hidden">
    <Header day={currentShowTodo} account={userName.slice(0,1)}/>
    <MainSec />
    <CreateTodoBtn/>
  </div>
}

function Header({day,account}) {
  const [ menuOpen, setMenuOpen ] = useRecoilState(menuBarAtom);
  return <div className="flex justify-between items-center mx-auto mt-0 mb-4 w-[90%]">
    <div className="flex items-center">
      <button className="lg:hidden text-white font-bold text-[250%] tracking-widest mr-2" onClick={()=>{setMenuOpen(!menuOpen)}}>=</button>
      <p className="text-white font-bold text-[200%] tracking-widest ">{day}</p>
    </div>
    <div className="bg-white w-[60px] h-[60px] flex justify-center items-center  font-bold rounded-[50%]"><p className="text-[200%] mb-[3px]">{account}</p></div>
  </div>
}

function MainSec() {

  const [isOpenPendingTasks, setIsOpenPendingTasks] = useState(true);
  const [isOpenCompleteTasks, setIsOpenCompleteTasks] = useState(false);

  const [ jwtToken, setJwtToken ] = useRecoilState(jwtTokenAtom);
  const [ todos, setTodos ] = useRecoilState(todosAtom);

  const [ updateCompo, setUpdateCompo ] = useRecoilState(updateTodoAtom);

  const [ currentTodoId, setCurrentTodoId ] = useRecoilState(currentTodoIdAtom);

  const currentTag = useRecoilValue(currentTagAtom);

  useEffect(() => {
    let isMounted = true; // A flag to check if the component is mounted

    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/user/homePage', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`
          }
        });
        const result = await response.data;
        
        if (isMounted) { // Only update state if the component is still mounted
          setTodos(result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    jwtToken?fetchData():null;

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  // console.log(`authToken value: ${authToken}`);
  // console.log(`jwtToken value: ${jwtToken}`);

  const toggleDropdownPendingTasks = () => {
    setIsOpenPendingTasks(!isOpenPendingTasks);
  };

  const toggleDropdownCompleteTasks = () => {
    setIsOpenCompleteTasks(!isOpenCompleteTasks);
  };

  function updateTodoFunc(id) {
    setCurrentTodoId(id);
    // console.log(currentTodoId);
    setUpdateCompo(!updateCompo);
  }

  return <div className="bg-gray-500 bg-opacity-30 rounded-[20px] h-[100%] pt-2 pb-20 hide-scrollbar overflow-auto">
    <button onClick={toggleDropdownPendingTasks} className="w-[90%] mx-auto text-[150%] font-medium text-white flex">Pending Tasks {isOpenPendingTasks?"▲":"▼"}
    </button>

    {isOpenPendingTasks?<div>
      {todos.slice().reverse().filter((value)=>{
        if(currentTag!==null) {
          return value.tag==currentTag;
        }
        return value;
      }).map((value)=>{
        return (!value.status? <Tasks key={value.id} title={value.title} description={value.description} tag={value.tag} date={value.date} status={value.status} id={value.id} updateTodoFunc={updateTodoFunc}/> : null)
      })}
    </div>:null}

    {/* {isOpenPendingTasks?<div>
      {todos.slice().reverse().map((value)=>{
        return (!value.status? <Tasks key={value.id} title={value.title} description={value.description} tag={value.tag} date={value.date} status={value.status} id={value.id} updateTodoFunc={updateTodoFunc}/> : null)
      })}
    </div>:null} */}

    <button onClick={toggleDropdownCompleteTasks} className="w-[90%] mx-auto my-5 text-[150%] font-medium text-white flex">Completed Tasks {isOpenCompleteTasks?"▲":"▼"}
    </button>

    {isOpenCompleteTasks?<div>
      {todos.slice().reverse().filter((value)=>{
        if(currentTag!==null) {
          return value.tag==currentTag;
        }
        return value;
      }).map((value)=>{
        return (value.status? <Tasks key={value.id} title={value.title} description={value.description} tag={value.tag} date={value.date} status={value.status} id={value.id} updateTodoFunc={updateTodoFunc}/> : null)
      })}
    </div>:null}
  </div>
}

function CreateTodoBtn() {
  const [ isOpencreateTodoCard, setIsOpencreateTodoCard ] = useRecoilState(createTodoCard);
  return <button onClick={()=>{
    setIsOpencreateTodoCard(!isOpencreateTodoCard);
  }} className="fixed bottom-10 right-10 lg:right-14 flex bg-blue-400 px-6 pb-2 mx-auto rounded-[15px] text-[190%] font-bold z-29">{!isOpencreateTodoCard?"create":"close"}</button>
}
