import React, { useState } from "react";
import DoctorVerification from "./DoctorVerification";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Preferences from "./Preferences";
import UploadIdentification from "./UploadIdentification";
import { useSelector, useDispatch } from "react-redux";
import { updateStep } from "@/features/doctorStepSlice";
import { RootState } from "@/store";
import useIPFS from "@/hooks/storeIpfs";
import {
  useContract,
  useSigner,
  useProvider,
  useContractWrite,
} from "wagmi";
import deDoctorABI from "@/constants/constants";
import { ethers } from "ethers";
import { useAccount } from "wagmi";

type personalData = {
  name: string;
  gender: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  about: string;
};

type identificationStruct = {
  docNumber: string;
  docType: string;
};

type medicalCouncilStruct = {
  councilNumber: string;
  specialization: string;
};

type preferenceStruct = {
  minAmount: number;
  callType: string[];
  language: string;
  date: string;
  startTime: string;
  endTime: string;
  days: string[];
};

const DoctorRegistration: React.FC = () => {
  const { address } = useAccount();
  const doctorStep = useSelector((state: RootState) => state.doctorStep.value);
  const dispatch = useDispatch();
  // Personal Data
  const [personalData, setPersonalData] = useState<personalData>({
    name: "",
    about: "",
    address: "",
    city: "",
    dob: "",
    gender: "",
    state: "",
  });
  const [userImage, setUserImage] = useState<any>();
  // identification Data
  const [identificationData, setIdentificationData] =
    useState<identificationStruct>({
      docNumber: "",
      docType: "",
    });
  const [identificationDoc, setIdentificationDoc] = useState<any>();
  // doctor verification
  const [medicalCouncilData, setMedicalCouncilData] =
    useState<medicalCouncilStruct>({
      councilNumber: "",
      specialization: "",
    });
  const [councilFile, setCouncilFile] = useState<any>();
  // preference
  const [preference, setPreference] = useState<preferenceStruct>({
    minAmount: 0,
    callType: [""],
    date: "",
    days: [""],
    startTime: "",
    language: "",
    endTime: "",
  });
  // const {contractData, isLoading, serverError} = useSmartContract();
  const { data: signer, isError, isLoading } = useSigner();
  const provider = useProvider();

  const contract = useContract({
    address: process.env.DEDOCTOR_SMART_CONTRACT || "",
    abi: deDoctorABI,
    signerOrProvider: signer,
  });
  // const { data, isRefetching, isSuccess, refetch } = useContractRead({
  //   address: "0xC9aBeA6E1e4294fC2653180F7eD3AD001427c692",
  //   abi: deDoctorABI,
  //   functionName: "getAllDoctors",
  // });

  const { write, data, error, isSuccess } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: "0x752af2Fe8473819728303C75B6740A2Df5e200fB",
    abi: deDoctorABI,
    functionName: "registerDoctor",
    chainId: 8081,
  });
  
  const submitIpfs = async () => {
    const link : any = await useIPFS(
      personalData,
      userImage,
      identificationData,
      identificationDoc,
      medicalCouncilData,
      councilFile,
      preference
    );
    const price = await ethers.utils.parseUnits(preference.minAmount.toString(), "ether");
    await write?.({
      recklesslySetUnpreparedArgs: [
        personalData.name,
        personalData.gender,
        personalData.city,
        preference.language,
        address,
        price,
        link,
      ],
    });

    

    // let deDoctorContract = new ethers.Contract(
    //   process.env.DEDOCTOR_SMART_CONTRACT || "",
    //   deDoctorABI,
    //   signer || provider
    // );

    // const contract = useContract();
  };

  const registrationSteps = [
    {
      id: 1,
      title: "Registration",
      subTitle: "Enter Details for Register ",
      component: (
        <PersonalDetailsForm
          personalData={personalData}
          setPersonalData={setPersonalData}
          userImage={userImage}
          setUserImage={setUserImage}
        />
      ),
      step: 1,
    },
    {
      id: 2,
      title: "Upload Identity",
      subTitle: "Upload your Identity for Verification",
      component: (
        <UploadIdentification
          identificationData={identificationData}
          setIdentificationData={setIdentificationData}
          identificationDoc={identificationDoc}
          setIdentificationDoc={setIdentificationDoc}
        />
      ),
      step: 2,
    },
    {
      id: 3,
      title: "Doctor Verification",
      subTitle: "Setup Your Payment Details",
      component: (
        <DoctorVerification
          medicalCouncilData={medicalCouncilData}
          setMedicalCouncilData={setMedicalCouncilData}
          councilFile={councilFile}
          setCouncilFile={setCouncilFile}
        />
      ),
      step: 3,
    },
    {
      id: 4,
      title: "Preferences",
      subTitle: "Setup Your Preferences for your Account",
      component: (
        <Preferences
          preference={preference}
          setPreference={setPreference}
          submitIpfs={submitIpfs}
        />
      ),
      step: 4,
    },
  ];
  return (
    <div className="px-5 py-3">
      <div className="flex flex-col md:flex-row space-x-5 space-y-5">
        <div className="space-y-3 md:w-[24rem]">
          {registrationSteps.map((registrationStep) => {
            return (
              <div
                key={registrationStep.id}
                className="flex space-x-2 px-2 py-3 shadow-lg rounded-md cursor-pointer border border-[#F4F4F4] dark:border-dark-input-border dark:bg-dark-card"
                onClick={() => dispatch(updateStep(registrationStep.id - 1))}
              >
                <div className="rounded-full p-2 bg-[#10916F] text-white w-10 h-10 text-center dark:bg-primary-yellow dark:text-black">
                  {registrationStep.step}
                </div>
                <div>
                  <h5 className="font-semibold dark:text-white">
                    {registrationStep.title}
                  </h5>
                  <p className="text-[#585858] dark:text-dark-muted">
                    {registrationStep.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full">{registrationSteps[doctorStep].component}</div>
      </div>
    </div>
  );
};

export default DoctorRegistration;
