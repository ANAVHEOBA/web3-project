import deDoctorABI from "@/constants/constants";
import generateIpfsMediaLink from "@/utils/generateIpfsLink";

import axios from "axios";
import { ethers } from "ethers";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Dna } from "react-loader-spinner";
import { useAccount, useSigner } from "wagmi";
import { useProvider } from "wagmi";
// import { Chat } from "@pushprotocol/uiweb";


type props = {
  isShowModal: boolean;
  setIsShowModal: (isShowModal: boolean) => void;
  activeDoctorId: any;
};

const JoinAppointment: React.FC<props> = ({
  isShowModal,
  setIsShowModal,
  activeDoctorId,
}) => {
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const { address, isConnecting, isDisconnected } = useAccount();
  const [doctorData, setDoctorData] = useState<any>();
  const updateData = async () => {
    let patientRegisterContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      signer || provider
    );
    let traction = await patientRegisterContract.getDoctorById(activeDoctorId);
    const data: any = traction;
    let meta: any = await axios.get(data.profileURI);
    meta = meta.data;
    let jsonData: any = {
      name: meta.name,
      specialization: meta.specialization,
      image: generateIpfsMediaLink(meta.image),
      address: meta.address,
      chargeStart: meta.minAmount,
      chargeEnd: 0,
      slotTime: "",
      about: meta.description,
      city: meta.city,
      state: meta.state,
      price: meta.minAmount,
      walletAddress: data.docAddress,
      id: data.doctorId.toString(),
    };
    setDoctorData(jsonData);
  };

  useEffect(() => {
    if (activeDoctorId) {
      updateData();
    }
  }, [activeDoctorId]);
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {doctorData ? (
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-dark-card outline-none focus:outline-none dark:border dark:border-dark-input-border">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font=semibold dark:text-white">
                Doctor Details
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
              <div className="flex space-x-2">
                <FiUser className="h-6 w-6" />
                <span className="text-xl dark:text-primary-yellow">
                  {doctorData.name}
                </span>
              </div>
              <div className="flex space-x-2 dark:text-dark-muted">
                <span className="text-muted dark:text-dark-muted dark:font-semibold">
                  Wallet Address:
                </span>
                <span className="modal-heading">
                  {doctorData.walletAddress}
                </span>
              </div>
              <div className="flex space-x-2 dark:text-dark-muted">
                <span className="text-muted dark:text-dark-muted dark:font-semibold">
                  Gender:
                </span>
                {doctorData.walletAddress}
                <span className="modal-heading">{doctorData.gender}</span>
              </div>
              <div className="flex space-x-2 dark:text-dark-muted">
                <span className="text-muted dark:text-dark-muted dark:font-semibold">
                  Price:
                </span>
                <span className="modal-heading">{doctorData.price} SH</span>
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
              <Link
                href={`https://iframe.huddle01.com/${doctorData.walletAddress}`}
                target="_blank"
                className="submit-btn"
              >
                Join Meeting
              </Link>
            </div>
            {/* {address ? (
              <Chat
              account="0x6430C47973FA053fc8F055e7935EC6C2271D5174" //user address
              supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address
              apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
              env="staging"
            />
            ) : (
              ""
            )} */}
          </div>
        ) : (
          <div className="flex justify-end items-center">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinAppointment;
