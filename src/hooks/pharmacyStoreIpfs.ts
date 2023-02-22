import { NFTStorage, File } from "nft.storage";

type pharmacyStruct = {
  name: string;
  address: string;
  city: string;
  state: string;
  about: string;
};

type pharmacyOwnerStruct = {
  name: string;
  gender: string;
  dob: string;
  city: string;
  state: string;
  about: string;
};

type pharmacyCouncilStruct = {
  councilNumber: string;
  medicineSpecialization: string;
};

type pharmacyPreference = {
  openDays: string[];
  startTime: string;
  endTime: string;
};

const usePharmacyIPFs = async (
  pharmacyData: pharmacyStruct,
  pharmacyImage: any,
  pharmacyOwnerData: pharmacyOwnerStruct,
  pharmacyOwnerImage: any,
  pharmacyVerificationData: pharmacyCouncilStruct,
  pharmacyVerificationDoc: any,
  pharmacyPreferenceData: pharmacyPreference
) => {
  try {
    const nftStorage = new NFTStorage({
      token: process.env.NEXT_PUBLIC_NFT_STORAGE_API || "",
    });
    const link = await nftStorage.store({
      image: pharmacyImage,
      name: pharmacyData.name,
      description: pharmacyData.about || "",
      address: pharmacyData.address,
      city: pharmacyData.city,
      state: pharmacyData.state,

      ownerImage: pharmacyOwnerImage,
      ownerName: pharmacyOwnerData.name,
      gender: pharmacyOwnerData.gender,
      dob: pharmacyOwnerData.dob,
      ownerCity: pharmacyData.city,
      ownerState: pharmacyData.state,
      ownerAbout: pharmacyData.about,

      pharmacyVerificationDoc: pharmacyVerificationDoc,
      councilNumber: pharmacyVerificationData.councilNumber,
      medicineSpecialization: pharmacyVerificationData.medicineSpecialization,

      openDays: pharmacyPreferenceData.openDays,
      startTime: pharmacyPreferenceData.startTime,
      endTime: pharmacyPreferenceData.endTime,
    });
    const ipfsURL = `https://ipfs.io/ipfs/${link.url.substr(7)}`;
    return ipfsURL;
  } catch (error) {
    return error;
  }
};

export default usePharmacyIPFs;
