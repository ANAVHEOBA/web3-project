import React, { FC, useState } from "react";
import { AiOutlineInsertRowLeft, AiOutlineRight } from "react-icons/ai";
import Availabilities from "./Availabilities";
import CostConsultation from "./CostConsultation";
import OnlineConsultation from "./OnlineConsultation";

type preferenceStruct = {
  minAmount: number;
  callType: string[];
  language: string;
  date: string;
  startTime: string;
  endTime: string;
  days: string[];
};

type Props = {
  preference: preferenceStruct;
  setPreference: (preferenceData: preferenceStruct) => void;
};

const Preferences: React.FC<Props> = ({ preference, setPreference }) => {
  interface preferenceStruct {
    id: number;
    title: string;
    component: any;
  }
  const preferenceList: preferenceStruct[] = [
    {
      id: 1,
      title: "Cost of an Consultation",
      component: (
        <CostConsultation
          preference={preference}
          setPreference={setPreference}
        />
      ),
    },
    {
      id: 2,
      title: "Preferred means for online consultations",
      component: (
        <OnlineConsultation
          preference={preference}
          setPreference={setPreference}
        />
      ),
    },
    {
      id: 3,
      title: "Availabilities",
      component: (
        <Availabilities preference={preference} setPreference={setPreference}  />
      ),
    },
  ];
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="form-group">
      <h5 className="font-semibold text-2xl">Preferences</h5>
      <p className="text-[#585858]">
        This can be edited later on from the account settings.
      </p>
      <div className="space-y-5">
        {preferenceList.map((preferenceItem) => {
          return (
            <div
              key={preferenceItem.id}
              className={`px-2 py-2 border border-[#E6E9F4] rounded`}
            >
              <div className="flex justify-between">
                <span>{preferenceItem.title}</span>
                <AiOutlineRight
                  className={`h-6 w-6 cursor-pointer ${
                    activeTab === preferenceItem.id ? "rotate-90" : ""
                  }`}
                  onClick={() =>
                    setActiveTab(
                      activeTab == preferenceItem.id ? 0 : preferenceItem.id
                    )
                  }
                />
              </div>
              <div
                className={`${
                  activeTab == preferenceItem.id ? "" : "hidden"
                } mt-5`}
              >
                {preferenceItem.component}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preferences;
