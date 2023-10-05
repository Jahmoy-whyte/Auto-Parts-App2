import { useEffect, useState } from "react";
import {
  getRefreshTokenFromStorage,
  useAuthContext,
} from "../context/UserAuthContextWarpper";
import { getNewAccessToken } from "../services/refreshTokenFetch";
import { io } from "socket.io-client";
import { BASE_URL } from "../services/helper/baseUrl";

const useSocket = () => {
  const [socket, setSocket] = useState({
    socket: null,
    isLoading: true,
    error: null,
  });

  const { accessToken, setAuthData } = useAuthContext();
  useEffect(() => {
    const socket = io(BASE_URL, {
      auth: {
        token: accessToken,
      },
    });

    socket.on("connect", () => {
      setSocket((prev) => ({ ...prev, socket: socket, isLoading: false }));
    });

    socket.on("connect_error", async (error) => {
      try {
        if (error.message !== "jwt expired") throw error;
        const refreshToken = await getRefreshTokenFromStorage();
        const newAccessToken = await getNewAccessToken(refreshToken);
        socket.auth.token = newAccessToken;
        socket.connect();
      } catch (error) {
        if (
          error.message == "forbidden(R101)" ||
          error.message == "forbidden(R102)"
        ) {
          setAuthData((prev) => ({
            ...prev,
            isAuth: false,
          }));
          return;
        }
        ShowToast("customErrorToast", error.message);
      }
    });
    return () => socket.disconnect();
  }, []);

  return { socket };
};

export default useSocket;
