import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons";

interface registerTypeStruct {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  routeRegister: string;
  routeLogin: string;

}

function RegisterCard(registerTypeItem: registerTypeStruct) {
  const route = useRouter();

  return (
    <div className="px-4 py-4 border border-[#f0f0f0] flex flex-col space-y-2 rounded-md dark:border-dark-input-border dark:bg-dark-card justify-center">
      <registerTypeItem.icon className="h-10 w-10" />
      <h5 className="font-semibold text-xl">{registerTypeItem.title}</h5>
      <p>{registerTypeItem.description}</p>
      <div className="flex space-x-3">
        <button
          className="submit-btn"
          onClick={() => route.push(registerTypeItem.routeRegister)}
        >
          Register
        </button>
        <button
          className="submit-btn"
          onClick={() => route.push(registerTypeItem.routeLogin)}
        >
          Login/View Dashboard
        </button>
      </div>
    </div>
  );
}

export default RegisterCard;
