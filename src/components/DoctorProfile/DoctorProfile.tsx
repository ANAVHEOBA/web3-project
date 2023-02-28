import deDoctorABI from "@/constants/constants";
import generateIpfsMediaLink from "@/utils/generateIpfsLink";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import ProfileGeneral from "./ProfileGeneral";
import ProfileTab from "./ProfileTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAccount, useSigner } from "wagmi";
import { useProvider } from "wagmi";
import { ethers } from "ethers";
import { Dna } from "react-loader-spinner";

const DoctorProfile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [doctorData, setDoctorData] = useState<any>();
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const { address, isConnecting, isDisconnected } = useAccount();

  const updateData = async () => {
    let patientRegisterContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      signer || provider
    );
    let traction = await patientRegisterContract.getDoctorById(id);
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
    if (id) {
      updateData();
    }
  }, []);

  return (
    <div className="px-5 py-5 m-5">
      <div>
        {doctorData ? (
          <ProfileGeneral doctorData={doctorData} />
        ) : (
          <div className="flex justify-center items-center">
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
        <ProfileTab />
      </div>
    </div>
  );
};

export default DoctorProfile;
