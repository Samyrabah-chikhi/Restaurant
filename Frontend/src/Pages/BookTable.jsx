import OrderButton from "../Components/OrderButton";
import BookingInfos from "../Components/BookingInfos";

export default function BookTable() {
  return (
    <div className="h-[130vh] flex justify-center py-24">
      <div className="flex flex-col mx-16 w-full items-start justify-start gap-5 text-white">
        <h2 className="text-4xl my-1 text-black mx-2">Book A Table</h2>
        <div className="flex w-full h-full">
          <BookingInfos></BookingInfos>
          <div className="w-1/2 mx-2 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25574.146433497302!2d3.465193846826183!3d36.752132138367905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e695dab61fa39%3A0xbb6daad4b4ac59ba!2sWarriors%20league%20park%20-%20Army%20Barz%20team!5e0!3m2!1sfr!2sfr!4v1749934745418!5m2!1sfr!2sfr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <OrderButton></OrderButton>
      </div>
    </div>
  );
}
