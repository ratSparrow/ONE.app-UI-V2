import { authKey, role } from "../constants/authKey";
import { decodedToken } from "../helpers/utils/jwt";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../helpers/utils/saveData";

export const storeUserInfo = (verify) => {
  return setToLocalStorage(authKey, verify);
};
export const storeUserRole = (verify) => {
  return localStorage.setItem(role, verify);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  return !!authToken;
};
export const isRole = () => {
  const userRole = getFromLocalStorage(role);

  return userRole;
};

export const removeUserInfo = (key) => {
  return localStorage.removeItem(key);
};
export const removeUserRoleInfo = (key) => {
  return localStorage.removeItem(key);
};
