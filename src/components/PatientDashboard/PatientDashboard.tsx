import Image from "next/image";
import React, { useState } from "react";
import MyAppointment from "./MyAppointment";
import { GoLocation } from "react-icons/go";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import NewAppointment from "./NewAppointment";

function PatientDashboard() {
  interface tabStruct {
    id: number;
    title: string;
    component: any;
  }
  const tabList: tabStruct[] = [
    {
      id: 1,
      title: "My Appointment",
      component: <MyAppointment />,
    },
    {
      id: 2,
      title: "New Appointment",
      component: <NewAppointment />,
    },
  ];
  const [activeTab, setActiveTab] = useState<tabStruct>(tabList[0]);
  return (
    <div className="flex space-x-5 my-8 mx-5">
      <div className="px-4 py-4 border border-[#f0f0f0] rounded space-y-2 flex flex-col justify-between dark:border-dark-input-border dark:bg-dark-card">
        <div className="relative w-36 h-36">
          <Image
            src={"/find_doctor.jpg"}
            fill
            alt="logo"
            className="rounded-full"
          />
        </div>
        <h5 className="dark:text-white cursor-pointer hover:text-primary-green duration-300 transition transform ease-out">
          Dr.Nayan Radadiya
        </h5>
        <p className="dark:text-dark-muted">
          {"Cardigraphy Sonograpgy analyst and Fever"}
        </p>
        <div className="flex space-x-2 text-[#757575] items-center dark:text-dark-muted">
          <BsGenderAmbiguous className="h-6 w-6" />
          <span> {`Male`}</span>
        </div>
        <div className="flex space-x-2 text-[#757575] items-center dark:text-dark-muted">
          <FaBirthdayCake className="h-6 w-6" />
          <span> {`23-05-1997`}</span>
        </div>
        <div className="flex space-x-2 text-[#757575] items-center dark:text-dark-muted">
          <GoLocation className="h-6 w-6" />
          <span> {`Newyork Australiz`}</span>
        </div>
        <div className="flex space-x-4">
          {tabList.map((tabItem) => {
            return (
              <div
                onClick={() => setActiveTab(tabItem)}
                className="border-b py-2"
                key={tabItem.id}
              >
                {tabItem.title}
              </div>
            );
          })}
        </div>
      </div>
      <div>
          {activeTab.component}
      </div>
    </div>
  );
}

export default PatientDashboard;
