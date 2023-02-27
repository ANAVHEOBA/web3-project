import { useState, useCallback } from "react";
import { NFTStorage, File } from "nft.storage";

const useNFTStorage = () => {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);

  const client: any = new NFTStorage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEFEMEZDNDY0RkI4MjIzMEFjODNDNkM1RGYzNmY3OUFjMTU5YTIwZmYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MjUzMzE3OTQwNCwibmFtZSI6Ik5GVCBSb3BzdGVuIFRlc3QifQ.RGO3YXbT8S_0CVqrVfuTAjACnGw52fvksciWLlEBp8c",
  });

  const storeData = useCallback(
    async (data: any) => {
      setIsReady(false);

      try {
        const result = await client.nftStorage.store(data);
        const ipfsURL = `https://ipfs.io/ipfs/${result.url.substr(7)}`;
        setIsReady(true);

        return ipfsURL;
      } catch (error: any) {
        setError(error);
      }
    },
    [client]
  );

  //   const fetchData = useCallback(async (hash) => {
  //     setIsReady(false);

  //     try {
  //       const result = await client.get(hash);
  //       setIsReady(true);
  //       return result.text();
  //     } catch (error) {
  //       setError(error);
  //     }
  //   }, [client]);

  return { storeData, isReady, error }; //Todo: fetchData
};

export default useNFTStorage;
