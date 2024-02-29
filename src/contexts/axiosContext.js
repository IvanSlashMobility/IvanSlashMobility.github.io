import React from 'react';
import axios from 'axios';
import { useAuth } from './authContext';
import ToastService from '../services/toastService';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { USER_DATA } from '../services/storageService/storageKeys';
import { storageService } from '../services/storageService/storageService';


const AxiosContext = React.createContext(null);

export const AxiosProvider = ({ children }) => {

  const { t } = useTranslation();
  const auth = useAuth();
  const { showWarningToast } = ToastService();
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const authAxios = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": i18next.language
    }
  });

  const publicAxios = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": i18next.language
    }
  });

  publicAxios.interceptors.request.use(
    (config) => {
      let userData = storageService.getData(USER_DATA);
      if (!config.headers.Authorization && userData?.token) config.headers.Authorization = `Bearer ${userData.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  )

  publicAxios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        showWarningToast(t('ERROR.SESSION_EXPIRED'));
        auth.logout();
      } else {
        return Promise.reject(error);
      }
  });

  return (
    <AxiosContext.Provider value={{ publicAxios, authAxios }}>
      { children }
    </AxiosContext.Provider>
  );
}

export const useAxios = () => {
  return React.useContext(AxiosContext);
}