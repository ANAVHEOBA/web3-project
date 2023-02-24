import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdClose } from "react-icons/md";

type props = {
  isShowModal: boolean;
  setIsShowModal: (isShowModal: boolean) => void;
};

const CreateAppointmentModal: React.FC<props> = ({
  isShowModal,
  setIsShowModal,
}) => {
  interface appointmentStruct {
    symptoms: string;
    pastSymptoms: string;
    date: string;
    time: string;
  }
  const [appointmentData, setAppointmentData] = useState<appointmentStruct>({
    symptoms: "",
    pastSymptoms: "",
    date: "",
    time: "",
  });

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-dark-card outline-none focus:outline-none dark:border dark:border-dark-input-border">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font=semibold dark:text-white">
                Create new appointment
              </h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => setIsShowModal(false)}
              >
                <span className="text-black opacity-7 px-2 py-2 text-xl block bg-gray-400  rounded-full">
                  <MdClose className="h-5 w-5" />
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto space-y-2">
              <div className="input-group">
                <label className="input-label" htmlFor="symptoms">
                  Symptoms *
                </label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  className="input-box md:w-[30rem] h-20"
                  placeholder="Briefly describe your current symptoms"
                  value={appointmentData.symptoms}
                  onChange={(e) =>
                    setAppointmentData({
                      ...appointmentData,
                      symptoms: e.currentTarget.value,
                    })
                  }
                />
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="pastSymptoms">
                  Past History *
                </label>
                <textarea
                  id="pastSymptoms"
                  name="pastSymptoms"
                  className="input-box md:w-[30rem] h-20"
                  placeholder="Briefly describe your past symptoms"
                  value={appointmentData.pastSymptoms}
                  onChange={(e) =>
                    setAppointmentData({
                      ...appointmentData,
                      pastSymptoms: e.currentTarget.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col md:flex-row space-x-2">
                <div className="input-group">
                  <label className="input-label" htmlFor="date">
                    AppointMent Date *
                  </label>
                  <input
                    type={"date"}
                    id="date"
                    name="date"
                    className="input-box w-60"
                    placeholder="AppointMent Date"
                    value={appointmentData.date}
                    onChange={(e) =>
                      setAppointmentData({
                        ...appointmentData,
                        date: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label className="input-label" htmlFor="time">
                    Appoint Time *
                  </label>
                  <input
                    type={"time"}
                    id="time"
                    name="time"
                    className="input-box w-60"
                    placeholder="Time"
                    value={appointmentData.time}
                    onChange={(e) =>
                      setAppointmentData({
                        ...appointmentData,
                        time: e.currentTarget.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setIsShowModal(false)}
              >
                Close
              </button>
              <button
                className="submit-btn"
                type="button"
                onClick={() => setIsShowModal(false)}
              >
                Create Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAppointmentModal;
