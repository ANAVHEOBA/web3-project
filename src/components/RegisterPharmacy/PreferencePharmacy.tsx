import React from "react";

type pharmacyPreference = {
  openDays: string[];
  startTime: string;
  endTime: string;
};

type props = {
  pharmacyPreferenceData: pharmacyPreference;
  setPharmacyPreferenceData: (
    pharmacyPreferenceData: pharmacyPreference
  ) => void;
  onSubmitPharmacy : () => void;
};

const PreferencePharmacy: React.FC<props> = ({
  pharmacyPreferenceData,
  setPharmacyPreferenceData,
  onSubmitPharmacy
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
    <div className="form-group">
      <h5 className="font-semibold text-2xl">Add availability*</h5>
      <p className="text-[#585858]">
        Visitors will only be able to schedule appointments during available
        hours.
      </p>
      <div className="input-group">
        <label className="input-label">
          Choose any day of the week to repeat this availability.
        </label>
        <div className="flex flex-wrap space-y-2 gap-x-2">
          {daysList.map((dayItem) => {
            return (
              <div
                key={dayItem.key}
                title={dayItem.day}
                className="border rounded-md px-3 py-2 cursor-pointer"
              >
                {dayItem.shortDay}
              </div>
            );
          })}
        </div>
      </div>
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
            value={pharmacyPreferenceData.startTime}
            onChange={(e) =>
              setPharmacyPreferenceData({
                ...pharmacyPreferenceData,
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
            value={pharmacyPreferenceData.endTime}
            onChange={(e) =>
              setPharmacyPreferenceData({
                ...pharmacyPreferenceData,
                endTime: e.currentTarget.value,
              })
            }
          />
        </div>
      </div>
      <button className="submit-btn w-40" onClick={onSubmitPharmacy}>Save</button>
    </div>
  );
};

export default PreferencePharmacy;
