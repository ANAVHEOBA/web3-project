import { useState, useEffect } from "react";
import { ethers } from "ethers";
import deDoctorABI from "@/constants/constants";

const useContractData = (provider: any, walletAddress: string) => {
  const [contract, setContract] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Create an instance of the contract using the ABI and provider
    const contractInstance: any = new ethers.Contract(
      process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
      deDoctorABI,
      provider
    );
    setContract(contractInstance);
  }, [process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "", provider]);

  const fetchData = async () => {
    if (contract) {
      // Call the smart contract method to fetch data
      const result = await contract.getPatientByWalletAddress(walletAddress);
      setData(result);
    }
  };

  useEffect(() => {
    fetchData();
  }, [contract]);

  return data;
};

export default useContractData;
