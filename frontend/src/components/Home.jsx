import React from "react";
import { useState } from "react";

function Home() {
  /**
    list er use state ta baniyechi karon ota user define korbe to tui oibhbae array t add kore show korbi,
    r day ta calendar ache bole oita dekhe task manage korar jonno     */
  const [Lists, setLists] = useState([]);
  const [Day, setDay] = useState("Today");
  return (
    <>
      <div className="flex justify-between ">
        <div className="basis-1/4 rounded-2xl bg-slate-900 opacity-60  text-left p-3 ">
          <h1 className=" left-0 text-white text-4xl pb-4 ">Menu</h1>
          <div className="mt-5 ">
            <label htmlFor="tasks" className="m-1 text-3xl text-white ">
              Tasks
            </label>
            <div id="tasks" className=" bg-slate-50 h-40 rounded-lg ">
              <ul className="p-3 ">
                <li>TODAY</li>
                <li>UPCOMING</li>
                <input type="date" />
              </ul>
            </div>
          </div>
          <div className="mt-5 ">
            <label htmlFor="lists" className="m-1 text-3xl text-white">
              Lists
            </label>
            <div id="lists" className=" bg-white h-40 rounded-lg ">
              <ul className="p-3">
                {/**user input debe to link ta use korenis  */}
                <li>{Lists[1]}</li>
                <li>{Lists[2]}</li>
                <li>{Lists[3]}</li>
              </ul>
            </div>
          </div>
          <div className="m-5 flex justify-evenly ">
            {/**button gulo sign out sign in dekhe toke manage korte hobe */}
            <button className="bg-slate-50 rounded-lg p-2">Sign Out</button>
            <button className="bg-slate-50 rounded-lg p-2">Settings</button>
          </div>
        </div>
        <div className=" basis-3/4 flex-wrap text-left ml-7 ">
          <div className="flex justify-between">
            <h1 className="text-4xl mb-2">{Day}</h1>
          </div>
          <div className="h-[35rem] bg-slate-900 opacity-60 rounded-3xl"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
