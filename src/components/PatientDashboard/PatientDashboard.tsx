import Image from "next/image";
import React, { useEffect, useState } from "react";
import MyAppointment from "./MyAppointment";
import { GoLocation } from "react-icons/go";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import NewAppointment from "./NewAppointment";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import { useAccount, useSigner } from "wagmi";
import { useProvider } from "wagmi";
import deDoctorABI from "@/constants/constants";
import generateIpfsMediaLink from "@/utils/generateIpfsLink";
import { Dna } from "react-loader-spinner";

function PatientDashboard() {
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const { address, isConnecting, isDisconnected } = useAccount();
  const [patientData, setPatientData] = useState<any>();
  const [doctorList, setDoctorList] = useState<any>();
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
      component: <NewAppointment doctorList={doctorList} />,
    },
  ];
  const [activeTab, setActiveTab] = useState<tabStruct>(tabList[0]);
  const fetchPatientData = async () => {
    let patientRegisterContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      signer || provider
    );
    let traction = await patientRegisterContract.getPatientByWalletAddress(
      address
    );
    console.log(traction);

    let meta: any = await axios.get(traction.patientUri);
    meta = meta.data;
    let patientId = traction.patientId.toString();
    setPatientData({ ...meta, patientId });
  };

  const fetchDoctorList = async () => {
    let patientRegisterContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      signer || provider
    );
    let traction = await patientRegisterContract.getAllDoctors();
    let newItems: any = await Promise.all(
      traction.map(async (d: any) => {
        console.log(d);
        let meta: any = await axios.get(d.profileURI);
        meta = meta.data;
        return {
          name: meta.name,
          category: meta.specialization,
          image: generateIpfsMediaLink(meta.image),
          address: meta.address,
          chargeStart: meta.minAmount,
          chargeEnd: 0,
          walletAddress: d.docAddress,
          slotTime: "",
          id: d.doctorId.toString(),
        };
      })
    );
    setDoctorList(newItems);
  };

  useEffect(() => {
    fetchPatientData();
    fetchDoctorList();
  }, []);
  return (
    <div className="flex space-x-5 my-8 mx-5">
      {patientData ? (
        <div className="px-4 py-4 border border-[#f0f0f0] rounded space-y-2 flex flex-col justify-between dark:border-dark-input-border dark:bg-dark-card">
          <div className="relative w-36 h-36">
            <Image
              src={generateIpfsMediaLink(patientData.image)}
              fill
              alt="logo"
              className="rounded-full"
            />
          </div>
          <h5 className="dark:text-white cursor-pointer hover:text-primary-green duration-300 transition transform ease-out">
            {patientData.name}
          </h5>
          <p className="dark:text-dark-muted">{patientData.description}</p>
          <div className="flex space-x-2 text-[#757575] items-center dark:text-dark-muted">
            <BsGenderAmbiguous className="h-6 w-6" />
            <span> {patientData.gender}</span>
          </div>
          <div className="flex space-x-2 text-[#757575] items-center dark:text-dark-muted">
            <FaBirthdayCake className="h-6 w-6" />
            <span> {patientData.dob}</span>
          </div>
          <div className="flex space-x-2 text-[#757575] items-center dark:text-dark-muted">
            <GoLocation className="h-6 w-6" />
            <span> {`${patientData.state} ${patientData.country}`}</span>
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
      ) : (
        <div className="flex justify-start items-center">
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
      {doctorList ? (
        <div>{activeTab.component}</div>
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
  );
}

export default PatientDashboard;
