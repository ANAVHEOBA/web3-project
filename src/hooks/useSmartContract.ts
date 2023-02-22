import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useSigner } from "wagmi";
import deDoctorABI from "../constants/constants";

const useSmartContract = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contractData, setContractData] = useState(null);
  const [serverError, setServerError] = useState(null);
  const { data: signer, isError, isLoading: loadingSigner } = useSigner();

  useEffect(() => {
    setIsLoading(true);
    const fetchSmartContract = async () => {
      try {
        const contract: any = new ethers.Contract(
          process.env.DEDOCTOR_SMART_CONTRACT || "",
          deDoctorABI,
          signer || undefined
        );


        setContractData(contract);
        setIsLoading(false);
      } catch (error: any) {
        setServerError(error);
        setIsLoading(false);
      }
    };
    fetchSmartContract();
  }, []);

  return { isLoading, contractData, serverError };
};

export default useSmartContract;
