import deDoctorABI from "@/constants/constants";
import generateIpfsMediaLink from "@/utils/generateIpfsLink";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import ProfileGeneral from "./ProfileGeneral";
import ProfileTab from "./ProfileTab";

const DoctorProfile: React.FC =() => {
  const router = useRouter();
  const { id } = router.query;
  const [doctorData, setDoctorData] = useState<any>();
  const deDoctorList = useContractRead({
    address: "0x139825F987F8a6E6980AC1BDf9D5f9046BE00361",
    abi: deDoctorABI,
    functionName: "getDoctorById",
    args: [id],
  });

  const updateData = async () => {
    const data: any = deDoctorList.data;
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
    if (deDoctorList.data && id) {
      updateData();

    }
  }, [deDoctorList.data]);

  return (
    <div className="px-5 py-5 m-5">
      <div>
        <ProfileGeneral doctorData={doctorData} />
      </div>
      <div>
        <ProfileTab />
      </div>
    </div>
  );
}

export default DoctorProfile;
