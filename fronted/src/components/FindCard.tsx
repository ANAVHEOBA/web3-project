import Image from "next/image";
import React from "react";

interface findStruct{
    id: number;
    title: string;
    image: string;
    btnName: string;
    path: string;
}

function FindCard(findItem: findStruct) {
  return (
    <div className="relative rounded-lg" key={findItem.id}>
      <div className="relative h-60 w-72">
        <Image
          src={findItem.image}
          alt={findItem.title}
          fill
          className="brightness-90 rounded-md"
        />
      </div>
      <div className="absolute top-[50%] left-[10%]">
        <p className="text-white text-2xl font-semibold">{findItem.title}</p>
        <button className="bg-primary-blue font-semibold px-2 py-2 text-white">
          {findItem.btnName}
        </button>
      </div>
    </div>
  );
}

export default FindCard;
