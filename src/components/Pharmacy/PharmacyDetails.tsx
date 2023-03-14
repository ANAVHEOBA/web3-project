import React, { useEffect, useState } from "react";
import ProfileTab from "../DoctorProfile/ProfileTab";
import PharmacyGeneral from "./PharmacyGeneral";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAccount, useSigner } from "wagmi";
import { useProvider } from "wagmi";
import { ethers } from "ethers";
import deDoctorABI from "@/constants/constants";
import axios from "axios";
import generateIpfsMediaLink from "@/utils/generateIpfsLink";
import { Dna } from "react-loader-spinner";

function PharmacyDetails() {
  const router = useRouter();
  const { pharmacyId } = router.query;
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const { address, isConnecting, isDisconnected } = useAccount();
  const [pharmacyData, setPharmacyData] = useState<any>();

  const getFetchPharmacyData = async () => {
    let patientRegisterContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      signer || provider
    );
    let traction = await patientRegisterContract.getPharmacyById(pharmacyId);
    const data: any = traction;
    let meta: any = await axios.get(data.uri);
    meta = meta.data;
    let jsonData: any = {
      id: traction.id.toString(),
      name: meta.name,
      address: meta.address,
      openTime: meta.startTime,
      dealer: meta.medicineSpecialization,
      image: generateIpfsMediaLink(meta.image),
      phone: "8877889988",
      state: meta.state,
      city: meta.city,
    };

    setPharmacyData(jsonData);
  };

  useEffect(() => {
    if (pharmacyId) {
      getFetchPharmacyData();
    }
  }, []);
  return (
    <div className="px-5 py-5 m-5">
      <div>
        {pharmacyData ? (
          <PharmacyGeneral pharmacyData={pharmacyData} />
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
}

export default PharmacyDetails;
