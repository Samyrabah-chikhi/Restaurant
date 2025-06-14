import React from "react";

export default function BookingInfos() {
  const places = [2, 3, 4, 5];
  return (
    <div className="w-1/2 flex flex-col justify-between mx-2 text-black">
      <input
        type="text"
        placeholder="Your Name"
        className="h-14 px-6 font-semibold border border-gray-400 rounded-md focus:outline-none "
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="h-14 px-6 font-semibold border border-gray-400 rounded-md focus:outline-none "
      />
      <input
        type="text"
        placeholder="Your Email"
        className="h-14 px-6 font-semibold border border-gray-400 rounded-md focus:outline-none "
      />

      <select
        defaultValue=""
        placeholder="How Many Persons?"
        className="h-14 px-6 border border-gray-400 rounded-md focus:outline-none "
      >
        <option value="" disabled={true}>
          How Many Persons?
        </option>
        {places.map((number, _) => {
          return (
            <option value={number} key={number}>
              {number}
            </option>
          );
        })}
      </select>
      <input
        type="date"
        placeholder="mm/dd/yyyy"
        className="h-14 px-6 border border-gray-400 rounded-md focus:outline-none "
      />
    </div>
  );
}
