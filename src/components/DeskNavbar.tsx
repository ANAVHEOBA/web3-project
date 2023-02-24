import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";

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
      url: "/doctors",
    },
    {
      id: 3,
      name: "Pharmacy",
      url: "/pharmacies",
    },
    {
      id: 4,
      name: "Register",
      url: "/register",
    },
  ];
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex justify-between px-3 py-2 items-center border-b border-nav-border shadow dark:border-[#A0AABA2B]">
      <div className="relative h-16 w-16">
        <Image src={"/logo-no-background.svg"} alt={"DeDoctor"} fill />
      </div>
      <div className="">
        <ul className="flex">
          {navItemList.map((navItem) => {
            return (
              <li key={navItem.id}>
                <Link
                  href={navItem.url}
                  className="px-3 py-1 cursor-pointer hover:text-primary-green duration-300 transition transform ease-out dark:text-white dark:hover:text-[#FCAF31] dark:font-semibold"
                >
                  {navItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          className="submit-btn"
        >
          {theme === "light" ? (
            <MdOutlineDarkMode className="w-6 h-6" />
          ) : (
            <MdLightMode className="w-6 h-6" />
          )}
        </button>
        <ConnectButton />
        {/* <button className="px-3 py-1 rounded-md border-2 border-primary-green text-primary-green transition transform ease duration-300 hover:text-white hover:bg-primary-green">
          Connect Wallet
        </button> */}
      </div>
    </nav>
  );
}

export default DeskNavbar;
