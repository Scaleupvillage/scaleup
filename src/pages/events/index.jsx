import { seperateEvents } from "@/constants/events";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Events = () => {
  return (
    <div className="py-[100px] custom-container" id="events-seperate">
      <h1 className="title wave-before text-[18px] lg:text-[36px]">
        Events required Separate Registration{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-4">
        {seperateEvents.map((event, index) => (
          <div key={index}>
            <Image
              src={event.image}
              width="100"
              height="100"
              alt={event.title}
              className="rounded-lg w-full object-contain   h-[200px]"
            />

            <div className="px-3">
              <h2 className="font-bold mt-2">{event.title}</h2>
              <div className="text-sm lg:text-base">{event.price}</div>
              <Link
                href={event.registration}
                className=" mt-4 font-semibold bg-primary-yellow px-3 py-2 rounded-full w-full text-sm flex justify-center items-center"
              >
                {event.regCaption}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
