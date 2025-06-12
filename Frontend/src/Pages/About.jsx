import about_img from "../Components/Assets/about-img.png";

export default function About() {
  return (
    <div className="py-[7%] bg-gray-800 h-full w-full text-white flex items-center justify-center">
      <div className="w-1/2 flex justify-end mr-16">
        <img src={about_img} className="w-3/4" />
      </div>
      <div className=" w-1/2 flex flex-col gap-5">
        <h2 className="text-4xl">We Are Feane</h2>
        <p className="text-lg">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
        </p>
        <button className="w-44 h-12 bg-amber-400 active:bg-amber-400 hover:bg-amber-600 hover:text-gray-300 transition duration-500 cursor-pointer rounded-4xl">
          Read More
        </button>
      </div>
    </div>
  );
}
