import ListItems from "./ListItems";

import logo from "../Assets/pizzaLogo.png";
import hero from "../Assets/hero-bg.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import OrderButton from "../OrderButton";

function Navbar() {
  const [isActive, setIsActive] = useState(0);
  const MenuList = ["HOME", "MENU", "ABOUT", "BOOK TABLE"];
  return (
    <div
      className="flex justify-around shadow-sm text-gray-200 z-10"
      style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover" }}
    >
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="" className="w-1/5" />
        <Link to="/">
          <p className="font-semibold text-4xl cursor-pointer">PizzApp</p>
        </Link>
      </div>
      <ul className="flex items-center lg:gap-12  text-xl font-medium mr-[5%]">
        {MenuList.map((Item, index) => {
          return (
            <ListItems
              name={Item}
              key={index}
              isActive={index == isActive}
              setIsActive={() => setIsActive(index)}
            />
          );
        })}
      </ul>
      <div className="flex items-center mr-[5%] ">
        <OrderButton></OrderButton>
      </div>
    </div>
  );
}

export default Navbar;
