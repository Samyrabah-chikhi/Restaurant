import React from "react";
import { Link } from "react-router-dom";

function ListItems({ name = "" , isActive = false , setIsActive}) {
  const style = `flex flex-col items-center justify-center gap-1 cursor-pointer 
  hover:text-amber-400 transition duration-500 ${isActive ? "text-amber-400" : ""}`
  
  return (
    <li className={style}>
      {name=="HOME" ? <Link to="/">{name}</Link>: <Link to={`/${name.toLowerCase().replace(/\s+/g, "")}`}>{name}</Link>}
      {isActive && <hr className="border-none w-[80%] h-1 rounded-lg bg-orange-700"/>}
    </li>
  );
}

export default ListItems;
