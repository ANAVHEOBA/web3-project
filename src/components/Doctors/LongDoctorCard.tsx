import Image from "next/image";
import React from "react";
import { BiChat, BiMoney } from "react-icons/bi";
import { BsBookmark, BsChat, BsFillCameraVideoOffFill, BsTelephoneFill } from "react-icons/bs";
import { GoLocation, GoThumbsup } from "react-icons/go";

interface doctorStruct {
  id: number;
  name: string;
  category: string;
  image: string;
  address: string;
  slotTime: string;
  chargeStart: number;
  chargeEnd: number;
}

function LongDoctorCard(doctorData: doctorStruct) {
  return (
    <div className="px-4 py-4 border border-[#f0f0f0] flex justify-between">
      <div className="flex space-x-2">
        <div className="relative h-32 w-32">
          <Image
            src={doctorData.image}
            alt={doctorData.name}
            fill
            className="rounded-lg"
          />
        </div>
        <div>
          <h3>{doctorData.name}</h3>
          <p>{doctorData.category}</p>
          <div className="flex space-x-2 text-[#757575] items-center">
            <GoLocation className="h-6 w-6" />
            <span> Newyork, USA</span>
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-2 items-center mx-auto md:mx-0">
          <div className="space-y-2 text-[#4E4852]">
            <div className="flex space-x-2 items-center">
              <GoThumbsup className="h-6 w-6" />
              <span>99%</span>
            </div>
            <div className="flex space-x-2 items-center">
              <BsChat className="h-6 w-6" />
              <span>35 Feedback</span>
            </div>
            <div className="flex space-x-2 items-center">
              <GoLocation className="h-6 w-6" />
              <span>Newyork, USA</span>
            </div>
            <div className="flex space-x-2 items-center">
              <BiMoney className="h-6 w-6" />
              <span>$100 per hour</span>
            </div>
          </div>
          <button className="px-3 py-2 bg-primary-blue text-white rounded-md text-xl">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default LongDoctorCard;