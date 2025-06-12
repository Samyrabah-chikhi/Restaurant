import OrderButton from "../Components/OrderButton";
import hero from "../Components/Assets/hero-bg.jpg";
import { useState } from "react";

export default function Home() {
  const descriptions = [
    "More than just a pizza place — we’re your neighborhood food haven. Come hungry and leave happy with cheesy classics, juicy burgers, and sweet endings that’ll have you coming back for more.",
    "Welcome to PizzApp — where sizzling slices meet cozy cravings. Whether you're here for a late-night bite or a hearty family dinner, we serve oven-fresh flavors that bring everyone to the table",
    "Whether you're grabbing lunch on the go or planning the perfect dinner night, PizzApp delivers taste, speed, and comfort in every bite. Discover a fast-food experience that doesn’t compromise on quality.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="m-[5%] text-white ">
      <img src={hero} className="absolute top-0 left-0 z-[-1]" />
      <div className=" flex flex-col justify-center max-w-1/2 gap-4">
        <h1 className="text-5xl">Fast Food Restaurant</h1>
        <p className="mb-[2%]">{descriptions[currentIndex]}</p>
        <OrderButton name="Order Now" />
      </div>
      <div className="mt-[10%] flex gap-[1%]">
        {descriptions.map((desc, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index == currentIndex ? "bg-amber-400 scale-150" : "bg-white"
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
