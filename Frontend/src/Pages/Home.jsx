import OrderButton from "../Components/OrderButton";
import hero from "../Components/Assets/hero-bg.jpg";
export default function Home() {
  return (
    <div className="">
      <img src={hero} className="absolute top-0 left-0 z-[-1]" />
      <div className="m-[5%] flex flex-col justify-center max-w-1/2 gap-4">
        <h1 className="text-5xl">Fast Food Restaurant</h1>
        <p>
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laborum quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </p>
        <OrderButton name="Order Now" />
      </div>
    </div>
  );
}
