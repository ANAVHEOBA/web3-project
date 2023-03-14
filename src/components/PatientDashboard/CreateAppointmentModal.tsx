import deDoctorABI from "@/constants/constants";
import { ethers } from "ethers";
import { NFTStorage } from "nft.storage";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useAccount, useProvider, useSigner } from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";

type props = {
  isShowModal: boolean;
  setIsShowModal: (isShowModal: boolean) => void;
  selectedDoctor: any;
  // patientId: any;
};

const CreateAppointmentModal: React.FC<props> = ({
  isShowModal,
  setIsShowModal,
  selectedDoctor,
  // patientId,
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
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const { address, isConnecting, isDisconnected } = useAccount();
  const [loading, setLoading] = useState<boolean>(false);

  const createAppointment = async () => {
    try {
      setLoading(true);
      let patientRegisterContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
        deDoctorABI,
        signer || provider
      );
      console.log(appointmentData);
      
      let traction = await patientRegisterContract.createAppointment(
        localStorage.getItem('patientId')?.toString(),
        selectedDoctor.id,
        appointmentData.symptoms,
        appointmentData.pastSymptoms,
        appointmentData.date,
        appointmentData.time,
      );
      let tx = await traction.wait();
      setLoading(false);
      setIsShowModal(false)
      toast.success("Appointment Create successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error: any) {
      setLoading(true);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <ToastContainer theme="light" />
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
                className="submit-btn flex space-x-2 items-center h-14"
                type="button"
                onClick={createAppointment}
              >
                {loading ? (
                  <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                ) : (
                  ""
                )}
                <span>Create Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAppointmentModal;
