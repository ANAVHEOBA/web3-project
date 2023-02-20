import { NFTStorage, File } from "nft.storage";

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

const useIPFS = async (
  personalData: personalData,
  userImage : any,
  identificationData: identificationStruct,
  identificationDoc: any,
  medicalCouncilData: medicalCouncilStruct,
  councilFile: any,
  preference: preferenceStruct
) => {
  try {
    const nftStorage = new NFTStorage({
      token: process.env.NEXT_PUBLIC_NFT_STORAGE_API || "",
    });
    const link = await nftStorage.store({
      image: userImage,
      name: personalData.name,
      description: personalData.about || "",
      about: personalData.about || "",
      address: personalData.address,
      city: personalData.city,
      dob: personalData.dob,
      gender: personalData.gender,
      state: personalData.state,
      docNumber: identificationData.docNumber,
      docType: identificationData.docType,
      identificationDoc: identificationDoc,
      councilNumber: medicalCouncilData.councilNumber,
      specialization: medicalCouncilData.specialization,
      councilFile: councilFile,
      minAmount: preference.minAmount,
      callType: preference.callType,
      date: preference.date,
      days: preference.days,
      startTime: preference.startTime,
      language: preference.language,
      endTime: preference.endTime,
    });
    const ipfsURL = `https://ipfs.io/ipfs/${link.url.substr(7)}`;
    return ipfsURL;
  } catch (error) {
    return error;
  }
};

export default useIPFS

