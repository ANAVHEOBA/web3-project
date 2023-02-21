import Image from "next/image";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { MdCallEnd, MdCall } from "react-icons/md";

function VideoCall() {
  return (
    <div className="px-5 py-5 border border-[#f0f0f0] m-5 dark:border-dark-input-border dark:bg-dark-card">
      <div className="flex justify-between items-center border-b pb-2 dark:border-dark-input-border">
        <div className="flex space-x-2 items-center">
          <div className="relative w-14 h-14">
            <Image
              src={
                "https://doccure.dreamguystech.com/react/template/bc4e8d916b11472fc8050d8ff94e9a9a.jpg"
              }
              alt={"logo"}
              fill
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <span className="dark:text-white">00089895dsgdsg09ff</span>
            <span>Online</span>
          </div>
        </div>
        <div>
          <FiSettings className="h-6 w-6" />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="relative h-64 w-96">
          <Image
            src={
              "https://doccure.dreamguystech.com/react/template/16f6e25302c81711232d1da23315b38a.jpg"
            }
            alt={"logo"}
            fill
          />
        </div>
      </div>
      <div className="flex justify-between px-2 py-2 items-center">
        <div>
          <span>00:59</span>
        </div>
        <div className="flex space-x-2">
          <div className="rounded-full text-center border p-3 ">
            <AiOutlineVideoCamera className="w-8 h-8" />
          </div>
          <div className="rounded-full text-center border p-3">
            <BsFillMicFill className="w-8 h-8" />
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="rounded-full text-center border p-3 bg-green-700 text-white">
            <MdCall className="w-8 h-8" />
          </div>
          <div className="rounded-full text-center border p-3 bg-[#f06060] text-white">
            <MdCallEnd className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCall;
