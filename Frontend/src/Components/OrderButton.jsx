import { Link } from "react-router-dom";

export default function OrderButton({ name = "Order Online" }) {
  return (
    <Link to="/order">
      <button className="w-44 h-12 bg-amber-400 active:bg-amber-400 hover:bg-amber-600 hover:text-gray-300 transition duration-500 cursor-pointer rounded-4xl">
        {name}
      </button>
    </Link>
  );
}
