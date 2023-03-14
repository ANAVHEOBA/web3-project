import deDoctorABI from "@/constants/constants";
import generateIpfsMediaLink from "@/utils/generateIpfsLink";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import PharmacyCard from "./PharmacyCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAccount, useSigner } from "wagmi";
import { useProvider } from "wagmi";
import { ethers } from "ethers";
import { Dna } from "react-loader-spinner";

function Pharmacy() {
  interface pharmacyStruct {
    id: number;
    image: string;
    phone: string;
    address: string;
    dealer: string;
    name: string;
    openTime: string;
  }
  // const pharmacyList: pharmacyStruct[] = [
  //   {
  //     id: 1,
  //     image: "https://doccure.dreamguystech.com/react/template/fadc24e896c2cd4e740a7d4fc897a795.jpg",
  //     phone: "320-795-8815",
  //     address: "96 Red Hawk Road Cyrus, MN 56323",
  //     dealer: "Chemists, Surgical Equipment Dealer",
  //     name: "Medlife Medical",
  //     openTime: "08.00 AM",
  //   },
  //   {
  //     id: 2,
  //     image: "https://doccure.dreamguystech.com/react/template/5bced1551ff1b65ee32a43aa94be3848.jpg",
  //     phone: "913-631-2538",
  //     address: " 3830 Poe Lane Kansas City, KS 66216",
  //     dealer: "Chemists, Surgical Equipment Dealer",
  //     name: "PharmaMed Medical",
  //     openTime: "08.00 AM",
  //   },
  //   {
  //     id: 3,
  //     image: "https://doccure.dreamguystech.com/react/template/900acb527850e0374f71c347391a4114.jpg",
  //     phone: "816-270-2336",
  //     address: "3849 Nutter Street Ferrelview, MO 64163",
  //     dealer: "Chemists, Surgical Equipment Dealer",
  //     name: "The Pill Club Medical",
  //     openTime: "",
  //   },
  // ];

  const [pharmacyList, setPharmacyList] = useState<any>();
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const { address, isConnecting, isDisconnected } = useAccount();
  const updateData = async () => {
    let patientRegisterContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      signer || provider
    );
    let traction = await patientRegisterContract.getAllPharmacies();
    const data: any = traction;
    console.log(data);

    let newItems: any = await Promise.all(
      data.map(async (d: any) => {
        console.log(d);

        let meta: any = await axios.get(d.uri);
        meta = meta.data;
        console.log(meta);
        return {
          id: d.id.toString(),
          name: meta.name,
          address: meta.address,
          openTime: meta.startTime,
          dealer: meta.medicineSpecialization,
          image: generateIpfsMediaLink(meta.image),
          phone: "8877889988",
        };
      })
    );
    setPharmacyList(newItems);
  };

  useEffect(() => {
    updateData();
  });
  return (
    <div>
      <Breadcrumb heading="Pharmacies" subHeading="Home / Pharmacies" />
      <div className="mx-5">
        {pharmacyList ? (
          <div className="space-y-5 my-5">
            {pharmacyList &&
              pharmacyList.map((pharmacyData: any) => {
                return <PharmacyCard key={pharmacyData.id} {...pharmacyData} />;
              })}
          </div>
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
    </div>
  );
}

export default Pharmacy;
