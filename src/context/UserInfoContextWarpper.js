import { createContext, useContext, useState } from "react";

export const UserInfoContext = createContext(null);
const UserInfoContextWarpper = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    isLoading: true,
    user: null,
    cart: [],
  });

  return (
    <UserInfoContext.Provider value={{ ...userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfoContext = () => {
  const user = useContext(UserInfoContext);
  return { ...user };
};

export default UserInfoContextWarpper;
