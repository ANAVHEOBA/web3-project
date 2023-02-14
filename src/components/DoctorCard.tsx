import Image from "next/image";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BiTime, BiMoney } from "react-icons/bi";

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

function DoctorCard(doctorItem: doctorStruct) {
  return (
    <div className="p-3 bg-white rounded-md shadow-lg space-y-2">
      <div className="relative h-36 w-full">
        <Image src={doctorItem.image} alt={doctorItem.name} fill className="rounded-md" />
      </div>
      <h4 className="text-[#272b41] font-medium text-lg">{doctorItem.name}</h4>
      <p className="text-[#757575] text-sm">{doctorItem.category}</p>
      <div className="text-[#757575] space-y-2">
        <div className="flex space-x-2">
          <MdLocationOn className="h-5 w-5" />
          <span>{doctorItem.address}</span>
        </div>
        <div className="flex space-x-2">
          <BiTime className="h-5 w-5" />
          <span>{doctorItem.slotTime}</span>
        </div>
        <div className="flex space-x-2">
          <BiMoney className="h-5 w-5" />
          <span>{`$${doctorItem.chargeStart} - $${doctorItem.chargeEnd}`}</span>
        </div>
      </div>
      <div className="flex space-x-3 items-center">
        <button className="px-2 py-2 border border-primary-blue rounded-md text-primary-blue">View Profile</button>
        <button className="px-2 py-2 bg-primary-blue rounded-md text-white">Book Now</button>
      </div>
    </div>
  );
}

export default DoctorCard;
