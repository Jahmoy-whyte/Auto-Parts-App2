import { useEffect, useState, useContext } from "react";
import { dbGetNewArrival } from "../../services/prouductFetch";
//import { UserAuthContext } from "../../context/UserAuthContextWarpper";
const useHome = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const responce = await dbGetNewArrival();
        console.log(responce);
        setData(responce);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return [data, isLoading];
};

export default useHome;
