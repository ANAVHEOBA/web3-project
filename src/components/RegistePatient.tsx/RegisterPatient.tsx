import useNFTStorage from "@/hooks/useipfsStore";
import useContractData from "@/hooks/usePaitnetRegister";
import React, { useState } from "react";
import { useAccount, useProvider, useSigner } from "wagmi";
import { NFTStorage, File } from "nft.storage";
import { ethers } from "ethers";
import deDoctorABI from "@/constants/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPatient() {
  interface patientDataStruct {
    name: string;
    gender: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    country: string;
    description: string;
  }
  const [image, setImage] = useState<any>();
  const [patientData, setPatientData] = useState<patientDataStruct>({
    name: "",
    gender: "male",
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "",
    description: "",
  });
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const { address, isConnecting, isDisconnected } = useAccount();

  // const [data, updateData] = useContractData(provider, signer, address);
  // const {storeData, error, isReady} = useNFTStorage();
  const onSubmitHandle = async () => {
    try {
      const nftStorage = new NFTStorage({
        token: process.env.NEXT_PUBLIC_NFT_STORAGE_API || "",
      });
      const link = await nftStorage.store({ ...patientData, image });
      const ipfsURL = `https://ipfs.io/ipfs/${link.url.substr(7)}`;
      let patientRegisterContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
        deDoctorABI,
        signer || provider
      );
      let traction = await patientRegisterContract.registerPatient(
        patientData.name,
        address,
        patientData.gender,
        patientData.city,
        ipfsURL
      );
      let tx = await traction.wait();
      toast.success("Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="px-5 py-3">
       <ToastContainer />
      <div className="flex flex-col md:flex-row space-x-5 space-y-5">
        <div className="space-y-3 md:w-[15rem]"></div>
        <div className="form-group">
          <div className="flex w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-96 h-32 border-2 border-[#E6E9F4] border-dashed rounded-lg cursor-pointer bg-[#F5F6FA] dark:bg-dark-blue-input hover:bg-gray-100 dark:border-dark-input-border"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold dark:text-dark-muted">
                    Click to upload
                  </span>
                </p>
                <p className="text-xs text-gray-500 dark:text-dark-muted">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                name="image"
                onChange={(e) =>
                  setImage(e.currentTarget.files && e.currentTarget.files[0])
                }
              />
            </label>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="name">
              Legal Name *
            </label>
            <input
              type={"text"}
              name="name"
              id="name"
              value={patientData.name}
              onChange={(e) =>
                setPatientData({
                  ...patientData,
                  name: e.currentTarget.value,
                })
              }
              className="input-box"
              placeholder="Enter Name"
            />
          </div>
          <div className="flex space-x-2">
            <div className="input-group">
              <label className="input-label" htmlFor="gender">
                Gender *
              </label>
              <select
                className="input-box"
                placeholder="Select Gender"
                name="gender"
                id="gender"
                value={patientData.gender}
                onChange={(e) =>
                  setPatientData({
                    ...patientData,
                    gender: e.currentTarget.value,
                  })
                }
              >
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="dob">
                Date of Birth *
              </label>
              <input
                type={"date"}
                id="dob"
                name="dob"
                className="input-box"
                placeholder="Date of Birth"
                value={patientData.dob}
                onChange={(e) =>
                  setPatientData({
                    ...patientData,
                    dob: e.currentTarget.value,
                  })
                }
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="address">
              Address *
            </label>
            <textarea
              id="address"
              name="address"
              className="input-box md:w-[30rem]"
              placeholder="Enter Address"
              value={patientData.address}
              onChange={(e) =>
                setPatientData({
                  ...patientData,
                  address: e.currentTarget.value,
                })
              }
            />
          </div>
          <div className="flex flex-col md:flex-row space-x-2">
            <div className="input-group">
              <label className="input-label" htmlFor="city">
                City *
              </label>
              <input
                type={"text"}
                id="city"
                name="city"
                className="input-box"
                placeholder="City"
                value={patientData.city}
                onChange={(e) =>
                  setPatientData({
                    ...patientData,
                    city: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="state">
                State *
              </label>
              <input
                type={"text"}
                id="state"
                name="state"
                className="input-box"
                placeholder="State"
                value={patientData.state}
                onChange={(e) =>
                  setPatientData({
                    ...patientData,
                    state: e.currentTarget.value,
                  })
                }
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="country">
              Country *
            </label>
            <input
              type={"text"}
              name="name"
              id="country"
              value={patientData.country}
              onChange={(e) =>
                setPatientData({
                  ...patientData,
                  country: e.currentTarget.value,
                })
              }
              className="input-box"
              placeholder="Country"
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="about">
              About You *
            </label>
            <textarea
              name="about"
              id="about"
              className="input-box md:w-[30rem] h-[6rem]"
              value={patientData.description}
              onChange={(e) =>
                setPatientData({
                  ...patientData,
                  description: e.currentTarget.value,
                })
              }
            />
          </div>
          <button className="submit-btn" onClick={onSubmitHandle}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPatient;
