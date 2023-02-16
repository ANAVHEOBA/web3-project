import React from "react";
import { IconType } from "react-icons";
import {
  AiTwotoneAudio,
  AiOutlineVideoCameraAdd,
  AiOutlineWechat,
} from "react-icons/ai";

function OnlineConsultation() {
  const callTypeList = [
    {
      key: 1,
      title: "Audio call",
      icon: AiTwotoneAudio,
    },
    {
      key: 1,
      title: "Video call",
      icon: AiOutlineVideoCameraAdd,
    },
    {
      key: 1,
      title: "Chat",
      icon: AiOutlineWechat,
    },
  ];
  return (
    <div className="space-y-3  flex flex-col">
      <h5 className="font-semibold text-2xl">
        Which are your preferred means of online consultation?
      </h5>
      <p className="text-[#585858]">
        You can select more than one from the below. These will show up as
        options for the patient when booking an appointment.
      </p>
      <div className="flex space-x-2">
        {callTypeList.map((callTypeItem) => {
          return (
            <div
              key={callTypeItem.key}
              className="flex space-x-2 px-2 py-2 border border-[#E6E9F4] rounded-md"
            >
              <callTypeItem.icon className="h-6 w-6" />
              <span>{callTypeItem.title}</span>
            </div>
          );
        })}
      </div>
      <p className="text-[#585858]">
        Choose your preferred language for Audio, Video calls and chat. You can
        select more than one option.
      </p>
      <div className="input-group">
        <label className="input-label" htmlFor="language">
          Language *
        </label>
        <select className="input-box" placeholder="Select Language" id="language">
          <option>French</option>
          <option>Hindi</option>
          <option>English</option>
          <option>Tamil</option>
        </select>
      </div>
      <button className="submit-btn w-40">Save</button>
    </div>
  );
}

export default OnlineConsultation;
