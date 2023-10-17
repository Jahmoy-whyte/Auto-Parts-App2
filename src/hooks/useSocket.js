import { useEffect, useState } from "react";
import {
  UserAuthContext,
  getRefreshTokenFromStorage,
  useAuthContext,
} from "../context/UserAuthContextWarpper";
import { getNewAccessToken } from "../services/refreshTokenFetch";
import { io } from "socket.io-client";
import { BASE_URL } from "../services/helper/baseUrl";
import ShowToast from "../helper/ShowToast";
import { useUserInfoContext } from "../context/UserInfoContextWarpper";

const useSocket = () => {
  const [socket, setSocket] = useState({
    socket: null,
    isLoading: true,
    error: null,
  });

  const { accessToken, setAuthData } = useAuthContext();

  const { userInfo } = useUserInfoContext();
  const socketAuthErrors = ["no token", "jwt expired"];

  useEffect(() => {
    const socket = io(BASE_URL, {
      auth: {
        token: accessToken,
        role: userInfo.userStatus,
      },
    });

    socket.on("connect", () => {
      setSocket((prev) => ({ ...prev, socket: socket, isLoading: false }));
    });

    socket.on("connect_error", async (error) => {
      console.log(error.message);
      if (!socketAuthErrors.includes(error.message)) {
        setSocket((prev) => ({
          ...prev,
          error: error.message,
          isLoading: false,
        }));
        return;
      }

      try {
        const refreshToken = await getRefreshTokenFromStorage();
        const newAccessToken = await getNewAccessToken(refreshToken);
        socket.auth.token = newAccessToken;
        socket.auth.role = userInfo.userStatus;
        socket.connect();
      } catch (error) {
        ShowToast("customErrorToast", error.message);
        setAuthData((prev) => ({
          ...prev,
          isAuth: false,
        }));
        return;
      }
    });
    return () => socket.disconnect();
  }, []);

  return { socket };
};

export default useSocket;
