import React, { useEffect, useState } from "react";
import DoctorAppointments from "./DoctorAppointments";
import DoctorGeneral from "./DoctorGeneral";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import { useAccount, useSigner } from "wagmi";
import { useProvider } from "wagmi";
import deDoctorABI from "@/constants/constants";
import { Dna } from "react-loader-spinner";

function DoctorDashboard() {
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const { address, isConnecting, isDisconnected } = useAccount();
  const [doctorData, setDoctorData] = useState<any>();
  const [doctorAppointmentList, setDoctorAppointmentList] = useState<any>();
  const fetchDoctorData = async () => {
    let patientRegisterContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      signer || provider
    );
    let traction = await patientRegisterContract.getDoctorByWalletAddress(
      address
    );
    let meta: any = await axios.get(traction.profileURI);
    meta = meta.data;
    let doctorId = traction.doctorId.toString();
    setDoctorData({ ...meta, doctorId });
    // let tx: any = await traction.wait();
    // console.log(tx);
  };

  const fetchDoctorAppointments = async () => {
    let patientRegisterContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      signer || provider
    );
    let traction = await patientRegisterContract.getAppointmentsByDoctorId(
      doctorData.doctorId
    );
    let newItems: any = await Promise.all(
      traction.map(async (d: any) => {
        return {
          doctorId: d.doctorId.toString(),
          patientId: d.patientId.toString(),
          pastSymptoms: d.pastSymptoms,
          symptoms: d.symptoms,
          time: d.time,
          date: d.date,
          appointmentId: d.id.toString(),
        };
      })
    );
    setDoctorAppointmentList(newItems);
  };

  useEffect(() => {
    if (address) {
      fetchDoctorData();
      console.log(doctorData);

      if (doctorData && doctorData.doctorId) {
        console.log("Start");
        console.log(doctorData.doctorId);

        fetchDoctorAppointments();
        console.log("End");
      }
    }
  }, [doctorData]);
  return (
    <div className="flex space-x-5 my-8 mx-5">
      <div className="">
        {doctorData ? (
          <DoctorGeneral doctorData={doctorData} />
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
      <div>
        {doctorAppointmentList ? (
          <DoctorAppointments doctorAppointmentList={doctorAppointmentList} />
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
}

export default DoctorDashboard;
