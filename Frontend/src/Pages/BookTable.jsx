import OrderButton from "../Components/OrderButton"
import BookingInfos from "../Components/BookingInfos";

export default function BookTable() {
  return (
    <div className="h-[130vh] flex justify-center py-24">
      <div className="flex flex-col mx-16 w-full items-start justify-start gap-5 text-white">
        <h2 className="text-4xl my-1 text-black mx-2">Book A Table</h2>
        <div className="flex w-full h-full">
          <BookingInfos></BookingInfos>
          <div className="w-1/2 mx-2 bg-amber-800"></div>
        </div>
        <OrderButton></OrderButton>
      </div>
    </div>
  );
}
