import Image from "next/image";
import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function DeskNavbar() {
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
    <nav className="flex justify-between px-3 py-2 items-center border-b border-nav-border shadow">
      <div className="relative h-16 w-16">
        <Image src={"/logo-no-background.svg"} alt={"DeDoctor"} fill />
      </div>
      <div className="">
        <ul className="flex">
          {navItemList.map((navItem) => {
            return (
              <li key={navItem.id} className="px-3 py-1 cursor-pointer hover:text-primary-green duration-300 transition transform ease-out">
                {navItem.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
      <ConnectButton />
        {/* <button className="px-3 py-1 rounded-md border-2 border-primary-green text-primary-green transition transform ease duration-300 hover:text-white hover:bg-primary-green">
          Connect Wallet
        </button> */}
      </div>
    </nav>
  );
}

export default DeskNavbar;
