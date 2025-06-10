import React from "react";
import { Link } from "react-router-dom";

function ListItems({ name = "" , firstLink = false , setUnderlinedIndex}) {
  return (
    <li className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-110 transition-transform duration-500"
    onClick={setUnderlinedIndex}>
      {name=="HOME" ? <Link to="/">{name}</Link>: <Link to={`/${name.toLowerCase().replace(/\s+/g, "")}`}>{name}</Link>}
      {firstLink && <hr className="border-none w-[80%] h-1 rounded-lg bg-red-700"/>}
    </li>
  );
}

export default ListItems;
