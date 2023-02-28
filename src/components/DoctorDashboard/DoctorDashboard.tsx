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

  const fetchDoctorData = async () => {
    let patientRegisterContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      signer || provider
    );
    let traction = await patientRegisterContract.getDoctorByWalletAddress(
      address
    );
    console.log(traction);
    let meta: any = await axios.get(traction.profileURI);
    meta = meta.data;
    console.log(meta);
    setDoctorData(meta);
    // let tx: any = await traction.wait();
    // console.log(tx);
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);
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
        <DoctorAppointments />
      </div>
    </div>
  );
}

export default DoctorDashboard;
