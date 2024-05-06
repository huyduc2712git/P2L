import apiClient from "@app/services/apiClient";
import { ENDPOINTS } from "@app/services/endPoints";

const loginAccount = (username: string, password: string) => {
  const requestData = { username, password };
  return apiClient.post(ENDPOINTS.AUTHENTICATION.loginAccount, requestData);
};

const registerAccount = (username: string, password: string) => {
  const requestData = { username, password };
  return apiClient.post(ENDPOINTS.AUTHENTICATION.registerAccount, requestData);
};

export const authRequest = { loginAccount, registerAccount };
