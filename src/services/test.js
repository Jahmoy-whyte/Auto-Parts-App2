import { BASE_URL } from "./helper/baseUrl";
import { io } from "socket.io-client";

export const testdb = async (accessToken) => {
  const socket = io("http://192.168.100.28:3000", {
    extraHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return socket;
};
