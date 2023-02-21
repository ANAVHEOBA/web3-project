import useIPFS from "@/hooks/storeIpfs";
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
  submitIpfs: () => void;
};

const Availabilities: React.FC<Props> = ({
  preference,
  setPreference,
  submitIpfs,
}) => {
  const daysList = [
    {
      key: 1,
      day: "Monday",
      shortDay: "M",
    },
    {
      key: 2,
      day: "Tuesday",
      shortDay: "T",
    },
    {
      key: 3,
      day: "Wednesday",
      shortDay: "W",
    },
    {
      key: 4,
      day: "Thursday",
      shortDay: "T",
    },
    {
      key: 5,
      day: "Friday",
      shortDay: "F",
    },
    {
      key: 6,
      day: "Saturday",
      shortDay: "S",
    },
    {
      key: 7,
      day: "Sunday",
      shortDay: "S",
    },
  ];
  return (
    <div className="space-y-3 flex flex-col">
      <h5 className="font-semibold text-2xl">Add availability*</h5>
      <p className="text-[#585858] dark:text-white">
        Visitors will only be able to schedule appointments during available
        hours.
      </p>
      <div className="input-group">
        <label className="input-label" htmlFor="date">
          Date *
        </label>
        <input
          type={"date"}
          id="date"
          className="input-box"
          placeholder="Enter Date"
          value={preference.date}
          onChange={(e) =>
            setPreference({
              ...preference,
              date: e.currentTarget.value,
            })
          }
        />
      </div>
      <label className="input-label">Time will you be available?</label>
      <div className="flex flex-col md:flex-row space-x-2">
        <div className="input-group">
          <label className="input-label" htmlFor="startTime">
            Start Time *
          </label>
          <input
            type={"time"}
            id="startTime"
            className="input-box"
            placeholder="City"
            value={preference.startTime}
            onChange={(e) =>
              setPreference({
                ...preference,
                startTime: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="endTime">
            End Time *
          </label>
          <input
            type={"time"}
            id="endTime"
            className="input-box"
            placeholder="State"
            value={preference.endTime}
            onChange={(e) =>
              setPreference({
                ...preference,
                endTime: e.currentTarget.value,
              })
            }
          />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">
          Choose any day of the week to repeat this availability.
        </label>
        <div className="flex flex-wrap space-y-2 space-x-2">
          {daysList.map((dayItem) => {
            return (
              <div
                key={dayItem.key}
                title={dayItem.day}
                className="border rounded-md px-3 py-2 cursor-pointer dark:border-dark-input-border dark:bg-dark-blue-input"
              >
                {dayItem.shortDay}
              </div>
            );
          })}
        </div>
      </div>
      <button className="submit-btn w-40" onClick={submitIpfs}>Save</button>
    </div>
  );
};

export default Availabilities;
