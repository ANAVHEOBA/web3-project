import deDoctorABI from "@/constants/constants";
import generateIpfsMediaLink from "@/utils/generateIpfsLink";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import LongDoctorCard from "./LongDoctorCard";

function Doctors() {
  interface doctorStruct {
    id: number;
    name: string;
    category: string;
    image: string;
    address: string;
    slotTime: string;
    chargeStart: number;
    chargeEnd: number;
  }

  const deDoctorList = useContractRead({
    address: "0x139825F987F8a6E6980AC1BDf9D5f9046BE00361",
    abi: deDoctorABI,
    functionName: "getAllDoctors",
  });
  const [doctorData, setDoctorData] = useState<any>();
  const updateData = async () => {
    const data: any = deDoctorList.data;
    let newItems: any = await Promise.all(
      data.map(async (d: any) => {
        console.log(d);
        let meta: any = await axios.get(d.profileURI);
        meta = meta.data;
        console.log(meta);
        return {
          name: meta.name,
          category: meta.specialization,
          image: generateIpfsMediaLink(meta.image),
          address: meta.address,
          chargeStart: meta.minAmount,
          chargeEnd: 0,
          slotTime: "",
          id: d.doctorId.toString(),
        };
      })
    );
    setDoctorData(newItems);
  };
  
  useEffect(() => {
    updateData();
  }, [deDoctorList.data]);

  return (
    <div>
      <Breadcrumb />
      <div className="mx-5 my-3 space-y-3">
        {doctorData &&
          doctorData.map((doctorData: any) => {
            return <LongDoctorCard key={doctorData.id} {...doctorData} />;
          })}
      </div>
    </div>
  );
}

export default Doctors;
