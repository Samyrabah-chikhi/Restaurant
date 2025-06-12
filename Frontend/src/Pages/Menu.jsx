import React, { useState } from "react";
import MenuElement from "../Components/MenuElement";

export default function Menu() {
  const categories = ["All", "Burger", "Pizza", "Pasta", "Fries"];
  const Menu = [
    {
      title: "Delicious Pizza",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 20,
      image: "https://themewagon.github.io/feane/images/f1.png",
    },
    {
      title: "Delicious Burger",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 15,
      image: "https://themewagon.github.io/feane/images/f2.png",
    },
    {
      title: "Delicious Pizza",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 17,
      image: "https://themewagon.github.io/feane/images/f3.png",
    },
    {
      title: "Delicious Pasta",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 18,
      image: "https://themewagon.github.io/feane/images/f4.png",
    },
    {
      title: "Delicious Fries",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 10,
      image: "https://themewagon.github.io/feane/images/f5.png",
    },
    {
      title: "Delicious Pizza",
      description:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 15,
      image: "https://themewagon.github.io/feane/images/f6.png",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="mt-[4%] flex flex-col gap-12 items-center justify-center text-black">
      <h1 className="text-5xl font-bold text-black">Our Menu</h1>
      <div className="flex lg:gap-[2%] justify-center font-normal text-lg ">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-24 p-2 cursor-pointer rounded-4xl ${
                index == selectedIndex ? "bg-gray-800 text-white" : ""
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="flex gap-[2%] justify-center flex-wrap">
        {Menu.map((food,index) => {
          return <MenuElement food={food}></MenuElement>
        })}
      </div>
      <button className="w-44 h-12 text-white bg-amber-400 active:bg-amber-400 hover:bg-amber-500 transition duration-500 cursor-pointer rounded-4xl">
        View More
      </button>

    </div>
  );
}
