import { useEffect, useState } from "react";
import { dbGetProducts } from "../../services/prouductFetch";
const useHome = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const responce = await dbGetProducts();
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
