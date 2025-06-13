import React from "react";
import OrderButton from "./OrderButton";

export default function PromotionCard({ title, percentage, image }) {
  return (
    <div className="bg-gray-800 flex gap-4 w-[500px] h-[200px] rounded-lg p-5 text-white">
      <div className="w-40 h-40 rounded-full border-4 border-amber-300 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-125"
        />
      </div>

      <div className="flex flex-col justify-center gap-3 ">
        <h2 className="text-2xl">{title}</h2>
        <div className="flex items-end gap-1">
          <h3 className="text-4xl font-semibold">{percentage}%</h3>
          <p className="text-lg">off</p>
        </div>
        <OrderButton name="Order Now"></OrderButton>
      </div>
    </div>
  );
}
