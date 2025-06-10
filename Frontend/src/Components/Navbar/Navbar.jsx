import ListItems from "./ListItems";

import logo from "../Assets/pizzaLogo.png";
import cart from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [underlinedIndex, setUnderlinedIndex] = useState(0);
  const MenuList = ["HOME", "MENU", "ABOUT", "BOOK TABLE"];
  return (
    <div className="flex justify-around shadow-sm bg-blue-950 text-gray-200  bg-linear-to-r from-neutral-950 to-neutral-600">
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="" className="w-1/5"/>
        <p className="font-semibold text-4xl">PizzApp</p>
      </div>
      <ul className="flex items-center lg:gap-12  text-xl font-medium">
        {MenuList.map((Item, index) => {
          if (underlinedIndex == index)
            return (
              <ListItems
                name={Item}
                key={index}
                firstLink={true}
                setUnderlinedIndex={() => setUnderlinedIndex(index)}
              />
            );
          return (
            <ListItems
              name={Item}
              key={index}
              setUnderlinedIndex={() => setUnderlinedIndex(index)}
            />
          );
        })}
      </ul>
      <div className="relative flex items-center gap-11">
        <Link to="/order">
          <button className="w-40 h-14 bg-amber-400 active:bg-amber-400 hover:bg-amber-600 hover:text-gray-300 transition duration-300 cursor-pointer rounded-4xl">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
