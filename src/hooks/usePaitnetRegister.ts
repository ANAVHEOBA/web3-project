import { useState, useEffect } from "react";
import { ethers } from "ethers";
import deDoctorABI from "@/constants/constants";

const useContractData = (provider: any, signer: any, walletAddress: any) => {
  const [contract, setContract] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const contractInstance = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      provider
    );
    const contractSigner = signer
      ? contractInstance.connect(signer)
      : contractInstance;
    setContract(contractSigner);
  }, [process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "", provider, signer]);

  const updateData = async (patientData: any, ipfsUrl: string) => {
    console.log(patientData);
    console.log(ipfsUrl);
    console.log();
    
    

    if (contract) {
      // Call the smart contract method to update data
      const tx = await contract.registerPatient(
        patientData.name,
        walletAddress,
        patientData.gender,
        patientData.city,
        ipfsUrl
      );
      await tx.wait();
      console.log(tx);
      
    }
  };

  return [data, updateData];
};

export default useContractData;
