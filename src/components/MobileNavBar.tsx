import Image from "next/image";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function MobileNavBar() {
  const [isVisibleNav, setIsVisibleNav] = useState(false);
  const navItemList = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Doctors",
      url: "/",
    },
    {
      id: 3,
      name: "Pharmacy",
      url: "/",
    },
  ];
  return (
    <nav className=" px-3 py-2">
      <div className="flex items-center justify-between">
        <div className="relative h-16 w-16">
          <Image src={"/logo-no-background.svg"} alt={"DeDoctor"} fill />
        </div>
        <div className="flex items-center">
          <button className="px-3 py-1 rounded-md border-2 border-primary-green text-primary-green transition transform ease duration-300 hover:text-white hover:bg-primary-green">
            Connect Wallet
          </button>
          {isVisibleNav ? (
            <AiOutlineClose
              className="h-10 w-10 cursor-pointer"
              onClick={() => setIsVisibleNav(!isVisibleNav)}
            />
          ) : (
            <BiMenu
              className="h-10 w-10 cursor-pointer"
              onClick={() => setIsVisibleNav(!isVisibleNav)}
            />
          )}
        </div>
      </div>

      <div
        className={`${
          isVisibleNav ? "" : "hidden"
        } transition transform ease-linear duration-300 z-10`}
      >
        <ul className=" space-y-2">
          {navItemList.map((navItem) => {
            return (
              <li key={navItem.id} className="px-2 cursor-pointer py-1 hover:text-white hover:bg-gray-300 transition transform duration-300 ease-linear rounded-md">
                {navItem.name}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default MobileNavBar;
