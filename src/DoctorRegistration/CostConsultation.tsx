import React from "react";

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

const CostConsultation: React.FC<Props> = ({ preference, setPreference }) => {
  return (
    <div className="space-y-3  flex flex-col">
      <h5 className="font-semibold text-2xl dark:text-white">
        What is the maximum cost perconsultation?*
      </h5>
      <p className="text-[#585858] dark:text-dark-muted">
        This can be edited later on from the preferences section.
      </p>
      <input
        className="input-box"
        placeholder="Enter Amount"
        value={preference.minAmount}
        onChange={(e) =>
          setPreference({
            ...preference,
            minAmount: parseFloat(e.currentTarget.value),
          })
        }
      />
      <button className="submit-btn w-40">Save</button>
    </div>
  );
};

export default CostConsultation;
