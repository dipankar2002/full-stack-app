import React from 'react'

export default function Tasks({title,tag,description,date}) {
  return (
    <div className="bg-gray-200 w-[96.5%] mx-auto my-2 rounded-[15px] py-1">
      <Top title={title} tag={tag}/>
      <DescTodo description={description} date={date}/>
    </div>
  )
}

function Top({title,tag}) {
  const tailwindColors = [
    'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500',
    'bg-pink-500', 'bg-indigo-500', 'bg-gray-500', 'bg-teal-500', 'bg-orange-500',
  ];
  function getRandomTailwindColor() {
    return tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
  }
  return <div className="flex justify-between items-center w-[95%] mx-auto">
    <h2 className='text-[130%] font-medium'>{title}</h2>
    <div className={`${getRandomTailwindColor()} px-2.5 py-1 text-[90%] text-white rounded-[5px]`}>{tag}</div>
  </div>
}

function DescTodo({description,date}) {
  return <div className='px-2'>
    <p>{description}</p>
    <div className='px-2 font-medium'>{date}</div>
  </div>
}