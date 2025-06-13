import ListItems from "./ListItems";

import logo from "../Assets/pizzaLogo.png";
import hero from "../Assets/hero-bg.jpg";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import OrderButton from "../OrderButton";

function Navbar() {
  const [isActive, setIsActive] = useState(0);
  const MenuList = [
    { name: "HOME", path: "/" },
    { name: "MENU", path: "/menu" },
    { name: "ABOUT", path: "/about" },
    { name: "BOOK TABLE", path: "/booktable" },
  ];
  const location = useLocation();
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
        {MenuList.map((item, index) => (
          <ListItems
            key={index}
            name={item.name}
            to={item.path}
            isActive={location.pathname === item.path}
          />
        ))}
      </ul>
      <div className="flex items-center mr-[5%] ">
        <OrderButton></OrderButton>
      </div>
    </div>
  );
}

export default Navbar;
