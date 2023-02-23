import React from "react";
import { IconType } from "react-icons";
import { TbStethoscope } from "react-icons/tb";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdLocalPharmacy } from "react-icons/md";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import RegisterCard from "./RegisterCard";

function SelectRegister() {
  interface registerTypeStruct {
    id: number;
    icon: IconType;
    title: string;
    description: string;
    routeRegister: string;
    routeLogin: string;
  }
  const registerTypeList: registerTypeStruct[] = [
    {
      id: 1,
      icon: TbStethoscope,
      title: "Sign/Login in as Doctor",
      description:
        "Connect with your patients and manage your clinic with ease. Get started with deDoctor today.",
        routeRegister: "/doctor_registration",
        routeLogin: "/doctor_dashboard"
    },
    {
      id: 2,
      icon: BsFillPersonPlusFill,
      title: "Sign/Login In as Patient",
      description:
        "Connect with your doctors and manage your health with ease. Get started with deDoctor today.",
        routeRegister: "/register_patient",
        routeLogin: "/register_patient"
    },
    {
      id: 3,
      icon: MdLocalPharmacy,
      title: "Register/Login Pharmacy",
      description: "Pharmacy show our user and buy ans sell with contact you",
      routeRegister: "/register_pharmacy",
      routeLogin: "/register_pharmacy"
    },
  ];
  return (
    <div>
      <Breadcrumb />
      <div className="grid grid-cols-3 mx-5 gap-x-4 mb-10">
        {registerTypeList.map((registerTypeItem: registerTypeStruct) => {
          return (
            <RegisterCard key={registerTypeItem.id} {...registerTypeItem} />
          );
        })}
      </div>
    </div>
  );
}

export default SelectRegister;
