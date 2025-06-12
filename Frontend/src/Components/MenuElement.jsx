import React from "react";

export default function MenuElement({ food }) {
  return (
    <div className="Block mb-4 w-[350px] h-[400px] bg-gray-800 text-white rounded-xl flex flex-col overflow-hidden">
      <div className="h-1/2 bg-gray-200 flex justify-center items-center rounded-bl-4xl">
        <img
          src={food.image}
          alt={food.title}
          className="w-2/3 h-2/3 object-contain hover:w-3/4 hover:h-3/4 duration-500"
        />
      </div>
      <div className="mx-2 h-1/2 p-4 flex flex-col justify-between">
        <h2 className="text-xl">{food.title}</h2>
        <p>{food.description}</p>
        <div className="flex justify-between items-center text-xl">
            <h3>${food.price}</h3>
            <button className="bg-amber-300 w-10 h-10 rounded-full cursor-pointer">🛒</button>
        </div>
      </div>
    </div>
  );
}
